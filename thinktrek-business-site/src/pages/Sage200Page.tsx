import { Shield, CheckCircle2, BarChart3, Users, Cloud, Lock, Globe, TrendingUp, Database, Download, Play, FileText, Award, ArrowRight, Zap, Building } from "lucide-react"
import Footer from "../components/footer/Footer"

export default function Sage200Page() {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Comprehensive Financial Management",
      description: "Enterprise-grade accounting with multi-company consolidation and global capabilities.",
      benefits: ["Multi-currency support", "Inter-company transactions", "Advanced cash flow forecasting"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Business Intelligence",
      description: "Make smarter decisions with real-time dashboards and AI-powered insights.",
      benefits: ["Custom KPI dashboards", "Predictive analytics", "Automated reporting"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Seamless CRM Integration",
      description: "Connect sales, marketing, and service for a complete customer view.",
      benefits: ["360° customer view", "Sales pipeline tracking", "Marketing automation"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Flexible Cloud & On-Premise",
      description: "Deploy your way - cloud, on-premise, or hybrid. Your data, your choice.",
      benefits: ["99.9% uptime SLA", "Daily backups", "Disaster recovery"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Grow from 10 to 10,000 users without changing systems. Built to scale.",
      benefits: ["Unlimited users", "Multi-site support", "No performance degradation"]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade security with ISO 27001 certification and compliance tools.",
      benefits: ["Role-based access", "Audit trails", "GDPR compliant"]
    }
  ]

  const businessTypes = [
    { 
      name: "Mid-Market Enterprises", 
      icon: "🏢", 
      description: "50-500 employees needing robust financial control",
      challenges: ["Complex reporting", "Multi-entity management", "Regulatory compliance"]
    },
    { 
      name: "Distribution Companies", 
      icon: "🚚", 
      description: "Wholesalers and distributors managing complex supply chains",
      challenges: ["Inventory optimization", "Multi-warehouse", "Supplier management"]
    },
    { 
      name: "Manufacturing", 
      icon: "🏭", 
      description: "Manufacturers needing production planning and costing",
      challenges: ["BOM management", "Production scheduling", "Cost accounting"]
    },
    { 
      name: "Service Organizations", 
      icon: "💼", 
      description: "Professional services tracking projects and profitability",
      challenges: ["Project accounting", "Time tracking", "Client billing"]
    }
  ]

  const resources = [
    { title: "Sage 200 Overview", type: "PDF", size: "4.2 MB", icon: <FileText /> },
    { title: "Implementation Guide", type: "PDF", size: "3.5 MB", icon: <FileText /> },
    { title: "Enterprise Case Studies", type: "PDF", size: "6.1 MB", icon: <FileText /> },
    { title: "Feature Comparison", type: "PDF", size: "1.9 MB", icon: <FileText /> }
  ]

  

  const faqs = [
    {
      q: "What's the difference between Sage 200 Standard and Professional?",
      a: "Standard suits businesses up to 50 users with core financials. Professional adds advanced features like manufacturing, multi-currency, and business intelligence for larger enterprises. We'll help you choose the right edition."
    },
    {
      q: "Can Sage 200 handle multiple companies?",
      a: "Yes. Sage 200 excels at multi-company management with automated consolidation, inter-company transactions, and group reporting. Perfect for holding companies or franchises."
    },
    {
      q: "How does cloud deployment work?",
      a: "Cloud deployment gives you access anywhere via browser or mobile app. We handle all infrastructure, updates, and backups. Or choose on-premise if you prefer. Both options available."
    },
    {
      q: "What about data migration from our current system?",
      a: "We provide full data migration services including mapping, validation, and testing. Our team has migrated data from QuickBooks, Pastel, SAP, and custom systems. Zero data loss guaranteed."
    },
    {
      q: "Is training included?",
      a: "Yes. Comprehensive training for all users is included in implementation. Plus ongoing webinars, documentation, and 24/7 support. We ensure your team is confident and productive."
    }
  ]

  const integrations = [
    { name: "Microsoft 365", icon: "📧" },
    { name: "Power BI", icon: "📊" },
    { name: "Salesforce", icon: "☁️" },
    { name: "WooCommerce", icon: "🛒" },
    { name: "PayPal", icon: "💳" },
    { name: "Banks API", icon: "🏦" }
  ]

  const whyChoose = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Trusted by 50,000+ Businesses",
      description: "Join companies worldwide who trust Sage 200 for their critical operations"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "30+ Years of Innovation",
      description: "Battle-tested software that evolves with changing business needs"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Local Support, Global Reach",
      description: "Expert support in Kenya backed by Sage's global resources"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rapid Implementation",
      description: "Go-live in 6-8 weeks with our proven implementation methodology"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" /> Sage 200
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Enterprise Business Management Built to Scale
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Trusted by 50,000+ businesses globally, Sage 200 delivers the power and flexibility mid-sized and growing enterprises need to compete and thrive.
            </p>


            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>ISO 27001 certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>GDPR compliant</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Cloud or on-premise</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-3xl p-8 shadow-2xl">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-6">Enterprise-Grade Platform</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Uptime Guarantee</span>
                    <span className="font-bold">99.9%</span>
                  </div>
                  <div className="bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-[99.9%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Global Businesses</span>
                    <span className="font-bold">50,000+</span>
                  </div>
                  <div className="bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Years of Innovation</span>
                    <span className="font-bold">30+</span>
                  </div>
                  <div className="bg-white/20 h-2 rounded-full overflow-hidden">
                    <div className="bg-white h-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sage 200 Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Growing Businesses Choose Sage 200
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              When spreadsheets and basic software can't keep up with your growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center">
                <div className="inline-flex p-4 bg-amber-100 text-amber-600 rounded-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Complete Business Management in One Platform
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to run a mid-sized enterprise efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-amber-100 p-4 rounded-xl text-amber-600">
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

      {/* Business Types Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Built for Your Industry
            </h2>
            <p className="text-xl text-slate-600">
              Industry-specific solutions for growing businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessTypes.map((type, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{type.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{type.name}</h3>
                    <p className="text-slate-600 mb-4">{type.description}</p>
                  </div>
                </div>
                <div className="space-y-2 pl-16">
                  <p className="text-sm font-semibold text-amber-600 mb-2">Solves:</p>
                  {type.challenges.map((challenge, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <Zap className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Connects With Your Existing Tools
            </h2>
            <p className="text-xl text-slate-600">
              Seamless integration with the software you already use
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all text-center border border-slate-100">
                <div className="text-4xl mb-3">{integration.icon}</div>
                <p className="text-sm font-semibold text-slate-700">{integration.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">Plus 200+ more integrations via our partner ecosystem</p>
            <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors">
              View All Integrations →
            </button>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Enterprise Questions Answered
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about Sage 200
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
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Join 50,000+ businesses worldwide. Read more about Sage 200 and download it in the brochure .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="\brochures\Sage-200\sage-200-evolution-product-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-800 transition-all border-2 border-white/20">
              View Brochure
            </a>

            <a
              href="\brochures\Sage-200\sage-200-evolution-product-brochure.pdf"
              download="sage-200-evolution-product-brochure.pdf"
               className="bg-amber-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-800 transition-all border-2 border-white/20"
            >
              Download Brochure
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-amber-100">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Custom pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>ROI analysis included</span>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}