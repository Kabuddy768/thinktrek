import { useState } from 'react';
import { Search, Award, Users, TrendingUp, ExternalLink, Filter, CheckCircle } from 'lucide-react';
import Footer from "../components/footer/Footer"
import { Link } from 'react-router-dom' // ✅ Imported for potential navigation
export default function PartnersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Enhanced partner data structure
  const partners = [
    {
      id: 1,
      name: "5 Tea",
      logo: "/images/patners/5Tea.jpg",
      website: "https://5tea.co.ke/",
      category: "Food & Beverage",
      industry: "Retail",
      description: "Leading tea distributor specializing in premium blends and wholesale supply",
      productsUsed: ["IQ Retail", "Xact ERP"],
      since: "2019",
      testimonial: "Thinktrek's solutions streamlined our inventory management",
      stats: { employees: "50+", locations: "3" }
    },
    {
      id: 2,
      name: "Abson Motors",
      logo: "/images/patners/Abson.jpg",
      website: "https://absonmotors.com/",
      category: "Automotive",
      industry: "Sales & Service",
      description: "Trusted automotive dealer with comprehensive vehicle sales and maintenance",
      productsUsed: ["Sage 200", "Palladium Accounting"],
      since: "2018",
      testimonial: "Financial management became effortless with their software",
      stats: { employees: "100+", locations: "2" }
    },
    {
      id: 3,
      name: "AgVenture",
      logo: "/images/patners/AgVenture.jpg",
      website: "https://agvke.com/",
      category: "Agriculture",
      industry: "Distribution",
      description: "Agricultural input supplier supporting farmers with quality products",
      productsUsed: ["Xact ERP", "IQ Retail"],
      since: "2020",
      testimonial: "Supply chain visibility improved dramatically",
      stats: { employees: "30+", locations: "5" }
    },
    {
      id: 4,
      name: "Cargo Lite",
      logo: "/images/patners/CargoLite.jpg",
      website: "https://www.cargo-lite.com/",
      category: "Logistics",
      industry: "Transport",
      description: "Efficient cargo and logistics solutions across East Africa",
      productsUsed: ["Sage 200", "Xact ERP"],
      since: "2017",
      testimonial: "Real-time tracking transformed our operations",
      stats: { employees: "200+", locations: "7" }
    },
    {
      id: 5,
      name: "Liquor Library",
      logo: "/images/patners/Liqour.jpg",
      website: "#",
      category: "Food & Beverage",
      industry: "Retail",
      description: "Premium spirits and wine retail with curated selection",
      productsUsed: ["IQ Retail"],
      since: "2021",
      testimonial: "POS system made checkout seamless",
      stats: { employees: "15+", locations: "2" }
    },
    {
      id: 6,
      name: "Samis Bakers",
      logo: "/images/patners/SamisBakers.jpg",
      website: "#",
      category: "Food & Beverage",
      industry: "Manufacturing",
      description: "Artisan bakery delivering fresh products daily",
      productsUsed: ["Xact ERP", "Palladium Accounting"],
      since: "2022",
      testimonial: "Production planning became much more efficient",
      stats: { employees: "25+", locations: "1" }
    },
    {
  id: 7,
  name: "XtraMed",
  logo: "/images/patners/Xtramed.jpg",
  website: "https://www.xtramed.co.ke/",
  category: "Healthcare",
  industry: "Pharmaceutical Distribution",
  description: "Leading pharmaceutical and medical supplies distributor providing quality healthcare products across Kenya and East Africa",
  productsUsed: ["Sage 200", "Xact ERP"],
  since: "2016",
  testimonial: "Supply chain management and inventory tracking became significantly more efficient with Thinktrek's solutions",
  stats: { 
    employees: "40+", 
    locations: "2" 
  }
}
  ];

  const categories = ['all', 'Food & Beverage', 'Automotive', 'Agriculture', 'Logistics','Healthcare'];

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || partner.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = {
    totalPartners: partners.length,
    industries: [...new Set(partners.map(p => p.industry))].length,
    yearsExperience: Math.max(...partners.map(p => 2024 - parseInt(p.since)))
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            Our Trusted Partners
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Growing Together with Kenya's Leading Businesses
          </h1>
          
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-12">
            We're proud to power operations for diverse businesses across multiple industries
          </p>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Award className="w-8 h-8 mb-3 mx-auto" />
              <div className="text-4xl font-bold mb-2">{stats.totalPartners}+</div>
              <div className="text-sm text-indigo-100">Active Partners</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <TrendingUp className="w-8 h-8 mb-3 mx-auto" />
              <div className="text-4xl font-bold mb-2">{stats.industries}</div>
              <div className="text-sm text-indigo-100">Industries Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 mb-3 mx-auto" />
              <div className="text-4xl font-bold mb-2">{stats.yearsExperience}+</div>
              <div className="text-sm text-indigo-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 px-6 md:px-12 -mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search partners..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat === 'all' ? 'All Partners' : cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredPartners.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No partners found</h3>
              <p className="text-slate-600">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
                >
                  {/* Partner Logo Section */}
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 flex items-center justify-center h-48 relative overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Since {partner.since}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900">{partner.name}</h3>
                      {partner.website && partner.website !== '#' && (
                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-700 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    <div className="flex gap-2 mb-4">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                        {partner.category}
                      </span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        {partner.industry}
                      </span>
                    </div>

                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Products Used */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Solutions Used:</p>
                      <div className="flex flex-wrap gap-2">
                        {partner.productsUsed.map((product, idx) => (
                          <span
                            key={idx}
                            className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-slate-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-slate-700 italic">"{partner.testimonial}"</p>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between text-sm text-slate-600 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{partner.stats.employees} employees</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span>{partner.stats.locations} location(s)</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join our growing community of successful businesses across Kenya
          </p>
          
          <div className="mt-12">
                        {/* CTA: Updated to gradient/teal/cyan for modern polish and strong visual weight */}
                        <Link
                            to="/contact"
                            className="inline-block bg-gradient-to-r from-cyan-400 to-teal-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-300 transition-all transform hover:scale-[1.05] shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
                        >
                            Get Started Today
                        </Link>
                    </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Training Included</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}