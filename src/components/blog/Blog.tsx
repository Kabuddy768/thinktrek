import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BlogPage() {
  const posts = [
    {
      title: '5 Signs Your Business Needs an ERP System',
      excerpt: 'Learn how to identify when your business has outgrown basic software and needs a comprehensive ERP solution.',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Business Growth',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Understanding Kenyan Tax Compliance with Accounting Software',
      excerpt: 'A comprehensive guide to maintaining tax compliance using modern accounting solutions in Kenya.',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Compliance',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Retail Success: How POS Systems Increase Revenue',
      excerpt: 'Discover how modern point-of-sale systems can boost sales, improve customer experience, and streamline operations.',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Retail',
      image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Warehouse Management Best Practices for 2024',
      excerpt: 'Modern strategies and technologies to optimize your warehouse operations and reduce costs.',
      date: '2023-12-28',
      readTime: '8 min read',
      category: 'Operations',
      image: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Digital Transformation: A Guide for SMEs',
      excerpt: 'Step-by-step approach to implementing digital solutions in your small or medium-sized business.',
      date: '2023-12-20',
      readTime: '10 min read',
      category: 'Digital Transformation',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Cloud vs On-Premise: Choosing the Right Solution',
      excerpt: 'Compare deployment options to find the best fit for your business needs and infrastructure.',
      date: '2023-12-15',
      readTime: '6 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp size={16} />
            INSIGHTS & UPDATES
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Blog & Resources
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Expert insights, industry trends, and practical guides to help your business thrive
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article
                key={idx}
                className="group bg-white rounded-2xl border-2 border-slate-200 hover:border-cyan-300 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/90 backdrop-blur-sm text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-slate-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <button className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Subscribe to our newsletter for the latest insights, product updates, and industry news
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl border-2 border-slate-200 focus:border-cyan-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Let's discuss how our solutions can transform your business operations
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all transform hover:scale-105"
          >
            Contact Us Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
