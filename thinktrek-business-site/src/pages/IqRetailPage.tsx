import { Building2, CheckCircle2, BarChart3, Users, ShoppingBag, Package, CreditCard, Smartphone, TrendingUp, Download, Play, FileText, Award, ArrowRight, Zap, Clock } from "lucide-react"
import Footer from "../components/footer/Footer"

export default function IqRetailPage() {
  const features = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Cloud-Based POS System",
      description: "Run your store from anywhere with secure, lightning-fast cloud point-of-sale.",
      benefits: ["Works offline & syncs", "Mobile POS ready", "Multi-store management"]
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Real-Time Inventory Tracking",
      description: "Never run out of stock again with intelligent inventory management and alerts.",
      benefits: ["Auto-reorder alerts", "Barcode scanning", "Stock level optimization"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Sales Analytics",
      description: "Know what's selling, when, and why with visual dashboards and predictive insights.",
      benefits: ["Best-seller reports", "Peak hour analysis", "Profit margin tracking"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Integrated CRM & Loyalty",
      description: "Turn one-time buyers into lifetime customers with built-in loyalty programs.",
      benefits: ["Points & rewards system", "Customer purchase history", "Automated SMS campaigns"]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Multiple Payment Options",
      description: "Accept cash, cards, mobile money (M-Pesa, Airtel Money) seamlessly.",
      benefits: ["M-Pesa integration", "Split payments", "Instant reconciliation"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile-First Design",
      description: "Manage your business from your phone - anywhere, anytime.",
      benefits: ["iOS & Android apps", "Remote monitoring", "Push notifications"]
    }
  ]

  const retailTypes = [
    { 
      name: "Fashion & Apparel", 
      icon: "👔", 
      description: "Size/color variants, seasonal inventory management",
      useCases: ["Size matrices", "Multi-location transfers", "Fashion trends analytics"]
    },
    { 
      name: "Supermarkets & Groceries", 
      icon: "🛒", 
      description: "High-volume transactions, expiry date tracking",
      useCases: ["Batch/expiry management", "Quick checkout", "Supplier management"]
    },
    { 
      name: "Electronics & Hardware", 
      icon: "💻", 
      description: "Serial number tracking, warranty management",
      useCases: ["IMEI/serial tracking", "Warranty claims", "Service tickets"]
    },
    { 
      name: "Pharmacy & Health", 
      icon: "💊", 
      description: "Regulatory compliance, prescription management",
      useCases: ["Drug tracking", "Prescription records", "Compliance reports"]
    }
  ]

  const resources = [
    { title: "IQ Retail Brochure", type: "PDF", size: "3.1 MB", icon: <FileText /> },
    { title: "Setup Guide", type: "PDF", size: "2.4 MB", icon: <FileText /> },
    { title: "Retail Success Stories", type: "PDF", size: "5.8 MB", icon: <FileText /> },
    { title: "Hardware Requirements", type: "PDF", size: "0.8 MB", icon: <FileText /> }
  ]

  const testimonials = [
    {
      quote: "IQ Retail helped us cut checkout time by 60%. Our customers love how fast we serve them now.",
      author: "Mary Wanjiru",
      role: "Owner, Fashion Plaza Nairobi",
      company: "3 Store Locations"
    },
    {
      quote: "The inventory alerts saved us from stockouts during peak season. Our revenue increased 35% in 6 months.",
      author: "James Kamau",
      role: "Manager, Tech World Electronics",
      company: "High-Volume Retail"
    }
  ]

  const faqs = [
    {
      q: "Can IQ Retail work without internet?",
      a: "Yes! IQ Retail works fully offline and automatically syncs all transactions when connection is restored. Your business never stops."
    },
    {
      q: "Does it integrate with M-Pesa?",
      a: "Absolutely. IQ Retail has native M-Pesa integration for instant payments and automatic reconciliation. Also supports Airtel Money and card payments."
    },
    {
      q: "Can I manage multiple stores?",
      a: "Yes. View sales, inventory, and performance across all locations from one dashboard. Transfer stock between stores with one click."
    },
    {
      q: "What hardware do I need?",
      a: "IQ Retail works on any device - PC, tablet, or smartphone. Optional: barcode scanner, receipt printer, cash drawer. We can recommend partners for hardware."
    },
    {
      q: "How long does setup take?",
      a: "Most retailers are up and running in 24-48 hours. Includes product upload, staff training, and hardware setup if needed."
    }
  ]

  const pricingFeatures = [
    "Unlimited transactions",
    "Real-time inventory tracking",
    "Customer loyalty program",
    "Sales analytics & reports",
    "M-Pesa & mobile money",
    "Multi-store management",
    "Staff access controls",
    "24/7 phone support"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Building2 className="w-4 h-4" /> IQ Retail
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              The Smartest Way to Run Your Retail Business
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              From checkout to stock management, IQ Retail handles everything - so you can focus on growing your business and delighting customers.
            </p>

            {/* <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                Start Free 30-Day Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-sky-50 transition-all">
                <Play className="w-5 h-5" />
                See It In Action
              </button>
            </div> */}

            <div className="flex items-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Setup in 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>No contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Works offline</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-sky-600 to-cyan-600 rounded-3xl p-8 shadow-2xl">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Retailers Love IQ Retail</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">60%</div>
                    <div className="text-sm text-sky-100">Faster checkout</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">35%</div>
                    <div className="text-sm text-sky-100">Revenue increase</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">Zero</div>
                    <div className="text-sm text-sky-100">Stockouts</div>
                  </div>
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
              Retail Challenges? Solved.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stop fighting with outdated systems and manual processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <div className="text-red-500 mb-4">
                <h3 className="text-2xl font-bold mb-4">❌ Old Way</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li>• Long queues = frustrated customers walking away</li>
                <li>• Manual stock counts every month (nightmare!)</li>
                <li>• No idea what's selling best until too late</li>
                <li>• Running out of popular items during peak times</li>
                <li>• Staff stealing or making "mistakes" with cash</li>
                <li>• Can't track customer loyalty properly</li>
                <li>• M-Pesa reconciliation takes hours daily</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-md border-2 border-green-200">
              <div className="text-green-600 mb-4">
                <h3 className="text-2xl font-bold mb-4">✅ IQ Retail Way</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li>• Lightning-fast checkout - serve 3x more customers</li>
                <li>• Real-time stock levels - know exactly what you have</li>
                <li>• Instant sales reports - see top sellers hourly</li>
                <li>• Smart alerts before you run out of stock</li>
                <li>• Complete audit trail of every transaction</li>
                <li>• Automated loyalty points & SMS rewards</li>
                <li>• M-Pesa auto-reconciled in seconds</li>
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
              Everything You Need to Run a Modern Retail Store
            </h2>
            <p className="text-xl text-slate-600">
              Powerful features that work together seamlessly
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-sky-100 p-4 rounded-xl text-sky-600">
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

      {/* Retail Types Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Perfect for Every Type of Retail
            </h2>
            <p className="text-xl text-slate-600">
              Specialized features for your specific business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {retailTypes.map((type, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">{type.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{type.name}</h3>
                    <p className="text-slate-600 mb-4">{type.description}</p>
                  </div>
                </div>
                <div className="space-y-2 pl-16">
                  {type.useCases.map((useCase, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <Zap className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Pricing Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-sky-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-sky-100 mb-12">
            One plan. All features. No hidden fees.
          </p>

          <div className="bg-white/10 backdrop-blur rounded-3xl p-10 border-2 border-white/20">
            <div className="mb-8">
              <div className="text-6xl font-bold mb-2">KES 5,000</div>
              <div className="text-xl text-sky-100">per month, per location</div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {pricingFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-white text-sky-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-sky-50 transition-all shadow-xl w-full md:w-auto">
              Start Your 30-Day Free Trial
            </button>
            
            <p className="text-sm text-sky-100 mt-4">
              No credit card required • Cancel anytime • Setup assistance included
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Common Questions About IQ Retail
            </h2>
            <p className="text-xl text-slate-600">
              Got questions? We've got answers.
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
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Modernize Your Retail Business?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join 300+ Kenyan retailers who switched to IQ Retail. Read or download brochure for rmore information.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="\brochures\IQ-Retail\IQ-Business-Brochure-2019.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all">
              View Brochure
            </a>

            <a
              href="\brochures\IQ-Retail\IQ-Business-Brochure-2019.pdf"
              download="sage-200-evolution-product-brochure.pdf"
               className="bg-white border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-xl font-bold hover:bg-sky-50 transition-all">
              Download Brochure
            </a>
          </div>

        </div>
      </section>
      <Footer/>
    </div>
  )
}