import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Users, TrendingUp, Shield, Zap, Rocket, CheckCircle, Award, Clock } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { 
      icon: <Users size={24} />, 
      title: 'Client-Focused', 
      desc: 'Tailored solutions for your unique business needs',
      color: 'from-cyan-400 to-teal-500',
      delay: 200
    },
    { 
      icon: <TrendingUp size={24} />, 
      title: 'Growth Driven', 
      desc: 'Scale seamlessly as your business expands',
      color: 'from-emerald-400 to-green-500',
      delay: 300
    },
    { 
      icon: <Shield size={24} />, 
      title: 'Secure & Reliable', 
      desc: 'Enterprise-grade security you can trust',
      color: 'from-violet-400 to-purple-500',
      delay: 400
    },
    { 
      icon: <Zap size={24} />, 
      title: 'Rapid Deployment', 
      desc: 'Get up and running in days, not months',
      color: 'from-amber-400 to-orange-500',
      delay: 500
    }
  ];

  const trustBadges = [
    { icon: <CheckCircle size={18} />, text: 'ISO Certified' },
    { icon: <Award size={18} />, text: 'Award Winning' },
    { icon: <Clock size={18} />, text: '10+ Years' }
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      
      {/* Animated gradient orbs with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(calc(-50% + ${mousePosition.x * 0.4}px), calc(-50% + ${mousePosition.y * 0.4}px))`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        
        {/* Main content centered */}
        <div className="text-center mb-16 space-y-8">
          
          {/* Animated badge */}
          <div className={`inline-block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 backdrop-blur-xl border border-cyan-500/20 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium hover:border-cyan-400/40 transition-all cursor-pointer shadow-lg shadow-cyan-500/5">
              <Rocket size={16} className="group-hover:rotate-12 transition-transform" />
              <span className="font-semibold">Transforming Kenyan Businesses</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            </div>
          </div>
          
          {/* Main headline with stagger animation */}
          <div className="space-y-6">
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="block text-white mb-2">Transform Your</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                Business Operations
              </span>
            </h1>
            
            <p className={`text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Streamline your operations with cutting-edge <span className="text-cyan-400 font-semibold">accounting</span>, <span className="text-teal-400 font-semibold">ERP</span>, and <span className="text-emerald-400 font-semibold">warehouse management</span> solutions designed for Kenyan SMEs.
            </p>
          </div>

          {/* CTAs with enhanced styling */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="group relative bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all transform hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Request Free Demo
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group relative bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all">
              <span className="flex items-center gap-2">
                Explore Solutions
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Trust badges */}
          <div className={`flex flex-wrap justify-center gap-6 pt-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                <div className="text-cyan-400">{badge.icon}</div>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ 
                transitionDelay: `${feature.delay}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(2rem)'
              }}
            >
              {/* Hover gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {feature.desc}
                </p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/0 to-cyan-500/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className={`grid grid-cols-3 gap-8 max-w-4xl mx-auto mt-20 pt-12 border-t border-white/10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center group cursor-pointer">
            <div className="text-5xl font-black bg-gradient-to-br from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              500+
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">
              Happy Clients
            </div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-5xl font-black bg-gradient-to-br from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              4
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">
              Core Products
            </div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-5xl font-black bg-gradient-to-br from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-wider font-medium">
              Support Available
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full animate-scroll" />
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}