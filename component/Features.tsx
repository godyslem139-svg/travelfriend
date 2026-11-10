import React from 'react';

export default function Features() {
  const features = [
    {
      title: "Tailor-Made Itineraries",
      description:
        "Every traveler is unique. We craft personalized tour plans that match your exact pace, interests, and budget.",
      badge: "Custom Plans",
      icon: (
        <svg className="w-7 h-7 text-[#00a2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: "24/7 WhatsApp Concierge",
      description:
        "Instant human support before, during, and after your trip. We are always one message away whenever you need us.",
      badge: "Instant Support",
      icon: (
        <svg className="w-7 h-7 text-[#00a2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Best Price Guarantee",
      description:
        "Exclusive direct rates with top resorts, yachts, and local fleets—delivering luxury experiences with zero hidden fees.",
      badge: "Top Value",
      icon: (
        <svg className="w-7 h-7 text-[#00a2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Verified Local Experts",
      description:
        "Travel safely with licensed, multilingual tour guides who know the hidden gems and authentic stories of every destination.",
      badge: "Pro Guides",
      icon: (
        <svg className="w-7 h-7 text-[#00a2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "VIP Transfers & Comfort",
      description:
        "From airport pickup to private excursions, enjoy modern, air-conditioned vehicles and punctual door-to-door service.",
      badge: "Luxury Fleet",
      icon: (
        <svg className="w-7 h-7 text-[#00a2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Fast & Flexible Booking",
      description:
        "Reserve your spot in minutes via WhatsApp with flexible rescheduling options designed around your peace of mind.",
      badge: "Easy Process",
      icon: (
        <svg className="w-7 h-7 text-[#00a2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 bg-white text-slate-900 overflow-hidden" id="features">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00a2ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#00a2ff]/10 border border-[#00a2ff]/30 text-blue-600 text-sm font-semibold tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(0,162,255,0.15)]">
            Why Choose Travel Friend
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            Designed to Make Every Trip{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Effortless & Unforgettable
            </span>
          </h2>

          <p className="text-slate-600 text-lg font-light">
            We combine local expertise, premium comfort, and round-the-clock care so you can focus on making memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00a2ff] via-sky-400 to-blue-600 rounded-2xl blur-md opacity-25 group-hover:opacity-75 transition duration-500" />

              <div className="relative h-full bg-white backdrop-blur-xl rounded-2xl p-8 border border-slate-200 group-hover:border-[#00a2ff]/60 shadow-xl transition-all duration-500 flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider py-1 px-3 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-medium">
                  <span>Travel Friend Standard</span>
                  <span className="w-2 h-2 rounded-full bg-[#00a2ff] shadow-[0_0_10px_#00a2ff]" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}