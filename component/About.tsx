import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden" id="about-us">
      {/* خلفية جمالية متناسقة مع الهوية الزرقاء */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* قسم النصوص والمحتوى (تم نقله ليصبح في اليمين للشاشات الكبيرة) */}
          <div className="space-y-6 text-left">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium backdrop-blur-md">
              About Travel Friend
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Your Trusted Partner for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-sky-400">
                Unforgettable Journeys
              </span>
            </h2>

            <p className="text-slate-300 text-lg font-light leading-relaxed">
              At <strong className="text-white font-semibold">Travel Friend</strong>, we turn your travel dreams into reality. Whether you are looking for serene getaways, thrilling adventures, or fully organized tours, we provide top-tier services tailored to make every trip seamless, secure, and memorable.
            </p>

            {/* مميزات سريعة */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-950/30 border border-blue-900/50">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-sky-400 mt-0.5">✓</div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Expert Planning</h4>
                  <p className="text-xs text-slate-400">Customized itineraries for every destination.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-950/30 border border-blue-900/50">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-sky-400 mt-0.5">✓</div>
                <div>
                  <h4 className="font-semibold text-white text-sm">24/7 Support</h4>
                  <p className="text-xs text-slate-400">Always by your side via WhatsApp and calls.</p>
                </div>
              </div>
            </div>

            {/* زر الانتقال أو الاستكشاف */}
            <div className="pt-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>

          </div>

          {/* قسم الصورة (تم نقله ليصبح في اليسار للشاشات الكبيرة) */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-blue-900/50 bg-slate-900 aspect-[4/3]">
              <Image
                src="/about.webp"
                alt="About Travel Friend"
                fill
                className="object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
            {/* بطاقة عائمة تعزز الثقة */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900/90 border border-blue-500/30 backdrop-blur-md p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-sky-400 font-bold text-xl">
                  ✈️
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-white">100%</p>
                  <p className="text-xs text-blue-200">Trusted Travel Services</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}