import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Pricing() {
  const whatsappNumber = "00201214968169";

  const offers = [
    {
      title: "Sharm El-Sheikh Special Offer",
      duration: "4 Days (Every Thursday & Friday)",
      price: "$300",
      image: "/travel.webp",
      badge: "Hot Deal",
      description: "Enjoy the magic of Sharm El-Sheikh with top-tier resort stays, direct flights, and full board dining.",
      features: [
        "Variety of 4-Star & 5-Star Hotels",
        "Direct Flight & Transfers Included",
        "All-Inclusive Meals & Drinks",
        "24/7 WhatsApp Concierge Support"
      ],
    },
    {
      title: "Hurghada Red Sea Getaway",
      duration: "5 Days / 4 Nights",
      price: "$500",
      image: "/travlfriend.webp",
      badge: "Best Seller",
      description: "Short getaway, long memories! Enjoy the best of Hurghada with luxury resort stay and a night in Cairo.",
      features: [
        "Luxury Resort Stay + Cairo Night",
        "Flights, Transfers & All Meals",
        "Dedicated Tour Coordinator",
        "Exclusive Marine & Island Trips"
      ],
    },
    {
      title: "Cairo Cultural & History Tour",
      duration: "4 Nights / 5 Days",
      price: "$450",
      image: "/travel frind.webp",
      badge: "Egypt Visa Included",
      description: "Where history meets civilization. Explore the Pyramids, Cairo Tower, and enjoy Nile luxury cruises.",
      features: [
        "Egypt Entry Visa Included",
        "Luxury Hotel Stay + Flight & Pickup",
        "Guided Sightseeing Tours in Cairo",
        "Daily Breakfast & Full Assistance"
      ],
    },
    {
      title: "Sharm El-Sheikh Autumn Special",
      duration: "5 Days Package",
      price: "$350",
      image: "/travelfrind.webp",
      badge: "October & November",
      description: "Special autumn rates in Sharm El-Sheikh. Crystal waters, coral reefs, and unforgettable desert adventures.",
      features: [
        "Special Seasonal Discounts",
        "Flight, Transportation & Meals",
        "Complimentary Internet SIM Card",
        "Professional Tour Guide"
      ],
    },
    {
      title: "Sharm El-Sheikh Resort & Spa",
      duration: "4 Days / Installment Plan",
      price: "$300",
      image: "/travellfriend.webp",
      badge: "Flexible Payment",
      description: "Direct flights from Beirut to Sharm, luxury pool resorts, and exclusive burning hot discounts.",
      features: [
        "Direct Flight Options",
        "Top-Rated Resort Accommodations",
        "All Meals & Beverages Included",
        "Instant Online Booking"
      ],
    },
  ];

  return (
    <section className="relative py-24 bg-white text-slate-900 overflow-hidden" id="pricing">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#00a2ff]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#00a2ff]/10 border border-[#00a2ff]/30 text-blue-600 text-sm font-semibold tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(0,162,255,0.15)]">
            Exclusive Tour Offers
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
            Featured Packages &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
              Special Rates
            </span>
          </h2>

          <p className="text-slate-600 text-lg font-light">
            Explore our special promotional packages featuring top destinations across Egypt, tailored for your convenience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {offers.map((offer, index) => {
            const customMessage = encodeURIComponent(
              `Hello Travel Friend, I am interested in booking the offer: "${offer.title}" (${offer.price}). Please provide more details.`
            );
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${customMessage}`;

            return (
              <div
                key={index}
                className="relative group rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-900 via-blue-950 to-blue-900 rounded-3xl blur-md opacity-0 group-hover:opacity-90 transition duration-500" />

                <div className="relative h-full bg-white backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-200 group-hover:border-blue-950 shadow-xl transition-all duration-500 flex flex-col justify-between">
                  
                  <div>
                    <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-50 p-2 flex items-center justify-center">
                      <Image
                        src={offer.image}
                        alt={offer.title}
                        fill
                        className="object-contain transform group-hover:scale-102 transition duration-500"
                      />
                                            <div className="absolute top-3 left-3">
                        <span className="inline-block py-1 px-2.5 rounded-full bg-white/95 text-blue-700 text-[11px] font-bold shadow-md backdrop-blur-md border border-slate-200">
                          {offer.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-[#00a2ff] group-hover:bg-slate-950 text-white font-extrabold px-3 py-1.5 rounded-xl shadow-md text-sm transition-colors duration-300">
                        {offer.price}
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-950 transition-colors duration-300 leading-snug">
                        {offer.title}
                      </h3>

                      <p className="text-[11px] font-mono text-blue-600 font-semibold">
                        📅 {offer.duration}
                      </p>

                      <p className="text-slate-600 text-xs font-light leading-relaxed">
                        {offer.description}
                      </p>

                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        {offer.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                            <span className="text-blue-950 font-bold">✓</span>
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <Link
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#00a2ff] to-blue-600 hover:from-slate-900 hover:to-blue-950 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all text-xs uppercase tracking-wider"
                    >
                      <span>Book via WhatsApp</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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