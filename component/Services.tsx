import React from 'react';
import Link from 'next/link';

export default function Services() {
  const whatsappNumber = "00201214968169";

  const services = [
    {
      title: "Custom Tour Itineraries",
      description:
        "Bespoke travel plans tailored precisely to your preferences, timeframe, and budget for any destination in Egypt.",
      icon: "🗺️",
      badge: "Personalized",
    },
    {
      title: "Hotel & Resort Bookings",
      description:
        "Exclusive rates and seamless reservations at top-tier luxury hotels, beachfront resorts, and boutique stays.",
      icon: "🏨",
      badge: "Best Rates",
    },
    {
      title: "VIP Nile Cruises",
      description:
        "Experience the magic of the Nile between Luxor and Aswan aboard luxury 5-star floating hotels with expert guides.",
      icon: "⛵",
      badge: "Top Rated",
    },
    {
      title: "Private Transportation & Fleet",
      description:
        "Modern air-conditioned vehicles, airport transfers, and private drivers at your disposal 24/7.",
      icon: "🚗",
      badge: "Comfort & Safety",
    },
    {
      title: "Desert Safaris & Marine Trips",
      description:
        "Thrilling Red Sea snorkeling/scuba yacht excursions and exciting desert quad bike adventures.",
      icon: "🌊",
      badge: "Adventure",
    },
    {
      title: "24/7 WhatsApp Concierge",
      description:
        "Real-time assistance, itinerary adjustments, and instant support from our travel experts anytime you need.",
      icon: "💬",
      badge: "Always On",
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden" id="services">
      {/* إضاءة خلفية باللون اللبني المستوحى من اللوجو */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00a2ff]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* رأس السكشن */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#00a2ff]/15 border border-[#00a2ff]/40 text-sky-300 text-sm font-semibold tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(0,162,255,0.25)]">
            Our Services
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Comprehensive Travel Solutions{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-[#00a2ff] to-blue-500">
              Crafted For You
            </span>
          </h2>

          <p className="text-slate-300 text-lg font-light">
            Discover the full range of premium travel services designed to elevate your journey from start to finish.
          </p>
        </div>

        {/* شبكة الكروت (6 كروت متناسقة مع التوهج اللبني) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const customMessage = encodeURIComponent(
              `Hello Travel Friend, I am interested in your service: ${service.title}. Please provide more details.`
            );
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${customMessage}`;

            return (
              <div
                key={index}
                className="relative group rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2"
              >
                {/* طبقة التوهج اللبني الخارجية */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00a2ff] via-sky-400 to-blue-600 rounded-3xl blur-md opacity-30 group-hover:opacity-85 group-hover:blur-lg transition duration-500" />

                {/* محتوى الكارت */}
                <div className="relative h-full bg-[#071326]/95 backdrop-blur-xl rounded-3xl p-8 border border-[#00a2ff]/30 group-hover:border-[#00a2ff]/80 shadow-[0_0_25px_rgba(0,162,255,0.15)] group-hover:shadow-[0_0_45px_rgba(0,162,255,0.4)] transition-all duration-500 flex flex-col justify-between">
                  
                  <div>
                    {/* رأس الكارت (الأيقونة والبادج) */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#00a2ff]/15 border border-[#00a2ff]/40 flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(0,162,255,0.3)] group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider py-1 px-3 rounded-full bg-sky-500/10 text-sky-300 border border-sky-400/25">
                        {service.badge}
                      </span>
                    </div>

                    {/* العنوان والوصف */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* زر الاستفسار السريع عبر الواتساب */}
                  <div className="mt-8 pt-4 border-t border-blue-900/40">
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-semibold text-sm transition-colors"
                    >
                      <span>Inquire via WhatsApp</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}