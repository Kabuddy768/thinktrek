// ============================================
// src/components/home/Hero/Hero.tsx (Modernized)
// ============================================
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Users, TrendingUp, Shield, Zap, Rocket } from 'lucide-react'

export default function Hero() {
  const features = [
    { 
      icon: <Users size={28} />, 
      title: 'Client-Focused', 
      desc: 'Tailored solutions for your business needs',
      // Teal/Cyan color for modern look
      color: 'from-cyan-400 to-teal-600',
      delay: 800
    },
    { 
      icon: <TrendingUp size={28} />, 
      title: 'Growth Driven', 
      desc: 'Scale seamlessly as you expand',
      color: 'from-green-400 to-emerald-600',
      delay: 900
    },
    { 
      icon: <Shield size={28} />, 
      title: 'Secure & Reliable', 
      desc: 'Enterprise-grade security standards',
      color: 'from-purple-400 to-fuchsia-600',
      delay: 1000
    },
    { 
      icon: <Zap size={28} />, 
      title: 'Fast Implementation', 
      desc: 'Get up and running in days, not months',
      // Softened orange accent
      color: 'from-amber-400 to-orange-500',
      delay: 1100
    }
  ];

  return (
    // Updated background gradient for a darker, sleeker, more modern feel
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-indigo-900 to-gray-900 overflow-hidden">
      
      {/* Background Noise Texture (Replaced geometric SVG) */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://api.uifort.com/api/textures/noise')]"></div>

      {/* Animated Blob Circles (Retained) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-60 -right-60 w-[35rem] h-[35rem] bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-60 -left-60 w-[35rem] h-[35rem] bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-[35rem] h-[35rem] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-8 z-10 lg:col-span-7">
            
            {/* Tagline - Refined colors and border for a stronger glass effect */}
            <div className="inline-block animate-fade-in">
              <Link 
                to="/solutions" 
                className="group inline-flex items-center gap-2 bg-white bg-opacity-10 text-white px-5 py-2 rounded-full text-sm font-medium backdrop-blur-md border border-white border-opacity-20 hover:bg-opacity-15 transition-all shadow-md"
              >
                {/* Updated Rocket color to new accent */}
                <Rocket size={16} className="text-cyan-300 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Business Automation Solutions</span>
                <ChevronRight size={16} className="opacity-80 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
            
            {/* Title - Main text color is white, span color is the new accent */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tighter animate-slide-up">
              Transform Your Business with
              <span className="block text-cyan-400 mt-4 leading-none">Smart Automation</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-indigo-200 leading-relaxed max-w-2xl animate-slide-up animation-delay-200">
              Streamline operations with cutting-edge **accounting, ERP, and warehouse management** solutions designed for small and medium-sized businesses in Kenya.
            </p>

            {/* CTAs - Primary CTA updated to a modern gradient */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-400">
              <Link
                to="/contact"
                // New Gradient CTA for primary focus
                className="group bg-gradient-to-r from-cyan-400 to-teal-500 text-slate-900 px-9 py-4 rounded-xl font-bold hover:shadow-cyan-400/50 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-300/50 flex items-center justify-center gap-2"
              >
                Request Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/products"
                className="group bg-white bg-opacity-10 backdrop-blur-sm text-white border border-white border-opacity-30 px-9 py-4 rounded-xl font-semibold hover:bg-opacity-15 transition-all focus:outline-none focus:ring-4 focus:ring-white/50 flex items-center justify-center gap-2"
              >
                View Products
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats - Text color updated to new accent */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-indigo-400 border-opacity-30 animate-fade-in animation-delay-600">
              <div className="text-center sm:text-left">
                <div className="text-4xl font-extrabold text-cyan-400 mb-1">500+</div>
                <div className="text-sm text-indigo-200 uppercase tracking-wider">Happy Clients</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-extrabold text-cyan-400 mb-1">4</div>
                <div className="text-sm text-indigo-200 uppercase tracking-wider">Core Products</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-extrabold text-cyan-400 mb-1">24/7</div>
                <div className="text-sm text-indigo-200 uppercase tracking-wider">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 z-10 lg:col-span-5">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                // Increased border opacity slightly
                className="group bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-30 rounded-2xl p-6 hover:bg-opacity-20 transition-all transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/30 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                {/* Icon Container: Larger padding for visual weight (p-4) */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 shadow-lg group-hover:scale-105 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-indigo-200 text-base leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave Separator REMOVED for a cleaner transition */}
      
      {/* Scroll indicator (Retained) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
      
      {/* Styles for custom animations and delays (Retained) */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  )
}