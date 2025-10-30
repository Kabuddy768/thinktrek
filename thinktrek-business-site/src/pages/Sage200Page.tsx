import Footer from "../components/footer/Footer"
import { Shield, CheckCircle2, BarChart3, Users, Cloud } from "lucide-react"

export default function Sage200Page() {
  return (
    <div className="pt-24 bg-gradient-to-b from-white to-amber-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-amber-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md mb-6">
          <Shield className="w-4 h-4" /> Sage 200
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Proven Business Management for Every Stage
        </h1>

        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          Sage 200 empowers organizations to scale confidently with powerful financial, CRM, and BI capabilities.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6 md:px-12">
        {[
          {
            title: "Comprehensive Financial Management",
            desc: "Handle complex accounts with accuracy and visibility across entities.",
            icon: <BarChart3 className="w-6 h-6 text-amber-500" />,
          },
          {
            title: "Predictive Business Intelligence",
            desc: "Make data-driven decisions with real-time dashboards and analytics.",
            icon: <CheckCircle2 className="w-6 h-6 text-amber-500" />,
          },
          {
            title: "Seamless CRM Integration",
            desc: "Align sales, service, and finance for a unified customer experience.",
            icon: <Users className="w-6 h-6 text-amber-500" />,
          },
          {
            title: "Secure Cloud & On-Premise Options",
            desc: "Enjoy flexible deployment with enterprise-grade security and reliability.",
            icon: <Cloud className="w-6 h-6 text-amber-500" />,
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-amber-100 p-3 rounded-xl">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center my-16 px-6">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Achieve Operational Excellence</h2>
        <p className="text-slate-600 mb-6">
          Simplify processes, enhance collaboration, and make smarter decisions with Sage 200.
        </p>
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md">
          Discover More
        </button>
      </div>

      <Footer />
    </div>
  )
}
