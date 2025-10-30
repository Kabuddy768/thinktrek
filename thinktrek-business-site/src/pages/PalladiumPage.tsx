import Footer from "../components/footer/Footer"
import { TrendingUp, CheckCircle2, BarChart3, FileSpreadsheet, Globe } from "lucide-react"

export default function PalladiumPage() {
  return (
    <div className="pt-24 bg-gradient-to-b from-white to-indigo-50 min-h-screen">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md mb-6">
          <TrendingUp className="w-4 h-4" /> Palladium Accounting
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Smarter Financial Management for Modern Businesses
        </h1>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Palladium Accounting delivers automation, compliance, and clarity — enabling real-time insights and growth at scale.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6 md:px-12">
        {[
          {
            title: "Automated Financial Reporting",
            desc: "Generate insightful reports instantly with real-time data across departments.",
            icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
          },
          {
            title: "Multi-Entity Tax Management",
            desc: "Simplify complex tax structures and streamline inter-company compliance.",
            icon: <FileSpreadsheet className="w-6 h-6 text-indigo-500" />,
          },
          {
            title: "Multi-Currency Support",
            desc: "Seamlessly handle global transactions with automatic currency conversion.",
            icon: <Globe className="w-6 h-6 text-indigo-500" />,
          },
          {
            title: "Complete Audit Trail & Compliance",
            desc: "Ensure full transparency and accountability with secure record tracking.",
            icon: <CheckCircle2 className="w-6 h-6 text-indigo-500" />,
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-indigo-100 p-3 rounded-xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto text-center my-16 px-6">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Upgrade to Intelligent Accounting</h2>
        <p className="text-slate-600 mb-6">
          Experience effortless financial control, compliance, and insights — all in one system.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md">
          Learn More
        </button>
      </div>

      <Footer />
    </div>
  )
}
