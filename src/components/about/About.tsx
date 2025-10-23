import { Link } from 'react-router-dom'
import { Users, Target, Award, TrendingUp, CheckCircle, Lightbulb, Shield, Zap, Goal, ArrowRight } from 'lucide-react'

// --- Helper Component: ServiceCard (Unchanged, but imported) ---
const ServiceCard = ({ icon: Icon, title, desc }) => (
    <div className="space-y-3">
        <Icon className="text-cyan-600" size={32} />
        <h4 className="font-bold text-xl text-gray-900">{title}</h4>
        <p className="text-gray-600 text-base">{desc}</p>
    </div>
);
// -----------------------------------------------------------------

export default function AboutPage() {
    // Note: The color palette is shifted from hard Blue/Yellow to Indigo/Cyan/Teal
    const values = [
        {
            icon: <Lightbulb size={32} />,
            title: "Innovation",
            description: "We stay ahead of technology trends to deliver cutting-edge solutions that drive business transformation.",
            // Softened orange gradient for accent
            color: "from-amber-400 to-yellow-500", 
            accent: "amber"
        },
        {
            icon: <Users size={32} />,
            title: "Client Partnership",
            description: "Your success is our success. We build lasting relationships through dedicated support and personalized service.",
            // Adjusted blue gradient
            color: "from-indigo-400 to-indigo-600",
            accent: "indigo"
        },
        {
            icon: <Shield size={32} />,
            title: "Reliability",
            description: "Enterprise-grade solutions backed by 24/7 support ensure your business operations never skip a beat.",
            // Adjusted purple gradient
            color: "from-purple-400 to-fuchsia-600",
            accent: "fuchsia"
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Growth Mindset",
            description: "We design scalable solutions that grow with your business, from startup to enterprise.",
            // Adjusted green gradient
            color: "from-emerald-400 to-teal-500",
            accent: "teal"
        }
    ];

    const milestones = [
        { number: "500+", label: "Businesses Transformed" },
        { number: "15+", label: "Years Combined Experience" },
        { number: "4", label: "Core Product Solutions" },
        { number: "98%", label: "Client Satisfaction" }
    ];

    const solutions = [
        { name: "Palladium Accounting", desc: "Comprehensive financial management" },
        { name: "IQ Retail", desc: "Point of sale excellence" },
        { name: "Xact ERP", desc: "End-to-end business integration" },
        { name: "Sage 200", desc: "Enterprise resource planning" }
    ];

    return (
        <div className="bg-white font-sans">
            {/* Hero Section: Modernized Gradient & Accent */}
            <section className="relative bg-gradient-to-br from-slate-800 to-indigo-900 text-white py-32 overflow-hidden">
                {/* Subtle Noise Texture/Pattern (Simplified from original heavy SVG) */}
                <div className="absolute inset-0 opacity-5 bg-[url('https://api.uifort.com/api/textures/noise')] blur-sm"></div>
                
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
                        About <span className="text-cyan-400">Thinktrek</span> {/* Updated accent color */}
                    </h1>
                    <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
                        Empowering Kenyan businesses with world-class automation solutions that streamline operations and accelerate growth.
                    </p>
                    {/* CTA Button placeholder for visual consistency */}
                    <div className="pt-10">
                        <Link 
                            to="/contact" 
                            className="inline-block bg-gradient-to-r from-cyan-400 to-teal-500 text-slate-900 px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-cyan transition-all transform hover:scale-[1.05] shadow-xl"
                        >
                            Explore Solutions
                        </Link>
                    </div>
                </div>
                
                {/* Wave Separator REMOVED for cleaner design, rely on shadow/margin */}
                
            </section>

            {/* Who We Are: Mission & Stats (Smoother layout) */}
            <section className="pt-20 pb-28 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        {/* Mission Content */}
                        <div className="lg:col-span-7">
                            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-cyan-600 mb-2">Our Mission</span>
                            <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                                Driving Digital Transformation in <span className="text-indigo-600">Kenya</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Thinktrek Business Solutions Limited is a leading provider of business automation software, specializing in comprehensive solutions that transform how **small and medium-sized businesses** operate.
                                </p>
                                <p>
                                    We understand the unique challenges facing Kenyan businesses. That's why we partner with **world-class software providers** to deliver proven solutions in accounting, ERP, warehouse management, and point of sale.
                                </p>
                                <div className="flex items-start space-x-4 pt-4">
                                    <Goal size={32} className="text-teal-500 flex-shrink-0 mt-1" />
                                    <p className="font-semibold text-gray-800">
                                        Our goal: To make enterprise-grade business automation **accessible, affordable, and easy to implement** for growing businesses across Kenya.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Milestones Cards: Enhanced Hover Effect */}
                        <div className="lg:col-span-5 grid grid-cols-2 gap-6">
                            {milestones.map((milestone, idx) => (
                                <div 
                                    key={idx}
                                    className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group hover:border-indigo-400 hover:ring-2 hover:ring-indigo-200/50"
                                >
                                    <div className="text-5xl font-extrabold text-indigo-700 mb-2">
                                        {milestone.number}
                                    </div>
                                    <div className="text-base text-gray-600 font-medium uppercase tracking-wide">
                                        {milestone.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Core Values: Enhanced Card Polish and Hover */}
            <section className="py-28 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-amber-600 mb-2">Our Foundation</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do and how we serve our partners
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => (
                            <div 
                                key={idx}
                                // Increased p-8 to p-10 for more breathing room
                                className={`relative group bg-white p-10 rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden`}
                            >
                                {/* Dynamic Accent Color Layer: Increased opacity for better effect */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                
                                {/* Icon container: Increased padding p-4 to p-5 */}
                                <div className={`relative inline-flex p-5 rounded-xl bg-gradient-to-br ${value.color} text-white mb-4 shadow-lg group-hover:scale-105 transition-transform`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* What We Do: Products & Services (Improved Layout and Scannability) */}
            <section className="py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-teal-600 mb-2">Our Expertise</span>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What We Deliver
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We deliver, implement, and support best-in-class business automation software tailored to your industry and needs.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {/* Products Column: Structured for better visual flow */}
                        <div className="lg:col-span-1 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-3 flex items-center gap-3">
                                <TrendingUp size={24} className="text-indigo-600" /> Core Products
                            </h3>
                            {solutions.map((solution, idx) => (
                                <div 
                                    key={idx}
                                    className="group flex items-center justify-between p-3 rounded-lg hover:bg-cyan-50 transition-all cursor-pointer border-b border-gray-100 last:border-b-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="text-teal-500 flex-shrink-0" size={20} />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{solution.name}</h4>
                                            <p className="text-gray-600 text-sm">{solution.desc}</p>
                                        </div>
                                    </div>
                                    {/* Added navigation arrow for polish */}
                                    <ArrowRight size={18} className="text-gray-400 group-hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                                </div>
                            ))}
                        </div>

                        {/* Services Column: ServiceCard text color updated for consistency */}
                        <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg space-y-8">
                            <h3 className="text-2xl font-bold text-gray-900 border-b pb-3 mb-4 flex items-center gap-3">
                                <Zap size={24} className="text-indigo-600" /> Expert Services
                            </h3>
                            {/* Restructured services into a 3-column grid for better use of space */}
                            <div className="grid sm:grid-cols-3 gap-8">
                                <ServiceCard icon={Zap} title="Software Sales" desc="Authorized reseller of leading platforms like Palladium, Sage, and more." />
                                <ServiceCard icon={Target} title="Implementation" desc="Expert setup and configuration tailored to your specific business processes." />
                                <ServiceCard icon={Award} title="24/7 Support" desc="Dedicated technical support to ensure your systems run smoothly around the clock." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us & CTA (Final closing section) */}
            <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-700 via-indigo-800 to-slate-900 text-white">
                <div className="absolute inset-0 opacity-10" />
                <div className="relative max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-extrabold mb-6">
                        Your Trusted Partner for Growth
                    </h2>
                    <div className="space-y-6 text-lg text-indigo-200 max-w-3xl mx-auto">
                        <p>
                            We're more than just software vendors—we're your technology partners. Our deep understanding of the Kenyan business environment, combined with technical expertise, makes us the ideal choice.
                        </p>
                        <p className="text-2xl font-bold text-cyan-400 pt-4"> {/* Updated accent color */}
                            Let's build something great together.
                        </p>
                    </div>
                    
                    <div className="mt-12">
                        {/* CTA: Updated to gradient/teal/cyan for modern polish and strong visual weight */}
                        <Link
                            to="/contact"
                            className="inline-block bg-gradient-to-r from-cyan-400 to-teal-500 text-gray-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-300 transition-all transform hover:scale-[1.05] shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-300/50"
                        >
                            Get Started Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}