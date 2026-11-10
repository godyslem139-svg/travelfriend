import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className="relative py-24 bg-white text-slate-900 overflow-hidden" id="about-us">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-left">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium backdrop-blur-md">
              About Travel Friend
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
              Your Trusted Partner for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                Unforgettable Journeys
              </span>
            </h2>

            <p className="text-slate-600 text-lg font-light leading-relaxed">
              At <strong className="text-slate-900 font-semibold">Travel Friend</strong>, we turn your travel dreams into reality. Whether you are looking for serene getaways, thrilling adventures, or fully organized tours, we provide top-tier services tailored to make every trip seamless, secure, and memorable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/70 border border-blue-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold mt-0.5">✓</div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Expert Planning</h4>
                  <p className="text-xs text-slate-500">Customized itineraries for every destination.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/70 border border-blue-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold mt-0.5">✓</div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">24/7 Support</h4>
                  <p className="text-xs text-slate-500">Always by your side via WhatsApp and calls.</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </div>

          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] shadow-lg">
              <Image
                src="/about.webp"
                alt="About Travel Friend"
                fill
                className="object-cover transform group-hover:scale-105 transition duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/95 border border-slate-200 backdrop-blur-md p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl">
                  ✈️
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-slate-900">100%</p>
                  <p className="text-xs text-slate-500">Trusted Travel Services</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}