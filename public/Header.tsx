import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const whatsappNumber = "00201214968169";
  const whatsappMessage = encodeURIComponent("Hello, I would like to inquire about Travel Friend services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // قائمة العناصر مع الـ slug الخاص بكل صفحة
  const navItems = [
    { name: "About Us", slug: "about-us" },
    { name: "Privacy Policy", slug: "privacy-policy" },
    { name: "Contact Us", slug: "contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a192f]/80 backdrop-blur-md border-b border-blue-900/40 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image 
              src="/logo.webp" 
              alt="Travel Friend Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-sky-400">
            Travel Friend
          </span>
        </Link>

        {/* Navigation Links with Slugs */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="text-sm font-medium text-blue-100 hover:text-sky-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* WhatsApp & Call Actions */}
        <div className="flex items-center gap-3">
          {/* Direct Phone Call Button */}
          <a
            href={`tel:${whatsappNumber}`}
            className="hidden sm:inline-flex items-center justify-center bg-blue-600/30 hover:bg-blue-600/50 text-blue-100 font-medium text-sm py-2.5 px-4 rounded-xl border border-blue-400/30 transition-all duration-300"
          >
            Call Us
          </a>

          {/* WhatsApp Button */}
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm py-2.5 px-5 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp
          </Link>
        </div>

      </div>
    </header>
  );
}