import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const whatsappNumber = "00201214968169";
  const whatsappMessage = encodeURIComponent("Hello Travel Friend, I would like to inquire about your travel services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const emailAddress = "Info@travelfriend-ag.com";

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden pt-20 pb-12 border-t border-[#00a2ff]/20">
      {/* إضاءة خلفية متوهجة باللون اللبني الخاص باللوجو */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#00a2ff]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* الحاوية الرئيسية بتصميم غير تقليدي (Grid مع بطاقة عائمة متوهجة) */}
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-[#00a2ff]/50 via-sky-400/30 to-blue-600/50 shadow-[0_0_50px_rgba(0,162,255,0.15)] mb-16">
          <div className="bg-[#071326]/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 lg:p-16">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 items-start">
              
              {/* العمود الأول: الشعار ونبذة مختصرة */}
              <div className="space-y-6 lg:col-span-1">
                <Link href="/" className="flex items-center gap-3 group">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#00a2ff]/40 shadow-[0_0_15px_rgba(0,162,255,0.3)] group-hover:scale-105 transition-transform">
                    <Image 
                      src="/logo.webp" 
                      alt="Travel Friend Logo" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <span className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-[#00a2ff]">
                    Travel Friend
                  </span>
                </Link>

                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  Your ultimate partner for unforgettable journeys, customized itineraries, and VIP travel experiences across Egypt.
                </p>

                {/* شارة التوهج اللبني */}
                <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-[#00a2ff]/10 border border-[#00a2ff]/30 text-sky-300 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#00a2ff] animate-ping" />
                  24/7 Travel Concierge
                </div>
              </div>

              {/* العمود الثاني: روابط التصفح المطلوبة */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#00a2ff]">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/about-us" className="text-slate-300 hover:text-sky-300 text-sm font-medium transition-colors flex items-center gap-2">
                      <span className="text-[#00a2ff]">›</span> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="text-slate-300 hover:text-sky-300 text-sm font-medium transition-colors flex items-center gap-2">
                      <span className="text-[#00a2ff]">›</span> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-slate-300 hover:text-sky-300 text-sm font-medium transition-colors flex items-center gap-2">
                      <span className="text-[#00a2ff]">›</span> Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* العمود الثالث: معلومات التواصل (الهاتف والبريد) */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#00a2ff]">
                  Direct Contact
                </h4>
                <div className="space-y-3 text-sm">
                  <a href={`tel:${whatsappNumber}`} className="flex items-center gap-3 text-slate-300 hover:text-sky-300 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#00a2ff]/15 border border-[#00a2ff]/30 flex items-center justify-center text-sky-400 shrink-0">
                      📞
                    </div>
                    <span>{whatsappNumber}</span>
                  </a>

                  <a href={`mailto:${emailAddress}`} className="flex items-center gap-3 text-slate-300 hover:text-sky-300 transition-colors break-all">
                    <div className="w-8 h-8 rounded-lg bg-[#00a2ff]/15 border border-[#00a2ff]/30 flex items-center justify-center text-sky-400 shrink-0">
                      ✉️
                    </div>
                    <span className="text-xs sm:text-sm">{emailAddress}</span>
                  </a>
                </div>
              </div>

              {/* العمود الرابع: زر الواتساب السريع المتوهج */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#00a2ff]">
                  Instant Chat
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have questions or ready to book? Chat with our travel specialists instantly on WhatsApp.
                </p>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#00a2ff] to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-[0_0_25px_rgba(0,162,255,0.4)] hover:shadow-[0_0_35px_rgba(0,162,255,0.7)] transition-all duration-300 text-sm"
                >
                  <span>Chat on WhatsApp</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* الروابط السفلية فقط بدون أي حقوق نشر */}
        <div className="flex justify-end pt-6 border-t border-blue-950/50 text-xs text-slate-300">
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-sky-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact-us" className="hover:text-sky-300 transition-colors">Contact Us</Link>
            <Link href="/about-us" className="hover:text-sky-300 transition-colors">About Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}