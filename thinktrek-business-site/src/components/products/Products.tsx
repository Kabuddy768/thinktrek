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

              <div className="mt-12">
                        {/* CTA: Updated to gradient/teal/cyan for modern polish and strong visual weight */}
                        <Link
                            to="/contact"
                            className="inline-block bg-gradient-to-r from-cyan-400 to-teal-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-300 transition-all transform hover:scale-[1.05] shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
                        >
                            Get Started Today
                        </Link>
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
