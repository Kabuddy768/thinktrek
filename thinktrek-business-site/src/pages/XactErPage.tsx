import Footer from "../components/footer/Footer"
import { Globe, CheckCircle2, Factory, Truck, ClipboardCheck } from "lucide-react"

export default function XactErpPage() {
  return (
    <div className="pt-24 bg-gradient-to-b from-white to-emerald-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md mb-6">
          <Globe className="w-4 h-4" /> Xact ERP
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          The Complete ERP Solution for Modern Enterprises
        </h1>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Xact ERP unifies operations across manufacturing, supply chain, and finance — driving efficiency and scalability.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6 md:px-12">
        {[
          {
            title: "Advanced Production Planning",
            desc: "Optimize production lines and resource allocation for peak efficiency.",
            icon: <Factory className="w-6 h-6 text-emerald-500" />,
          },
          {
            title: "End-to-End Supply Chain Management",
            desc: "Connect suppliers, distributors, and inventory under one system.",
            icon: <Truck className="w-6 h-6 text-emerald-500" />,
          },
          {
            title: "Smart Warehouse Automation",
            desc: "Enhance fulfillment accuracy and reduce manual processes with automation.",
            icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
          },
          {
            title: "Quality Control & Compliance",
            desc: "Monitor quality standards with traceability and built-in compliance tools.",
            icon: <ClipboardCheck className="w-6 h-6 text-emerald-500" />,
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-emerald-100 p-3 rounded-xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center my-16 px-6">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Optimize. Automate. Scale.</h2>
        <p className="text-slate-600 mb-6">
          Transform operations with Xact ERP — the future-ready solution for growing enterprises.
        </p>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md">
          Learn More
        </button>
      </div>

      <Footer />
    </div>
  )
}
