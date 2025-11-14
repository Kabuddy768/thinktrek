
import { Globe, CheckCircle2, Factory, Truck, ClipboardCheck, Package, Settings, BarChart3, Users, TrendingUp, Download, Play, FileText, Award, ArrowRight, Zap, Layers, Target } from "lucide-react"
import Footer from "../components/footer/Footer"

export default function XactErpPage() {
  const features = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Advanced Production Planning",
      description: "Optimize manufacturing with MRP, capacity planning, and shop floor control.",
      benefits: ["Material requirements planning", "Work order management", "Real-time production tracking"]
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "End-to-End Supply Chain",
      description: "Connect suppliers, warehouses, and customers in one intelligent system.",
      benefits: ["Supplier portal access", "Automated procurement", "Demand forecasting"]
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Smart Warehouse Management",
      description: "Reduce picking errors and speed fulfillment with barcode automation.",
      benefits: ["Bin location tracking", "Pick, pack, ship automation", "Mobile warehouse app"]
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Quality Control & Compliance",
      description: "Ensure standards with automated quality checks and full traceability.",
      benefits: ["Batch/lot tracking", "Quality inspection workflows", "ISO compliance tools"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Cost Accounting",
      description: "Know your true product costs with job costing and variance analysis.",
      benefits: ["Standard vs actual costing", "WIP tracking", "Profitability by SKU"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Equipment Maintenance",
      description: "Prevent downtime with predictive maintenance scheduling.",
      benefits: ["Preventive maintenance", "Equipment history", "Spare parts management"]
    }
  ]

  const industries = [
    { 
      name: "Manufacturing", 
      icon: "🏭", 
      description: "Discrete and process manufacturing with complex BOMs",
      capabilities: ["Multi-level BOM", "Production scheduling", "Shop floor control"]
    },
    { 
      name: "Food & Beverage", 
      icon: "🍞", 
      description: "Recipe management, batch tracking, expiry monitoring",
      capabilities: ["Recipe/formula management", "Expiry date tracking", "Food safety compliance"]
    },
    { 
      name: "Distribution & Wholesale", 
      icon: "📦", 
      description: "Multi-warehouse operations with complex logistics",
      capabilities: ["Multi-warehouse", "Cross-docking", "Route optimization"]
    },
    { 
      name: "Assembly & Job Shop", 
      icon: "🔧", 
      description: "Custom manufacturing and project-based production",
      capabilities: ["Job costing", "Project tracking", "Custom orders"]
    }
  ]

  const resources = [
    { title: "Xact ERP Overview", type: "PDF", size: "5.2 MB", icon: <FileText /> },
    { title: "Manufacturing Guide", type: "PDF", size: "4.1 MB", icon: <FileText /> },
    { title: "Implementation Roadmap", type: "PDF", size: "2.8 MB", icon: <FileText /> },
    { title: "ROI Calculator", type: "Excel", size: "1.2 MB", icon: <FileText /> }
  ]

  const testimonials = [
    {
      quote: "Xact ERP reduced our production lead time by 40% and eliminated stock-outs completely. Best investment we made.",
      author: "Michael Otieno",
      role: "Operations Director, Precision Manufacturing",
      company: "200+ SKUs, 150 employees"
    },
    {
      quote: "The supply chain visibility is incredible. We can now plan 3 months ahead with confidence instead of firefighting daily.",
      author: "Grace Akinyi",
      role: "Supply Chain Manager, Food Solutions Ltd",
      company: "Multi-site operations"
    }
  ]

  const faqs = [
    {
      q: "How does Xact ERP differ from accounting software?",
      a: "While accounting software tracks money, Xact ERP manages your entire operation - from raw materials to finished goods. It includes production planning, inventory optimization, quality control, and supply chain management, plus integrated financials. Think of it as the nerve center for manufacturing and distribution."
    },
    {
      q: "Can Xact ERP handle our complex Bill of Materials?",
      a: "Yes. Xact ERP supports multi-level BOMs with unlimited depth, phantom items, co-products, by-products, and alternates. It can handle both discrete manufacturing (assembly) and process manufacturing (recipes/formulas)."
    },
    {
      q: "What about lot/batch traceability?",
      a: "Complete forward and backward traceability. Track any batch from raw material receipt through production to final delivery. Critical for recalls, compliance, and quality investigations. One-click trace reports."
    },
    {
      q: "How long does implementation take?",
      a: "Typical implementation is 3-4 months depending on complexity. Includes: process mapping, data migration, customization, testing, and training. We use a phased approach so you can go live gradually."
    },
    {
      q: "Can we integrate with our existing systems?",
      a: "Yes. Xact ERP has APIs and connectors for common systems like accounting software, CRM, e-commerce platforms, and EDI. We can also build custom integrations if needed."
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "40% Cost Reduction",
      description: "Average savings from optimized inventory and reduced waste"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "99% On-Time Delivery",
      description: "Meet customer deadlines consistently with better planning"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "30% More Throughput",
      description: "Produce more with existing resources through efficiency gains"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Zero Stock-Outs",
      description: "Intelligent reorder points ensure materials always available"
    }
  ]

  const modules = [
    { name: "Production Management", features: ["MRP", "Shop floor control", "Capacity planning"] },
    { name: "Inventory Control", features: ["Multi-warehouse", "Lot tracking", "Cycle counting"] },
    { name: "Procurement", features: ["Purchase orders", "Supplier portal", "Receiving"] },
    { name: "Sales & Distribution", features: ["Order management", "Shipping", "CRM integration"] },
    { name: "Quality Management", features: ["Inspections", "Non-conformance", "CAPA"] },
    { name: "Financial Management", features: ["Job costing", "GL integration", "Reporting"] }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/30 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" /> Xact ERP
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Complete ERP for Manufacturing & Distribution Excellence
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Stop juggling disconnected systems. Xact ERP unifies production, inventory, quality, and financials in one powerful platform designed for operational excellence.
            </p>

            {/* <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                See Live Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-emerald-50 transition-all">
                <Play className="w-5 h-5" />
                Watch Product Tour
              </button>
            </div> */}

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>3-4 month implementation</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Full traceability</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Mobile-ready</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Dedicated support</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 shadow-2xl">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-6">Transform Your Operations</h3>
              <div className="space-y-6">
                {benefits.slice(0, 3).map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      {benefit.icon}
                    </div>
                    <div>
                      <div className="font-bold text-xl mb-1">{benefit.title}</div>
                      <div className="text-sm text-emerald-100">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Manufacturing Chaos? There's a Better Way.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stop running your business on spreadsheets and gut feeling
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-red-500 mb-4">
                <h3 className="text-2xl font-bold mb-4">❌ Without Xact ERP</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li>• Production delays because materials aren't ready</li>
                <li>• Can't find inventory when you need it</li>
                <li>• No visibility into what's happening on shop floor</li>
                <li>• Customer orders missed due to poor planning</li>
                <li>• Quality issues discovered too late</li>
                <li>• Don't know true product costs</li>
                <li>• Manual data entry errors everywhere</li>
                <li>• Can't scale because systems don't talk</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md border-2 border-green-200">
              <div className="text-green-600 mb-4">
                <h3 className="text-2xl font-bold mb-4">✅ With Xact ERP</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li>• MRP automatically orders materials before you run out</li>
                <li>• Real-time inventory visibility across all locations</li>
                <li>• Live shop floor tracking from mobile devices</li>
                <li>• Accurate delivery dates based on actual capacity</li>
                <li>• Quality checks built into every production step</li>
                <li>• Real-time cost tracking to the penny</li>
                <li>• One data entry, updates everything automatically</li>
                <li>• Scalable platform grows with your business</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Manufacturing & Distribution Platform
            </h2>
            <p className="text-xl text-slate-600">
              Everything connected, everything automated
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-emerald-100 p-4 rounded-xl text-emerald-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 mb-4">{feature.description}</p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-slate-600">
              Configured for your type of operation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{industry.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{industry.name}</h3>
                    <p className="text-slate-600 mb-4">{industry.description}</p>
                  </div>
                </div>
                <div className="space-y-2 pl-16">
                  <p className="text-sm font-semibold text-emerald-600 mb-2">Key Capabilities:</p>
                  {industry.capabilities.map((cap, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <Zap className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Overview */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Complete Modules, Seamlessly Integrated
            </h2>
            <p className="text-xl text-slate-600">
              Choose what you need, add more as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, i) => (
              <div key={i} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-md border border-emerald-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">{module.name}</h3>
                <ul className="space-y-2">
                  {module.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-slate-600">
              Average improvements our customers achieve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center">
                <div className="inline-flex p-4 bg-emerald-100 text-emerald-600 rounded-xl mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Everything manufacturers ask about Xact ERP
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            See how Xact ERP can transform your manufacturing or distribution business. Read more on the brochure.
          </p>
            {/* Brochure Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
  <a
    href="\brochures\Xact-ERP\Xact-ERP-Business-Brochure.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 transition-all shadow-xl">
    View Brochure
  </a>

  <a
    href="\brochures\Xact-ERP\Xact-ERP-Business-Brochure.pdf"
    download="sage-200-evolution-product-brochure.pdf"
  className="bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-800 transition-all border-2 border-white/20"
   >
    Download Brochure
  </a>
</div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-emerald-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Process assessment included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>No obligations</span>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}