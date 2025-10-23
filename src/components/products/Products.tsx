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

//   const getAccentClasses = (color) => {
//     const colors = {
//       purple: 'group-hover:text-purple-600 focus:ring-purple-500/50',
//       blue: 'group-hover:text-blue-600 focus:ring-blue-500/50',
//       green: 'group-hover:text-green-600 focus:ring-green-500/50',
//       orange: 'group-hover:text-orange-600 focus:ring-orange-500/50'
//     }
//     return colors[color] || colors.blue
//   }

//   return (
//     <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
//       {/* Background Decoration */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
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
//               {/* Gradient Border Top */}
//               <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />
              
//               {/* Hover Gradient Background */}
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
//                     <h3 className={`text-2xl lg:text-3xl font-bold text-gray-900 mb-3 transition-colors duration-300 ${getAccentClasses(product.accentColor)}`}>
//                       {product.name}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
//                       {product.description}
//                     </p>
//                   </div>
//                 </div>
                
//                 {/* Features List with Staggered Animation */}
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
//                         <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-50" />
//                         <CheckCircle2 size={22} className="relative text-green-500" />
//                       </div>
//                       <span className="font-medium text-base">{feature}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Button with Enhanced Interaction */}
//                 <button
//                   className={`group/btn relative w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:bg-gradient-to-r ${product.gradient} focus:outline-none focus:ring-4 ${getAccentClasses(product.accentColor)} active:scale-95`}
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
//                 </button>
//               </div>

//               {/* Corner Decoration */}
//               <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.gradient} opacity-5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500`} />
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA with Enhanced Design */}
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

//       {/* Custom CSS for grid pattern */}
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

import { useState, useEffect } from 'react'
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

export default function ProductShowcase() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      name: 'Palladium Accounting IQ',
      description: 'Comprehensive accounting solution with real-time financial insights and automated reporting for growing businesses.',
      features: ['Financial Reporting', 'Tax Management', 'Multi-Currency Support', 'Audit Trail'],
      gradient: 'from-purple-500 via-purple-600 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50',
      icon: '📊',
      accentColor: 'purple'
    },
    {
      name: 'Retail Management',
      description: 'Complete point-of-sale and inventory management system designed specifically for retail businesses.',
      features: ['POS System', 'Inventory Tracking', 'Sales Analytics', 'Customer Management'],
      gradient: 'from-blue-500 via-blue-600 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      icon: '🛒',
      accentColor: 'blue'
    },
    {
      name: 'Xact ERP',
      description: 'Enterprise resource planning solution for manufacturing and distribution companies seeking efficiency.',
      features: ['Production Planning', 'Supply Chain', 'Warehouse Management', 'Quality Control'],
      gradient: 'from-green-500 via-green-600 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50',
      icon: '⚙️',
      accentColor: 'green'
    },
    {
      name: 'Sage 200',
      description: 'Scalable business management software trusted by thousands of growing organizations worldwide.',
      features: ['Financial Management', 'Business Intelligence', 'CRM Integration', 'Cloud Access'],
      gradient: 'from-orange-500 via-orange-600 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      icon: '🏢',
      accentColor: 'orange'
    }
  ]

  // Removed getAccentClasses - all color styling is now done via template literals in JSX

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Decoration (Unchanged) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Unchanged) */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-4">
            <Sparkles size={16} />
            Our Solutions
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Powerful Software for Every Business Need
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Industry-leading solutions that drive efficiency, growth, and profitability
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product, idx) => (
            <div
              key={idx}
              className={`group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${idx * 150}ms`,
                willChange: 'transform'
              }}
            >
              {/* Gradient Border Top (Unchanged) */}
              <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />
              
              {/* Hover Gradient Background (Unchanged) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 lg:p-10">
                {/* Icon & Title Section */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
                    <div className="relative text-6xl transform group-hover:scale-110 transition-transform duration-500">
                      {product.icon}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {/* Title now uses dynamic accent color for hover */}
                    <h3 className={`text-2xl lg:text-3xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-${product.accentColor}-600`}>
                      {product.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                      {product.description}
                    </p>
                  </div>
                </div>
                
                {/* Features List with Staggered Animation and Dynamic Checkmarks */}
                <div className="space-y-4 mb-8 mt-8">
                  {product.features.map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-3 text-gray-700 transform transition-all duration-300 hover:translate-x-2"
                      style={{
                        transitionDelay: `${fIdx * 50}ms`
                      }}
                    >
                      <div className="relative flex-shrink-0">
                        {/* Dynamic accent color for blur */}
                        <div className={`absolute inset-0 bg-${product.accentColor}-400 rounded-full blur opacity-50`} />
                        {/* Dynamic accent color for icon */}
                        <CheckCircle2 size={22} className={`relative text-${product.accentColor}-500`} />
                      </div>
                      <span className="font-medium text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button changed to an <a> tag for navigation semantics */}
                <a
                  href={`#${product.name.toLowerCase().replace(/\s/g, '-')}`} // Placeholder link
                  className={`group/btn relative w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-base overflow-hidden transition-all duration-300 hover:bg-gradient-to-r ${product.gradient} focus:outline-none focus:ring-4 focus:ring-${product.accentColor}-500/50 active:scale-95 flex items-center justify-center`}
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000" />
                  
                  <span className="relative flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight 
                      size={20} 
                      className="transform group-hover/btn:translate-x-2 transition-transform duration-300" 
                    />
                  </span>
                </a>
              </div>

              {/* Corner Decoration (Unchanged) */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.gradient} opacity-5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA (Unchanged) */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:gap-5 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            View All Products
            <ArrowRight 
              size={22} 
              className="transform group-hover:translate-x-1 transition-transform" 
            />
          </button>
        </div>
      </div>

      {/* Custom CSS for grid pattern (Unchanged) */}
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
      `}</style>
    </section>
  )
}