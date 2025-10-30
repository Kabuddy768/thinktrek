import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { logout } from '../../store/slices/authSlice';
import { type RootState, type AppDispatch } from '../../store/store';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Logged out successfully');
    navigate('/blog');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHome ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link to="/" className="shrink-0 flex items-center gap-2">
            <h1
              className={`text-2xl font-bold transition-colors ${
                scrolled || !isHome ? 'text-blue-600' : 'text-white'
              }`}
            >
              Thinktrek
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-600 font-semibold'
                    : scrolled || !isHome
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* REMOVED: Sign In button - only show controls if already authenticated */}
            {isAuthenticated && (
              <div className="flex items-center space-x-4 border-l border-gray-200 pl-4">
                <div className="hidden md:flex flex-col items-end">
                  <span className="text-sm font-semibold text-gray-800">
                    {user?.first_name} {user?.last_name}
                  </span>
                  <span className="text-xs text-gray-500">{user?.email}</span>
                </div>

                {user?.image_url && (
                  <img
                    src={user.image_url}
                    alt={`${user.first_name} ${user.last_name}`}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                  />
                )}

                <Link
                  to="/admin/blog"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <FaUser />
                  <span className="hidden sm:inline">Dashboard</span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                  <FaSignOutAlt />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden focus:outline-none ${
              scrolled || !isHome ? 'text-gray-700' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {isAuthenticated && (
              <>
                <Link
                  to="/admin/blog"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="w-full text-left block px-3 py-2 text-red-600 hover:bg-red-100 rounded-md"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}