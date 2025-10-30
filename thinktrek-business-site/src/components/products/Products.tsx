// // import { useState, useEffect } from 'react'
// // import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

// // export default function ProductShowcase() {
// //   const [isVisible, setIsVisible] = useState(false)

// //   useEffect(() => {
// //     setIsVisible(true)
// //   }, [])

// //   const products = [
// //     {
// //       name: 'Palladium Accounting IQ',
// //       description: 'Comprehensive accounting solution with real-time financial insights and automated reporting for growing businesses.',
// //       features: ['Financial Reporting', 'Tax Management', 'Multi-Currency Support', 'Audit Trail'],
// //       gradient: 'from-purple-500 via-purple-600 to-indigo-600',
// //       bgGradient: 'from-purple-50 to-indigo-50',
// //       icon: '📊',
// //       accentColor: 'purple'
// //     },
// //     {
// //       name: 'Retail Management',
// //       description: 'Complete point-of-sale and inventory management system designed specifically for retail businesses.',
// //       features: ['POS System', 'Inventory Tracking', 'Sales Analytics', 'Customer Management'],
// //       gradient: 'from-blue-500 via-blue-600 to-cyan-600',
// //       bgGradient: 'from-blue-50 to-cyan-50',
// //       icon: '🛒',
// //       accentColor: 'blue'
// //     },
// //     {
// //       name: 'Xact ERP',
// //       description: 'Enterprise resource planning solution for manufacturing and distribution companies seeking efficiency.',
// //       features: ['Production Planning', 'Supply Chain', 'Warehouse Management', 'Quality Control'],
// //       gradient: 'from-green-500 via-green-600 to-teal-600',
// //       bgGradient: 'from-green-50 to-teal-50',
// //       icon: '⚙️',
// //       accentColor: 'green'
// //     },
// //     {
// //       name: 'Sage 200',
// //       description: 'Scalable business management software trusted by thousands of growing organizations worldwide.',
// //       features: ['Financial Management', 'Business Intelligence', 'CRM Integration', 'Cloud Access'],
// //       gradient: 'from-orange-500 via-orange-600 to-red-600',
// //       bgGradient: 'from-orange-50 to-red-50',
// //       icon: '🏢',
// //       accentColor: 'orange'
// //     }
// //   ]

// //   const getAccentClasses = (color) => {
// //     const colors = {
// //       purple: 'group-hover:text-purple-600 focus:ring-purple-500/50',
// //       blue: 'group-hover:text-blue-600 focus:ring-blue-500/50',
// //       green: 'group-hover:text-green-600 focus:ring-green-500/50',
// //       orange: 'group-hover:text-orange-600 focus:ring-orange-500/50'
// //     }
// //     return colors[color] || colors.blue
// //   }

// //   return (
// //     <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
// //       {/* Background Decoration */}
// //       <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
// //       <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
// //       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      
// //       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Section Header */}
// //         <div 
// //           className={`text-center mb-20 transition-all duration-1000 ${
// //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
// //           }`}
// //         >
// //           <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-4">
// //             <Sparkles size={16} />
// //             Our Solutions
// //           </div>
// //           <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
// //             Powerful Software for Every Business Need
// //           </h2>
// //           <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
// //             Industry-leading solutions that drive efficiency, growth, and profitability
// //           </p>
// //         </div>

// //         {/* Products Grid */}
// //         <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
// //           {products.map((product, idx) => (
// //             <div
// //               key={idx}
// //               className={`group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] ${
// //                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
// //               }`}
// //               style={{ 
// //                 transitionDelay: `${idx * 150}ms`,
// //                 willChange: 'transform'
// //               }}
// //             >
// //               {/* Gradient Border Top */}
// //               <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />
              
// //               {/* Hover Gradient Background */}
// //               <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
// //               <div className="relative p-8 lg:p-10">
// //                 {/* Icon & Title Section */}
// //                 <div className="flex items-start gap-5 mb-6">
// //                   <div className="relative">
// //                     <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
// //                     <div className="relative text-6xl transform group-hover:scale-110 transition-transform duration-500">
// //                       {product.icon}
// //                     </div>
// //                   </div>
                  
// //                   <div className="flex-1">
// //                     <h3 className={`text-2xl lg:text-3xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${getAccentClasses(product.accentColor)}`}>
// //                       {product.name}
// //                     </h3>
// //                     <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
// //                       {product.description}
// //                     </p>
// //                   </div>
// //                 </div>
                
// //                 {/* Features List with Staggered Animation */}
// //                 <div className="space-y-4 mb-8 mt-8">
// //                   {product.features.map((feature, fIdx) => (
// //                     <div
// //                       key={fIdx}
// //                       className="flex items-center gap-3 text-gray-700 transform transition-all duration-300 hover:translate-x-2"
// //                       style={{
// //                         transitionDelay: `${fIdx * 50}ms`
// //                       }}
// //                     >
// //                       <div className="relative flex-shrink-0">
// //                         <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-50" />
// //                         <CheckCircle2 size={22} className="relative text-green-500" />
// //                       </div>
// //                       <span className="font-medium text-base">{feature}</span>
// //                     </div>
// //                   ))}
// //                 </div>

// //                 {/* CTA Button with Enhanced Interaction */}
// //                 <button
// //                   className={`group/btn relative w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:bg-gradient-to-r ${product.gradient} focus:outline-none focus:ring-4 ${getAccentClasses(product.accentColor)} active:scale-95`}
// //                 >
// //                   {/* Button shine effect */}
// //                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                  
// //                   <span className="relative flex items-center justify-center gap-2">
// //                     Learn More
// //                     <ArrowRight 
// //                       size={20} 
// //                       className="transform group-hover/btn:translate-x-2 transition-transform duration-300" 
// //                     />
// //                   </span>
// //                 </button>
// //               </div>

// //               {/* Corner Decoration */}
// //               <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.gradient} opacity-5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500`} />
// //             </div>
// //           ))}
// //         </div>

// //         {/* Bottom CTA with Enhanced Design */}
// //         <div 
// //           className={`text-center mt-16 transition-all duration-1000 delay-700 ${
// //             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
// //           }`}
// //         >
// //           <button
// //             className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:gap-5 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
// //           >
// //             View All Products
// //             <ArrowRight 
// //               size={22} 
// //               className="transform group-hover:translate-x-1 transition-transform" 
// //             />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Custom CSS for grid pattern */}
// //       <style>{`
// //         .bg-grid-pattern {
// //           background-image: 
// //             linear-gradient(to right, #e5e7eb 1px, transparent 1px),
// //             linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
// //           background-size: 4rem 4rem;
// //         }
// //       `}</style>
// //     </section>
// //   )
// // }

// import { useState, useEffect } from 'react'
// import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

// export default function ProductShowcase() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const products = [
//     {
//       name: 'Palladium Accounting IQ',
//       description: 'Comprehensive accounting solution with real-time financial insights and automated reporting for growing businesses.',
//       features: ['Financial Reporting', 'Tax Management', 'Multi-Currency Support', 'Audit Trail'],
//       gradient: 'from-purple-500 via-purple-600 to-indigo-600',
//       bgGradient: 'from-purple-50 to-indigo-50',
//       icon: '📊',
//       accentColor: 'purple'
//     },
//     {
//       name: 'Retail Management',
//       description: 'Complete point-of-sale and inventory management system designed specifically for retail businesses.',
//       features: ['POS System', 'Inventory Tracking', 'Sales Analytics', 'Customer Management'],
//       gradient: 'from-blue-500 via-blue-600 to-cyan-600',
//       bgGradient: 'from-blue-50 to-cyan-50',
//       icon: '🛒',
//       accentColor: 'blue'
//     },
//     {
//       name: 'Xact ERP',
//       description: 'Enterprise resource planning solution for manufacturing and distribution companies seeking efficiency.',
//       features: ['Production Planning', 'Supply Chain', 'Warehouse Management', 'Quality Control'],
//       gradient: 'from-green-500 via-green-600 to-teal-600',
//       bgGradient: 'from-green-50 to-teal-50',
//       icon: '⚙️',
//       accentColor: 'green'
//     },
//     {
//       name: 'Sage 200',
//       description: 'Scalable business management software trusted by thousands of growing organizations worldwide.',
//       features: ['Financial Management', 'Business Intelligence', 'CRM Integration', 'Cloud Access'],
//       gradient: 'from-orange-500 via-orange-600 to-red-600',
//       bgGradient: 'from-orange-50 to-red-50',
//       icon: '🏢',
//       accentColor: 'orange'
//     }
//   ]

//   // Removed getAccentClasses - all color styling is now done via template literals in JSX

//   return (
//     <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
//       {/* Background Decoration (Unchanged) */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header (Unchanged) */}
//         <div 
//           className={`text-center mb-20 transition-all duration-1000 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//         >
//           <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-4">
//             <Sparkles size={16} />
//             Our Solutions
//           </div>
//           <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
//             Powerful Software for Every Business Need
//           </h2>
//           <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Industry-leading solutions that drive efficiency, growth, and profitability
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
//           {products.map((product, idx) => (
//             <div
//               key={idx}
//               className={`group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
//               }`}
//               style={{ 
//                 transitionDelay: `${idx * 150}ms`,
//                 willChange: 'transform'
//               }}
//             >
//               {/* Gradient Border Top (Unchanged) */}
//               <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />
              
//               {/* Hover Gradient Background (Unchanged) */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
//               <div className="relative p-8 lg:p-10">
//                 {/* Icon & Title Section */}
//                 <div className="flex items-start gap-5 mb-6">
//                   <div className="relative">
//                     <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
//                     <div className="relative text-6xl transform group-hover:scale-110 transition-transform duration-500">
//                       {product.icon}
//                     </div>
//                   </div>
                  
//                   <div className="flex-1">
//                     {/* Title now uses dynamic accent color for hover */}
//                     <h3 className={`text-2xl lg:text-3xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-${product.accentColor}-600`}>
//                       {product.name}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
//                       {product.description}
//                     </p>
//                   </div>
//                 </div>
                
//                 {/* Features List with Staggered Animation and Dynamic Checkmarks */}
//                 <div className="space-y-4 mb-8 mt-8">
//                   {product.features.map((feature, fIdx) => (
//                     <div
//                       key={fIdx}
//                       className="flex items-center gap-3 text-gray-700 transform transition-all duration-300 hover:translate-x-2"
//                       style={{
//                         transitionDelay: `${fIdx * 50}ms`
//                       }}
//                     >
//                       <div className="relative flex-shrink-0">
//                         {/* Dynamic accent color for blur */}
//                         <div className={`absolute inset-0 bg-${product.accentColor}-400 rounded-full blur opacity-50`} />
//                         {/* Dynamic accent color for icon */}
//                         <CheckCircle2 size={22} className={`relative text-${product.accentColor}-500`} />
//                       </div>
//                       <span className="font-medium text-base">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Button changed to an <a> tag for navigation semantics */}
//                 <a
//                   href={`#${product.name.toLowerCase().replace(/\s/g, '-')}`} // Placeholder link
//                   className={`group/btn relative w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:bg-gradient-to-r ${product.gradient} focus:outline-none focus:ring-4 focus:ring-${product.accentColor}-500/50 active:scale-95 flex items-center justify-center`}
//                 >
//                   {/* Button shine effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                  
//                   <span className="relative flex items-center justify-center gap-2">
//                     Learn More
//                     <ArrowRight 
//                       size={20} 
//                       className="transform group-hover/btn:translate-x-2 transition-transform duration-300" 
//                     />
//                   </span>
//                 </a>
//               </div>

//               {/* Corner Decoration (Unchanged) */}
//               <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.gradient} opacity-5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500`} />
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA (Unchanged) */}
//         <div 
//           className={`text-center mt-16 transition-all duration-1000 delay-700 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//         >
//           <button
//             className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:gap-5 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
//           >
//             View All Products
//             <ArrowRight 
//               size={22} 
//               className="transform group-hover:translate-x-1 transition-transform" 
//             />
//           </button>
//         </div>
//       </div>

//       {/* Custom CSS for grid pattern (Unchanged) */}
//       <style>{`
//         .bg-grid-pattern {
//           background-image: 
//             linear-gradient(to right, #e5e7eb 1px, transparent 1px),
//             linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
//           background-size: 4rem 4rem;
//         }
//       `}</style>
//     </section>
//   )
// }

import { useState, useEffect, type JSX } from 'react'
import { CheckCircle2, ArrowRight, Shield, TrendingUp, Building2, Globe } from 'lucide-react'
import { Link } from 'react-router-dom' // ✅ Imported for potential navigation

// ✅ Type definition for product structure
interface Product {
  name: string
  description: string
  features: string[]
  icon: JSX.Element
  stats: { value: string; label: string }
  accentColor: {
    primary: string
    secondary: string
    gradient: string
    border: string
    bg: string
    hover: string
  }
}

// ✅ Main component
export default function ProductShowcase() {
  // Animation and hover state
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  // Trigger fade-in animation on mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // ✅ Product data (could later be moved to a separate JSON or API)
  const products: Product[] = [
    {
      name: 'Palladium Accounting',
      description:
        'Enterprise-grade financial management with real-time insights, automated compliance, and intelligent reporting for growing organizations.',
      features: [
        'Automated Financial Reporting',
        'Multi-Entity Tax Management',
        'Multi-Currency Support',
        'Complete Audit Trail & Compliance'
      ],
      icon: <TrendingUp className="w-7 h-7" />,
      stats: { value: '99.9%', label: 'Uptime' },
      accentColor: {
        primary: 'rgb(99, 102, 241)',
        secondary: 'rgb(139, 92, 246)',
        gradient: 'from-indigo-500 to-violet-500',
        border: 'border-indigo-200',
        bg: 'bg-indigo-50',
        hover: 'hover:border-indigo-300'
      }
    },
    {
      name: 'IQ Retail',
      description:
        'Comprehensive point-of-sale and inventory ecosystem designed to optimize retail operations and enhance customer experiences.',
      features: [
        'Cloud-Based POS System',
        'Real-Time Inventory Tracking',
        'Advanced Sales Analytics',
        'Integrated CRM & Loyalty Programs'
      ],
      icon: <Building2 className="w-7 h-7" />,
      stats: { value: '200+', label: 'Retail Clients' },
      accentColor: {
        primary: 'rgb(14, 165, 233)',
        secondary: 'rgb(6, 182, 212)',
        gradient: 'from-sky-500 to-cyan-500',
        border: 'border-sky-200',
        bg: 'bg-sky-50',
        hover: 'hover:border-sky-300'
      }
    },
    {
      name: 'Xact ERP',
      description:
        'Full-spectrum enterprise resource planning for manufacturing and distribution, driving operational excellence and efficiency.',
      features: [
        'Advanced Production Planning',
        'End-to-End Supply Chain Management',
        'Smart Warehouse Automation',
        'Quality Control & Compliance'
      ],
      icon: <Globe className="w-7 h-7" />,
      stats: { value: '40%', label: 'Cost Reduction' },
      accentColor: {
        primary: 'rgb(16, 185, 129)',
        secondary: 'rgb(52, 211, 153)',
        gradient: 'from-emerald-500 to-teal-500',
        border: 'border-emerald-200',
        bg: 'bg-emerald-50',
        hover: 'hover:border-emerald-300'
      }
    },
    {
      name: 'Sage 200',
      description:
        'Trusted business management platform with proven scalability, empowering thousands of organizations worldwide to achieve their goals.',
      features: [
        'Comprehensive Financial Management',
        'Predictive Business Intelligence',
        'Seamless CRM Integration',
        'Secure Cloud & On-Premise Options'
      ],
      icon: <Shield className="w-7 h-7" />,
      stats: { value: '50K+', label: 'Global Users' },
      accentColor: {
        primary: 'rgb(245, 158, 11)',
        secondary: 'rgb(251, 146, 60)',
        gradient: 'from-amber-500 to-orange-500',
        border: 'border-amber-200',
        bg: 'bg-amber-50',
        hover: 'hover:border-amber-300'
      }
    }
  ]

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* ===== Decorative Background Elements ===== */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== Header Section ===== */}
        <div
          className={`text-center mb-24 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            ENTERPRISE SOLUTIONS
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Built for Business Growth
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Industry-leading platforms trusted by organizations across Kenya and beyond
          </p>
        </div>

        {/* ===== Products Grid ===== */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {products.map((product, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveCard(idx)}
              onMouseLeave={() => setActiveCard(null)}
              className={`group relative bg-white rounded-2xl border-2 ${product.accentColor.border} ${product.accentColor.hover} shadow-sm hover:shadow-xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Top Accent Bar */}
              <div className={`h-1 bg-gradient-to-r ${product.accentColor.gradient} rounded-t-2xl`} />

              <div className="p-8 lg:p-10">
                {/* Icon + Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${product.accentColor.gradient} text-white shadow-lg transition-transform duration-300 ${
                        activeCard === idx ? 'scale-110 rotate-3' : ''
                      }`}
                      style={{
                        boxShadow:
                          activeCard === idx
                            ? `0 10px 30px -5px ${product.accentColor.primary}40`
                            : ''
                      }}
                    >
                      {product.icon}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{product.name}</h3>
                      <div
                        className="inline-flex items-center gap-2 text-sm font-semibold"
                        style={{ color: product.accentColor.primary }}
                      >
                        <span>{product.stats.value}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-600 font-normal">{product.stats.label}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-8 text-base">{product.description}</p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2
                        size={20}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: product.accentColor.primary }}
                      />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Call-to-Action Button */}
                {/* <Link to={`/${product.name.toLowerCase().replace(/\s+/g, '-')}`}> */}
                <Link to={`/products/${product.name.toLowerCase().replace(/\s+/g, '-').replace(/-+$/, '')}`}>

                  <button
                    className={`group/btn relative w-full bg-gradient-to-r ${product.accentColor.gradient} text-white py-3.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden`}
                    style={{
                      boxShadow: `0 4px 15px -3px ${product.accentColor.primary}30`
                    }}
                  >
                    <span className="relative flex items-center justify-center gap-2">
                      Learn More About {product.name}
                      <ArrowRight
                        size={18}
                        className="transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Bottom Trust Section ===== */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-slate-900 rounded-2xl p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-slate-400">
                  Join hundreds of organizations achieving operational excellence
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-slate-900 px-8 py-3.5 rounded-xl font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl">
                  Schedule Demo
                </button>
                <button className="bg-white/10 text-white border-2 border-white/20 px-8 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-all">
                  View All Solutions
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-white/10">
              {['ISO 27001 Certified', '99.9% SLA Guarantee', '24/7 Enterprise Support', '10+ Years in Market'].map(
                (text, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span>{text}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
