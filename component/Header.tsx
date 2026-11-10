"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const whatsappNumber = "00201214968169";
  const emailAddress = "Info@travelfriend-ag.com";
  const whatsappMessage = encodeURIComponent("Hello, I would like to inquire about Travel Friend services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About Us", slug: "about-us" },
    { name: "Privacy Policy", slug: "privacy-policy" },
    { name: "Contact Us", slug: "contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm">
            <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-1.5 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-6 mx-auto sm:mx-0">
          <a href={`tel:${whatsappNumber}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
            <span>📞</span>
            <span className="font-medium">{whatsappNumber}</span>
          </a>
          <a href={`mailto:${emailAddress}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
            <span>✉️</span>
            <span className="font-medium">{emailAddress}</span>
          </a>
        </div>
        <div className="hidden lg:block text-[11px] text-blue-600 font-medium">
          ✈️ 24/7 Travel & Tour Concierge Support across Egypt
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden py-1">
            <Image 
              src="/logo.webp" 
              alt="Travel Friend Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
            Travel Friend
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${whatsappNumber}`}
            className="inline-flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium text-sm py-2.5 px-4 rounded-xl border border-blue-200 transition-all duration-300"
          >
            Call Us
          </a>

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
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${whatsappNumber}`}
            className="sm:hidden p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 text-xs"
            title="Call Us"
          >
            📞
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-blue-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-blue-600 py-2 border-b border-slate-100 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={`tel:${whatsappNumber}`}
              className="flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium text-sm py-3 px-4 rounded-xl border border-blue-200 transition-all"
            >
              📞 Call: {whatsappNumber}
            </a>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm py-3 px-5 rounded-xl shadow-md transition-all"
            >
              💬 Chat on WhatsApp
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}