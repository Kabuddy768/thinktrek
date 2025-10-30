import Footer from "../components/footer/Footer"
import { Building2, CheckCircle2, BarChart3, Users, ShoppingBag } from "lucide-react"

export default function IqRetailPage() {
  return (
    <div className="pt-24 bg-gradient-to-b from-white to-sky-50 min-h-screen">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md mb-6">
          <Building2 className="w-4 h-4" /> IQ Retail
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Smart Retail Management, Simplified
        </h1>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Empower your business with an all-in-one retail solution that seamlessly integrates sales, inventory,
          and customer management to drive growth and efficiency.
        </p>
      </div>

      {/* Feature Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6 md:px-12">
        {[
          {
            title: "Cloud-Based POS System",
            desc: "Access your business operations anytime, anywhere with secure cloud-based point-of-sale management.",
            icon: <ShoppingBag className="w-6 h-6 text-sky-500" />,
          },
          {
            title: "Real-Time Inventory Tracking",
            desc: "Stay informed with up-to-date stock insights and automated reorder alerts to prevent stockouts.",
            icon: <BarChart3 className="w-6 h-6 text-sky-500" />,
          },
          {
            title: "Advanced Sales Analytics",
            desc: "Gain valuable insights through visual reports and predictive analytics for data-driven decisions.",
            icon: <CheckCircle2 className="w-6 h-6 text-sky-500" />,
          },
          {
            title: "Integrated CRM & Loyalty Programs",
            desc: "Enhance customer relationships with built-in CRM tools and loyalty rewards that boost retention.",
            icon: <Users className="w-6 h-6 text-sky-500" />,
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-sky-100 p-3 rounded-xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto text-center my-16 px-6">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Ready to transform your retail business?</h2>
        <p className="text-slate-600 mb-6">
          Experience streamlined operations, happier customers, and smarter decision-making with IQ Retail.
        </p>
        <button className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md">
          Get Started
        </button>
      </div>

      <Footer />
    </div>
  )
}
