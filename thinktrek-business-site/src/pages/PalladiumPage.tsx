import { TrendingUp, CheckCircle2, BarChart3, FileSpreadsheet, Globe, Shield, Users, Zap, Download, Play, FileText, Award, ArrowRight } from "lucide-react"
import Footer from "../components/footer/Footer"
export default function PalladiumPage() {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Automated Financial Reporting",
      description: "Generate insightful reports instantly with real-time data across departments.",
      benefits: ["Save 20+ hours monthly", "Reduce manual errors by 95%", "Real-time dashboards"]
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6" />,
      title: "Multi-Entity Tax Management",
      description: "Simplify complex tax structures and streamline inter-company compliance.",
      benefits: ["Handle multiple entities", "Automated tax calculations", "Compliance ready"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Currency Support",
      description: "Seamlessly handle global transactions with automatic currency conversion.",
      benefits: ["100+ currencies supported", "Real-time exchange rates", "Automated conversions"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Complete Audit Trail",
      description: "Ensure full transparency and accountability with secure record tracking.",
      benefits: ["Every change logged", "User activity tracking", "Compliance certified"]
    }
  ]

  const industries = [
    { name: "Manufacturing", icon: "🏭", description: "Manage complex cost accounting and production finances" },
    { name: "Retail & Distribution", icon: "🛒", description: "Handle high-volume transactions with ease" },
    { name: "Professional Services", icon: "💼", description: "Track billable hours and project profitability" },
    { name: "Healthcare", icon: "🏥", description: "Manage complex billing and insurance claims" }
  ]

  const resources = [
    { title: "Product Brochure", type: "PDF", size: "2.3 MB", icon: <FileText /> },
    { title: "Implementation Guide", type: "PDF", size: "1.8 MB", icon: <FileText /> },
    { title: "Case Study Collection", type: "PDF", size: "4.2 MB", icon: <FileText /> },
    { title: "Pricing Sheet", type: "PDF", size: "0.5 MB", icon: <FileText /> }
  ]

  const testimonials = [
    {
      quote: "Palladium reduced our month-end closing from 7 days to just 2 days. The automation is incredible.",
      author: "Jane Mwangi",
      role: "CFO, Kenya Manufacturing Ltd",
      company: "250+ employees"
    },
    {
      quote: "The multi-currency feature saved us countless hours in reconciliation. Best investment we made.",
      author: "David Ochieng",
      role: "Finance Manager, Export Solutions",
      company: "International Trading"
    }
  ]

  const faqs = [
    {
      q: "How long does implementation take?",
      a: "Typically 4-6 weeks depending on company size and complexity. We provide full support throughout."
    },
    {
      q: "Can it integrate with our existing systems?",
      a: "Yes, Palladium integrates with most major ERP, CRM, and banking systems. We'll assess your needs during consultation."
    },
    {
      q: "What kind of support is included?",
      a: "24/7 phone and email support, plus dedicated account manager for enterprise clients. Training included."
    },
    {
      q: "Is data migration included?",
      a: "Yes, we handle complete data migration from your existing system with zero data loss guarantee."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/30 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" /> Palladium Accounting
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Financial Management That Actually Works
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Stop wrestling with spreadsheets. Palladium gives you real-time financial insights, automated compliance, and the confidence to make data-driven decisions.
            </p>

            {/* <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                Schedule Free Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-indigo-50 transition-all">
                <Play className="w-5 h-5" />
                Watch 3-Min Overview
              </button>
            </div> */}

            <div className="flex items-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Free 30-day trial</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-6">Trusted By Leading Kenyan Businesses</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-4xl font-bold">500+</div>
                  <div className="text-sm">Active Users</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-4xl font-bold">99.9%</div>
                  <div className="text-sm">Uptime SLA</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-4xl font-bold">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
                <div className="bg-white/20 rounded-xl p-4">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
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
              Stop Losing Sleep Over Your Finances
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most accounting software is either too simple for growing businesses or too complex to use. Palladium is the sweet spot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-red-500 mb-4">
                <h3 className="text-2xl font-bold mb-4">❌ Without Palladium</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li>• Manual data entry eating 20+ hours/month</li>
                <li>• Delayed reports - making decisions on old data</li>
                <li>• Excel spreadsheet chaos across departments</li>
                <li>• Compliance nightmares during audits</li>
                <li>• No visibility into real-time cash flow</li>
                <li>• Expensive consultant fees for basic tasks</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md border-2 border-green-200">
              <div className="text-green-600 mb-4">
                <h3 className="text-2xl font-bold mb-4">✅ With Palladium</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li>• Automated workflows save 100+ hours/month</li>
                <li>• Real-time dashboards updated every 15 minutes</li>
                <li>• Single source of truth for all financial data</li>
                <li>• One-click audit-ready reports</li>
                <li>• Live cash flow forecasting</li>
                <li>• Built-in intelligence guides your decisions</li>
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
              Everything You Need, Nothing You Don't
            </h2>
            <p className="text-xl text-slate-600">
              Powerful features designed for Kenyan businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-indigo-100 p-4 rounded-xl text-indigo-600">
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
              Built for Your Industry
            </h2>
            <p className="text-xl text-slate-600">
              Tailored solutions for different business sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-slate-600">{industry.description}</p>
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
              Everything you need to know about Palladium
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

      {/* Final CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join 500+ Kenyan businesses using Palladium. Read more on Palladium and downlaod it in our brochure.
          </p>

          {/* Brochure Buttons */}
        <div className="flex justify-center gap-4 flex-wrap mt-8">
          <a
            href="/brochures/Sage-200/sage-200-evolution-product-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-full font-medium transition-all shadow-md"
          >
            <Download className="w-5 h-5" />
            View Brochure
          </a>

          <a
            href="/brochures/Sage-200/sage-200-evolution-product-brochure.pdf"
            download="sage-200-evolution-product-brochure.pdf"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md"
          >
            <Download className="w-5 h-5" />
            Download Brochure
          </a>
        </div>
        
          <div className="flex flex-wrap justify-center gap-6 text-sm text-indigo-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Setup in 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    
  )
}
