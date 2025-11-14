import { BookOpen, Download, Video, FileText, Search, ChevronRight, Sparkles, Code, GitBranch, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Documentation() {
  const [searchQuery, setSearchQuery] = useState('');

  const productDocs = [
    {
      name: "Palladium Accounting",
      icon: "📊",
      description: "Complete financial management documentation",
      gradient: "from-indigo-500 to-purple-600",
      resources: [
        { title: "Getting Started Guide", type: "PDF", icon: <FileText className="w-4 h-4" /> },
        { title: "User Manual", type: "PDF", icon: <BookOpen className="w-4 h-4" /> },
        { title: "Video Tutorials", type: "Video", icon: <Video className="w-4 h-4" /> },
        { title: "API Documentation", type: "Web", icon: <Code className="w-4 h-4" /> }
      ]
    },
    {
      name: "IQ Retail",
      icon: "🛒",
      description: "Point-of-sale and retail management guides",
      gradient: "from-sky-500 to-cyan-600",
      resources: [
        { title: "Setup Wizard Guide", type: "PDF", icon: <FileText className="w-4 h-4" /> },
        { title: "POS Operations Manual", type: "PDF", icon: <BookOpen className="w-4 h-4" /> },
        { title: "Inventory Management", type: "PDF", icon: <FileText className="w-4 h-4" /> },
        { title: "Training Videos", type: "Video", icon: <Video className="w-4 h-4" /> }
      ]
    },
    {
      name: "Xact ERP",
      icon: "⚙️",
      description: "Enterprise resource planning documentation",
      gradient: "from-emerald-500 to-teal-600",
      resources: [
        { title: "Implementation Guide", type: "PDF", icon: <FileText className="w-4 h-4" /> },
        { title: "Manufacturing Module", type: "PDF", icon: <BookOpen className="w-4 h-4" /> },
        { title: "Supply Chain Setup", type: "PDF", icon: <FileText className="w-4 h-4" /> },
        { title: "Webinar Recordings", type: "Video", icon: <Video className="w-4 h-4" /> }
      ]
    },
    {
      name: "Sage 200",
      icon: "🏢",
      description: "Business management platform guides",
      gradient: "from-amber-500 to-orange-600",
      resources: [
        { title: "Administrator Guide", type: "PDF", icon: <FileText className="w-4 h-4" /> },
        { title: "Financial Management", type: "PDF", icon: <BookOpen className="w-4 h-4" /> },
        { title: "Integration Guide", type: "PDF", icon: <GitBranch className="w-4 h-4" /> },
        { title: "Best Practices", type: "PDF", icon: <Sparkles className="w-4 h-4" /> }
      ]
    }
  ];

  const quickLinks = [
    { title: "Installation Guides", icon: <Terminal className="w-5 h-5" />, color: "text-blue-600" },
    { title: "Troubleshooting", icon: <Code className="w-5 h-5" />, color: "text-red-600" },
    { title: "Release Notes", icon: <GitBranch className="w-5 h-5" />, color: "text-green-600" },
    { title: "FAQs", icon: <BookOpen className="w-5 h-5" />, color: "text-purple-600" }
  ];

  const categories = [
    {
      title: "Getting Started",
      description: "New to our products? Start here",
      icon: <Sparkles className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600",
      articles: 12
    },
    {
      title: "User Guides",
      description: "Step-by-step instructions",
      icon: <BookOpen className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600",
      articles: 45
    },
    {
      title: "Video Tutorials",
      description: "Watch and learn",
      icon: <Video className="w-6 h-6" />,
      color: "bg-red-50 text-red-600",
      articles: 28
    },
    {
      title: "Technical Specs",
      description: "Detailed technical information",
      icon: <Code className="w-6 h-6" />,
      color: "bg-green-50 text-green-600",
      articles: 18
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-4 h-4" />
            Documentation Hub
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Everything You Need to <span className="text-cyan-400">Succeed</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Comprehensive guides, tutorials, and resources for all Thinktrek products
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search documentation..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-6 md:px-12 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, i) => (
              <button
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-100 text-left group"
              >
                <div className={`${link.color} mb-3 group-hover:scale-110 transition-transform`}>
                  {link.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{link.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Browse by Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-100 cursor-pointer group"
              >
                <div className={`inline-flex p-3 rounded-xl ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{category.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{category.articles} articles</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Documentation */}
      <section className="py-16 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Product Documentation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {productDocs.map((product, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{product.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-slate-600">{product.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {product.resources.map((resource, j) => (
                    <button
                      key={j}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-slate-400 group-hover:text-slate-600">
                          {resource.icon}
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-slate-900 text-sm">{resource.title}</p>
                          <p className="text-xs text-slate-500">{resource.type}</p>
                        </div>
                      </div>
                      <Download className="w-4 h-4 text-slate-400 group-hover:text-slate-600" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Our support team is here to help you succeed
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Contact Support
            </Link>
            <Link
              to="/support"
              className="bg-white border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-all"
            >
              Visit Support Center
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}