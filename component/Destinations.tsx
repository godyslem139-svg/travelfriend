import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Destinations() {
  const whatsappNumber = "00201214968169";

  const destinations = [
    {
      name: "Cairo",
      tagline: "The City of a Thousand Minarets",
      image: "/cairo.webp",
      duration: "Full Day & Multi-Day Tours",
      description:
        "Stand before the Great Pyramids of Giza, explore the Grand Egyptian Museum, and wander through the historic alleys of Khan El-Khalili.",
      highlights: ["Giza Pyramids & Sphinx", "Grand Egyptian Museum", "Nile Dinner Cruise"],
    },
    {
      name: "Alexandria",
      tagline: "The Bride of the Mediterranean",
      image: "/alexandria.webp",
      duration: "Day Trips & Coastal Stays",
      description:
        "Breathe in the Mediterranean breeze while visiting the Citadel of Qaitbay, the modern Bibliotheca Alexandrina, and royal palaces.",
      highlights: ["Qaitbay Citadel", "Bibliotheca Alexandrina", "Montaza Royal Gardens"],
    },
    {
      name: "Aswan",
      tagline: "The Jewel of the Nile",
      image: "/aswan.webp",
      duration: "Nile Cruises & Cultural Tours",
      description:
        "Experience timeless serenity sailing on a traditional Felucca, marvel at the Philae Temple, and immerse yourself in authentic Nubian culture.",
      highlights: ["Philae Temple", "Nubian Village", "Abu Simbel Excursion"],
    },
    {
      name: "Red Sea",
      tagline: "Crystal Waters & Coral Wonders",
      image: "/red sea.webp",
      duration: "Beach Resorts & Marine Safari",
      description:
        "Dive into vibrant coral reefs, enjoy private yacht island trips, and experience thrilling desert quad safaris along the Red Sea coast.",
      highlights: ["VIP Yacht Snorkeling", "Scuba Diving Spots", "Desert Quad Safari"],
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden" id="destinations">
      {/* إضاءة خلفية باللون اللبني المستوحى من اللوجو */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#00a2ff]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* رأس السكشن */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#00a2ff]/15 border border-[#00a2ff]/40 text-sky-300 text-sm font-semibold tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(0,162,255,0.25)]">
            Top Destinations
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Explore Egypt’s Most{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-[#00a2ff] to-blue-500">
              Iconic Regions
            </span>
          </h2>

          <p className="text-slate-300 text-lg font-light">
            From ancient pharaonic wonders to crystal-clear coastal escapes, choose your next adventure with Travel Friend.
          </p>
        </div>

        {/* شبكة كروت المناطق (2x2 على الشاشات الكبيرة لإبراز فخامة الصور) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {destinations.map((dest, index) => {
            const customMessage = encodeURIComponent(
              `Hello Travel Friend, I would like to inquire about tours and packages in ${dest.name}.`
            );
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${customMessage}`;

            return (
              <div
                key={index}
                className="relative group rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2"
              >
                {/* طبقة التوهج اللبني الخارجية (Glow Layer) */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00a2ff] via-sky-400 to-blue-600 rounded-3xl blur-md opacity-30 group-hover:opacity-85 group-hover:blur-lg transition duration-500" />

                {/* حاوية الكارت */}
                <div className="relative h-full bg-[#071326]/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-[#00a2ff]/30 group-hover:border-[#00a2ff]/80 shadow-[0_0_25px_rgba(0,162,255,0.15)] group-hover:shadow-[0_0_45px_rgba(0,162,255,0.4)] transition-all duration-500 flex flex-col">
                  
                  {/* قسم الصورة العلوية */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={dest.image}
                      alt={`${dest.name} Tours - Travel Friend`}
                      fill
                      className="object-cover transform group-hover:scale-110 transition duration-700"
                    />
                    {/* تدرج لوني فوق الصورة لدمجها مع جسم الكارت */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/40 to-transparent" />

                    {/* بادج المدة أعلى الصورة */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 py-1.5 px-3.5 rounded-full bg-slate-950/75 border border-[#00a2ff]/40 text-sky-300 text-xs font-semibold backdrop-blur-md">
                        ✈️ {dest.duration}
                      </span>
                    </div>

                    {/* اسم المنطقة فوق الجزء السفلي من الصورة */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-1">
                        {dest.tagline}
                      </p>
                      <h3 className="text-3xl font-extrabold text-white tracking-tight">
                        {dest.name}
                      </h3>
                    </div>
                  </div>

                  {/* تفاصيل الكارت السفلية */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-5">
                      <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                        {dest.description}
                      </p>

                      {/* أبرز الأنشطة داخل المنطقة */}
                      <div className="flex flex-wrap gap-2">
                        {dest.highlights.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium py-1.5 px-3 rounded-xl bg-blue-950/60 text-blue-200 border border-blue-800/60"
                          >
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* زر الحجز والاستفسار المخصص لكل منطقة */}
                    <div className="pt-4 border-t border-blue-900/50 flex items-center justify-between gap-4">
                      <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00a2ff] to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_0_20px_rgba(0,162,255,0.3)] hover:shadow-[0_0_30px_rgba(0,162,255,0.6)] transition-all duration-300"
                      >
                        <span>Book {dest.name} Trip via WhatsApp</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
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