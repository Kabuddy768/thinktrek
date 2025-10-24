import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageSquare, Headphones, Sparkles, Zap, Award } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const subject = `New Contact Inquiry from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Product Interest: ${formData.interest}

Message:
${formData.message}
    `;
    
    const mailtoLink = `mailto:Davidk@thinktrek.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setStatus({
      type: 'success',
      message: 'Your email client will open shortly. Thank you for reaching out!'
    });
    setIsSubmitting(false);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        interest: '',
        message: ''
      });
      setStatus({ type: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      title: "Email Us",
      content: "Davidk@thinktrek.co.ke",
      subtext: "Get a response within 24 hours",
      link: "mailto:Davidk@thinktrek.co.ke",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: <Phone size={22} />,
      title: "Call Us",
      content: "+254 XXX XXX XXX",
      subtext: "Mon-Fri, 8AM - 6PM EAT",
      link: "tel:+254XXXXXXXXX",
      gradient: "from-emerald-400 to-green-500"
    },
    {
      icon: <MapPin size={22} />,
      title: "Visit Us",
      content: "Nairobi, Kenya",
      subtext: "Central business district",
      link: "#",
      gradient: "from-violet-400 to-purple-500"
    },
    {
      icon: <Clock size={22} />,
      title: "Business Hours",
      content: "Mon - Fri: 8AM - 6PM",
      subtext: "Weekend support available",
      link: "#",
      gradient: "from-amber-400 to-orange-500"
    }
  ];

  const products = [
    "Palladium Accounting",
    "IQ Retail",
    "Xact ERP",
    "Sage 200",
    "General Inquiry"
  ];

  const benefits = [
    { icon: <Zap size={20} />, text: "Lightning-fast response times", color: "text-amber-500" },
    { icon: <Headphones size={20} />, text: "Dedicated support team", color: "text-cyan-500" },
    { icon: <Award size={20} />, text: "Award-winning solutions", color: "text-violet-500" }
  ];

  const processSteps = [
    {
      number: "1",
      title: "We Review Your Inquiry",
      desc: "Our team carefully analyzes your requirements and business context",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      number: "2",
      title: "Expert Consultation",
      desc: "Schedule a personalized call with our solution architects",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      number: "3",
      title: "Custom Proposal",
      desc: "Receive detailed pricing, timeline, and implementation roadmap",
      gradient: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen">
      
      {/* Hero Section with animated gradient */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Animated badge */}
          <div className={`inline-block mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/20 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium shadow-lg shadow-cyan-500/5">
              <Sparkles size={16} className="animate-pulse" />
              <span className="font-semibold">Let's Build Something Amazing</span>
            </div>
          </div>

          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="block text-white mb-2">Get in</span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Touch Today
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Transform your business with our cutting-edge solutions. Our team is ready to help you succeed.
          </p>

          {/* Trust indicators */}
          <div className={`flex flex-wrap justify-center gap-8 mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-400">
                <div className={benefit.color}>{benefit.icon}</div>
                <span className="text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative px-4 sm:px-6 lg:px-8 -mt-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + idx * 100}ms` }}
              >
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.gradient} text-white mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-1 group-hover:text-cyan-300 transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-slate-300 text-sm font-medium mb-1">{info.content}</p>
                  <p className="text-slate-500 text-xs">{info.subtext}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Left Column - Contact Form (3 columns) */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Send Us a Message
                  </h2>
                  <p className="text-lg text-slate-400">
                    Fill out the form and we'll respond within 24 hours
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Full Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 bg-white/5 border ${focusedField === 'name' ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10'} rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 bg-white/5 border ${focusedField === 'email' ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10'} rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all`}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 bg-white/5 border ${focusedField === 'phone' ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10'} rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all`}
                        placeholder="+254 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField('')}
                        className={`w-full px-4 py-3 bg-white/5 border ${focusedField === 'company' ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10'} rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all`}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Product of Interest
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('interest')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 bg-white/5 border ${focusedField === 'interest' ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10'} rounded-xl text-white focus:outline-none transition-all`}
                    >
                      <option value="" className="bg-slate-900">Select a product...</option>
                      {products.map((product, idx) => (
                        <option key={idx} value={product} className="bg-slate-900">{product}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full px-4 py-3 bg-white/5 border ${focusedField === 'message' ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/10'} rounded-xl text-white placeholder-slate-500 focus:outline-none transition-all resize-none`}
                      placeholder="Tell us about your business needs..."
                    />
                  </div>

                  {status.message && (
                    <div className={`flex items-center gap-3 p-4 rounded-xl ${
                      status.type === 'success' 
                        ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' 
                        : 'bg-red-500/10 text-red-300 border border-red-500/20'
                    }`}>
                      {status.type === 'success' ? (
                        <CheckCircle size={20} className="flex-shrink-0" />
                      ) : (
                        <AlertCircle size={20} className="flex-shrink-0" />
                      )}
                      <p className="text-sm font-medium">{status.message}</p>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className="group relative w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold overflow-hidden shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Info Cards (2 columns) */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Process Steps */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <MessageSquare size={24} className="text-cyan-400" />
                  What Happens Next?
                </h3>
                <div className="space-y-5">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="group relative">
                      <div className="flex gap-4">
                        <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${step.gradient} text-white rounded-xl flex items-center justify-center font-bold shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                      {idx < processSteps.length - 1 && (
                        <div className="ml-5 mt-3 mb-2 h-6 border-l-2 border-dashed border-white/10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Urgent Contact CTA */}
              <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-orange-600 p-8 rounded-3xl shadow-2xl shadow-orange-500/20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <Zap size={24} />
                    Need Immediate Help?
                  </h3>
                  <p className="text-orange-50 mb-6 leading-relaxed">
                    For urgent inquiries or technical support, our team is ready to assist you right away.
                  </p>
                  <a
                    href="mailto:Davidk@thinktrek.co.ke"
                    className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                  >
                    <Mail size={20} />
                    Email Us Now
                  </a>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white mb-4 shadow-lg">
                    <MapPin size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Visit Our Office</h3>
                  <p className="text-slate-400 text-sm mb-1">Nairobi, Kenya</p>
                  <p className="text-slate-500 text-xs">Central Business District</p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-slate-400 text-xs italic">
                      Exact address available upon request
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}