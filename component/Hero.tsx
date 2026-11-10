import Link from 'next/link';

export default function Hero() {
  const whatsappNumber = "00201214968169";
  const whatsappMessage = encodeURIComponent("Hello, I would like to inquire about Travel Friend tours and bookings.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* فيديو الخلفية */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-950/80 via-blue-950/60 to-blue-900/40 z-10" />
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center text-white">
        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-500/20 border border-blue-400/40 text-sky-300 text-sm font-medium mb-6 backdrop-blur-md shadow-lg">
          Your Ultimate Travel Companion ✈️
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Discover Amazing Destinations with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-[#00a2ff] to-blue-400">
            Travel Friend
          </span>
        </h1>

        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-light">
          We offer exceptional travel experiences, organized tours, and reliable booking services to make your dream journey seamless and comfortable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:-translate-y-1 text-lg"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Contact via WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}