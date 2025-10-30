// ============================================
// src/components/common/Footer/Footer.tsx
// ============================================
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Thinktrek</h3>
            <p className="text-gray-400 mb-4">
              Empowering businesses with innovative automation solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <a href="mailto:Davidk@thinktrek.co.ke" className="hover:text-white">
                  Davidk@thinktrek.co.ke
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/products" className="hover:text-white">Palladium Accounting </Link></li>
              <li><Link to="/products" className="hover:text-white">IQ Retail </Link></li>
              <li><Link to="/products" className="hover:text-white">Xact ERP</Link></li>
              <li><Link to="/products" className="hover:text-white">Sage 200</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thinktrek Business Solutions Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}