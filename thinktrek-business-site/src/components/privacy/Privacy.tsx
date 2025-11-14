import { Shield, Lock, Eye, Database, UserCheck, FileText, Mail, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const lastUpdated = "November 14, 2024";

  const tableOfContents = [
    { id: 'overview', title: 'Overview', icon: <Eye className="w-4 h-4" /> },
    { id: 'collection', title: 'Information We Collect', icon: <Database className="w-4 h-4" /> },
    { id: 'usage', title: 'How We Use Your Information', icon: <UserCheck className="w-4 h-4" /> },
    { id: 'sharing', title: 'Information Sharing', icon: <FileText className="w-4 h-4" /> },
    { id: 'security', title: 'Data Security', icon: <Lock className="w-4 h-4" /> },
    { id: 'rights', title: 'Your Rights', icon: <Shield className="w-4 h-4" /> },
    { id: 'contact', title: 'Contact Us', icon: <Mail className="w-4 h-4" /> }
  ];

  const highlights = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Your Data, Your Control",
      description: "You always own your data. We never sell it to third parties."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Bank-Grade Security",
      description: "ISO 27001 certified with end-to-end encryption."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Transparent Practices",
      description: "No hidden data collection. We tell you exactly what we do."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Privacy Policy
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Privacy <span className="text-cyan-400">Matters</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mb-6">
            Thinktrek Business Solutions Limited is committed to protecting your personal information and your right to privacy.
          </p>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <AlertCircle className="w-4 h-4" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 px-6 md:px-12 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100"
              >
                <div className="text-indigo-600 mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{highlight.title}</h3>
                <p className="text-slate-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Table of Contents - Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all ${
                        activeSection === item.id
                          ? 'bg-indigo-50 text-indigo-600 font-semibold'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.icon}
                      <span className="text-sm">{item.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Policy Content */}
            <div className="lg:col-span-3 space-y-12">
              
              {/* Overview */}
              <div id="overview" className="bg-white rounded-2xl p-8 shadow-md border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-3xl font-bold text-slate-900">Overview</h2>
                </div>
                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    This Privacy Policy describes how Thinktrek Business Solutions Limited ("we," "us," or "our") collects, uses, and protects your personal information when you use our software products and services, including Palladium Accounting, IQ Retail, Xact ERP, and Sage 200.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <div id="collection" className="bg-white rounded-2xl p-8 shadow-md border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-3xl font-bold text-slate-900">Information We Collect</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Personal Information</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Account Information:</strong> Name, email address, phone number, company name, job title</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Payment Information:</strong> Billing address, payment method details (processed securely through third-party payment processors)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Business Data:</strong> Financial records, transaction data, inventory information, customer data entered into our software</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Automatically Collected Information</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Usage Data:</strong> How you interact with our software, features used, time spent</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Cookies and Tracking:</strong> Session cookies, preference cookies, analytics cookies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div id="usage" className="bg-white rounded-2xl p-8 shadow-md border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <UserCheck className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-3xl font-bold text-slate-900">How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-slate-600">
                  <p className="leading-relaxed">We use the collected information for the following purposes:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-slate-900">Service Delivery:</strong> To provide, operate, and maintain our software products
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-slate-900">Customer Support:</strong> To respond to your inquiries and provide technical assistance
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-slate-900">Product Improvement:</strong> To analyze usage patterns and improve our services
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-slate-900">Communication:</strong> To send service updates, security alerts, and administrative messages
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600 flex-shrink-0">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <strong className="text-slate-900">Compliance:</strong> To comply with legal obligations and enforce our terms of service
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div id="sharing" className="bg-white rounded-2xl p-8 shadow-md border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-3xl font-bold text-slate-900">Information Sharing</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                    <p className="text-amber-800 font-semibold mb-2">We DO NOT sell your personal information to third parties.</p>
                    <p className="text-amber-700 text-sm">Your data is yours, and we take that responsibility seriously.</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">We may share information with:</h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-slate-900 min-w-[140px]">Service Providers:</span>
                        <span>Trusted third-party vendors who help us operate our services (e.g., cloud hosting, payment processing)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-slate-900 min-w-[140px]">Legal Requirements:</span>
                        <span>When required by law, court order, or government request</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-slate-900 min-w-[140px]">Business Transfers:</span>
                        <span>In connection with a merger, acquisition, or sale of assets (with notice to affected users)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-slate-900 min-w-[140px]">Your Consent:</span>
                        <span>When you explicitly authorize us to share specific information</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div id="security" className="bg-white rounded-2xl p-8 shadow-md border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-3xl font-bold text-slate-900">Data Security</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-slate-600 leading-relaxed">
                    We implement industry-standard security measures to protect your personal information:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        Encryption
                      </h4>
                      <p className="text-sm text-slate-600">All data transmitted between your device and our servers is encrypted using TLS 1.3. Data at rest is encrypted using AES-256.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <UserCheck className="w-5 h-5 text-green-600" />
                        Access Controls
                      </h4>
                      <p className="text-sm text-slate-600">Role-based access controls ensure only authorized personnel can access sensitive data. Multi-factor authentication required for admin accounts.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Database className="w-5 h-5 text-green-600" />
                        Regular Backups
                      </h4>
                      <p className="text-sm text-slate-600">Your data is backed up daily to geographically distributed data centers with 99.9% uptime guarantee.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-green-600" />
                        Monitoring
                      </h4>
                      <p className="text-sm text-slate-600">24/7 security monitoring and incident response team to detect and respond to potential threats.</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-blue-800 text-sm">
                      <strong>Certifications:</strong> We are ISO 27001 certified and comply with international data protection standards including GDPR principles.
                    </p>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div id="rights" className="bg-white rounded-2xl p-8 shadow-md border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-3xl font-bold text-slate-900">Your Privacy Rights</h2>
                </div>
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    Under applicable data protection laws, you have the following rights:
                  </p>
                  <div className="space-y-3">
                    {[
                      { title: "Access", desc: "Request a copy of the personal information we hold about you" },
                      { title: "Correction", desc: "Request correction of inaccurate or incomplete information" },
                      { title: "Deletion", desc: "Request deletion of your personal information (subject to legal obligations)" },
                      { title: "Portability", desc: "Receive your data in a structured, machine-readable format" },
                      { title: "Objection", desc: "Object to processing of your personal information for certain purposes" },
                      { title: "Restriction", desc: "Request restriction of processing in certain circumstances" },
                      { title: "Withdraw Consent", desc: "Withdraw consent for data processing at any time" }
                    ].map((right, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-slate-900">{right.title}</h4>
                          <p className="text-sm text-slate-600">{right.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-xl mt-6">
                    <h4 className="font-bold text-indigo-900 mb-2">How to Exercise Your Rights</h4>
                    <p className="text-indigo-800 text-sm mb-3">
                      To exercise any of these rights, please contact our Data Protection Officer at:
                    </p>
                    <a href="mailto:Davidk@thinktrek.co.ke" className="text-indigo-600 font-semibold hover:text-indigo-700">
                      Davidk@thinktrek.co.ke
                    </a>
                    <p className="text-indigo-700 text-sm mt-3">
                      We will respond to your request within 30 days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div id="contact" className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 shadow-xl text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6" />
                  <h2 className="text-3xl font-bold">Contact Us</h2>
                </div>
                <div className="space-y-6">
                  <p className="text-indigo-100 leading-relaxed">
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-semibold mb-2">Thinktrek Business Solutions Limited</h4>
                      <p className="text-sm text-indigo-100">Kiambu Road, Feruzi Towers</p>
                      <p className="text-sm text-indigo-100">6th Floor, Wing A-D</p>
                      <p className="text-sm text-indigo-100">Nairobi, Kenya</p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-semibold mb-2">Email</h4>
                      <a href="mailto:Davidk@thinktrek.co.ke" className="text-cyan-300 hover:text-cyan-200">
                        Davidk@thinktrek.co.ke
                      </a>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <h4 className="font-semibold mb-2">Phone</h4>
                      <a href="tel:+254726386202" className="text-cyan-300 hover:text-cyan-200">
                        +254 726 386 202
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Changes to This Privacy Policy:</strong> We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}