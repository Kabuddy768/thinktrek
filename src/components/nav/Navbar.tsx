// import Logo from '../../assets/images/Logo.jpeg'
// import { NavLink } from 'react-router-dom'
// import { Home, Info, Menu } from 'lucide-react'

// const Navbar = () => {
//   return (
//     <div className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-slate-50/90 to-white/90 border-b border-slate-200/50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Left side: Mobile menu + Logo */}
//           <div className="flex items-center gap-2">
//             {/* Mobile Menu */}
//             <div className="dropdown lg:hidden">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost hover:bg-slate-100/80 rounded-xl"
//                 data-test="navbar-menu-button"
//               >
//                 <Menu className="h-5 w-5 text-slate-700" />
//               </div>
//               <ul className="menu menu-sm dropdown-content rounded-2xl z-50 mt-3 w-64 p-3 shadow-2xl bg-white/95 backdrop-blur-lg border border-slate-200/50">
//                 <li>
//                   <NavLink to="/" className="menu-item" data-test="nav-home-mobile">
//                     <Home className="w-5 h-5" /> Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/about" className="menu-item" data-test="nav-about-mobile">
//                     <Info className="w-5 h-5" /> About
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>

//             {/* Logo */}
//             <div className="flex items-center" data-test="navbar-logo">
//               <img
//                 src={Logo}
//                 alt="Logo"
//                 className="w-14 h-14 rounded-xl bg-white p-1"
//               />
//               <span className="ml-3 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-emerald-600 hidden sm:block">
//                 Crystal Events
//               </span>
//             </div>
//           </div>

//           {/* Desktop Navigation Links */}
//           <nav className="hidden lg:flex">
//             <ul className="flex gap-2">
//               <li>
//                 <NavLink to="/" className="menu-item btn btn-ghost" data-test="nav-home-desktop">
//                   <Home className="w-4 h-4" /> Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about" className="menu-item btn btn-ghost" data-test="nav-about-desktop">
//                   <Info className="w-4 h-4" /> About
//                 </NavLink>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

// ============================================
// src/components/common/Navigation/Navigation.tsx
// ============================================
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0">
            <h1 className={`text-2xl font-bold transition-colors ${
              scrolled ? 'text-blue-600' : 'text-white'
            }`}>
              Thinktrek
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path 
                    ? 'text-blue-600 font-semibold' 
                    : scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
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
          </div>
        </div>
      )}
    </nav>
  )
}