import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUsPage() {
  const whatsappNumber = "00201214968169";
  const whatsappMessage = encodeURIComponent("Hello Travel Friend, I would like to know more about your company and travel packages.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const stats = [
    { label: "Happy Travelers", value: "5,000+" },
    { label: "Destinations Covered", value: "15+" },
    { label: "Expert Tour Guides", value: "30+" },
    { label: "Customer Satisfaction", value: "100%" },
  ];

  const coreValues = [
    {
      title: "Trust & Transparency",
      description: "No hidden fees or unexpected surprises. We believe clear communication is the foundation of every great journey.",
      icon: "🛡️",
    },
    {
      title: "Tailored Experiences",
      description: "We don't do cookie-cutter tours. Every itinerary is meticulously customized to match your unique travel style.",
      icon: "✈️",
    },
    {
      title: "24/7 Dedicated Support",
      description: "From the moment you land until you return home, our concierge team is always available via WhatsApp and phone.",
      icon: "💬",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20 selection:bg-sky-500 selection:text-slate-950">
      
      <section className="relative overflow-hidden border-b border-blue-900/40 bg-gradient-to-b from-[#0a192f] via-slate-950 to-slate-950 py-20 lg:py-28">
        {/* إضاءة خلفية متوهجة */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00a2ff]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#00a2ff]/15 border border-[#00a2ff]/40 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,162,255,0.25)]">
            About Travel Friend
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            Your Ultimate Companion for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-[#00a2ff] to-blue-500">
              Unforgettable Journeys
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100/80 font-light leading-relaxed max-w-2xl mx-auto">
            We are passionate travel specialists dedicated to transforming your dreams of exploring Egypt into seamless, luxurious, and memorable adventures.
          </p>
        </div>
      </section>

      <section className="border-b border-blue-900/30 bg-[#071326]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-[#00a2ff]">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Image with Glow */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00a2ff] to-blue-600 rounded-3xl blur-lg opacity-35 group-hover:opacity-75 transition duration-500" />
            <div className="relative rounded-3xl overflow-hidden border border-[#00a2ff]/40 bg-slate-900 aspect-[4/3] shadow-[0_0_30px_rgba(0,162,255,0.2)]">
              <Image
                src="/about.webp"
                alt="Travel Friend Team and Story"
                fill
                className="object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00a2ff] block">
              Our Story & Vision
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Crafting Exceptional Travel Experiences with Passion
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Founded with a profound love for exploration and hospitality, <strong className="text-white font-semibold">Travel Friend</strong> was born to redefine how travelers experience Egypt. From the eternal pyramids of Cairo to the serene waters of Aswan and the vibrant coral reefs of the Red Sea, we handle every detail so you can focus entirely on making memories.
            </p>

            <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
              Our team consists of certified local experts, logistics coordinators, and 24/7 concierge advisors who treat every traveler like family. Whether you are seeking a family vacation, a romantic Nile cruise, or a private VIP excursion, we are your trusted companion every step of the way.
            </p>

            <div className="pt-4">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00a2ff] to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-3.5 px-8 rounded-xl shadow-[0_0_20px_rgba(0,162,255,0.4)] transition-all"
              >
                <span>Connect With Our Team</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>


      <section className="py-20 bg-[#071326]/50 border-t border-blue-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block py-1 px-3 rounded-full bg-[#00a2ff]/10 border border-[#00a2ff]/30 text-sky-300 text-xs font-semibold uppercase tracking-wider">
              Why We Stand Out
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Core Values & Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div
                key={idx}
                className="relative group rounded-3xl p-[1px] transition-all duration-500"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00a2ff] to-blue-600 rounded-3xl blur-md opacity-25 group-hover:opacity-75 transition duration-500" />
                <div className="relative h-full bg-[#071326] backdrop-blur-xl rounded-3xl p-8 border border-[#00a2ff]/30 shadow-[0_0_20px_rgba(0,162,255,0.1)] flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#00a2ff]/15 border border-[#00a2ff]/40 flex items-center justify-center text-2xl mb-6 shadow-[0_0_15px_rgba(0,162,255,0.3)]">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed font-light">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#0a192f] via-[#1e3a8a]/80 to-[#0284c7]/40 border border-[#00a2ff]/40 shadow-[0_0_40px_rgba(0,162,255,0.2)] space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-blue-100/90 text-base max-w-2xl mx-auto font-light">
            Contact us today on WhatsApp or phone to start building your custom itinerary with Travel Friend.
          </p>
          <div className="pt-2">
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-base"
            >
              <span>Chat With Us on WhatsApp</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}