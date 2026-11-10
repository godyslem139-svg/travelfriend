"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactUsPage() {
  const whatsappNumber = "00201214968169";
  const emailAddress = "Info@travelfriend-ag.com";
  
  const whatsappMessage = encodeURIComponent("Hello Travel Friend, I would like to get in touch regarding tour bookings and inquiries.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "Cairo",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", destination: "Cairo", message: "" });
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20 selection:bg-sky-500 selection:text-slate-950">

      <section className="relative overflow-hidden border-b border-blue-900/40 bg-gradient-to-b from-[#0a192f] via-slate-950 to-slate-950 py-20 lg:py-24">
        {/* إضاءة خلفية متوهجة */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00a2ff]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#00a2ff]/15 border border-[#00a2ff]/40 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,162,255,0.25)]">
            Get In Touch
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            We Are Here to Help Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-[#00a2ff] to-blue-500">
              Next Adventure
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100/80 font-light leading-relaxed max-w-2xl mx-auto">
            Have questions about our travel packages, customized itineraries, or group tours? Reach out to our 24/7 concierge team instantly.
          </p>
        </div>
      </section>
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#00a2ff] block">
                Direct Channels
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Let&apos;s Start a Conversation
              </h2>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Choose your preferred way to connect with Travel Friend. Our travel specialists respond within minutes.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              
              <div className="relative group rounded-2xl p-[1px] transition-all">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#25D366] to-[#00a2ff] rounded-2xl blur-md opacity-25 group-hover:opacity-70 transition duration-500" />
                <div className="relative bg-[#071326] backdrop-blur-xl rounded-2xl p-6 border border-blue-900/50 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] text-2xl shrink-0">
                    💬
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">WhatsApp Chat</h4>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold text-white hover:text-sky-300 transition-colors">
                      {whatsappNumber}
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative group rounded-2xl p-[1px] transition-all">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00a2ff] to-blue-600 rounded-2xl blur-md opacity-25 group-hover:opacity-70 transition duration-500" />
                <div className="relative bg-[#071326] backdrop-blur-xl rounded-2xl p-6 border border-blue-900/50 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#00a2ff]/20 border border-[#00a2ff]/40 flex items-center justify-center text-sky-400 text-2xl shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Direct Phone Call</h4>
                    <a href={`tel:${whatsappNumber}`} className="text-base sm:text-lg font-bold text-white hover:text-sky-300 transition-colors">
                      {whatsappNumber}
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative group rounded-2xl p-[1px] transition-all">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00a2ff] to-blue-600 rounded-2xl blur-md opacity-25 group-hover:opacity-70 transition duration-500" />
                <div className="relative bg-[#071326] backdrop-blur-xl rounded-2xl p-6 border border-blue-900/50 flex items-center gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#00a2ff]/20 border border-[#00a2ff]/40 flex items-center justify-center text-sky-400 text-2xl shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Email Support</h4>
                    <a href={`mailto:${emailAddress}`} className="text-sm sm:text-base font-bold text-white hover:text-sky-300 transition-colors break-all">
                      {emailAddress}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-4">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-base"
              >
                <span>Chat Instantly on WhatsApp</span>
              </Link>
            </div>

          </div>

          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00a2ff] via-sky-400 to-blue-600 rounded-3xl blur-md opacity-30" />
            
            <div className="relative bg-[#071326]/95 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-[#00a2ff]/30 shadow-[0_0_40px_rgba(0,162,255,0.15)]">
              
              <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below and our travel consultants will get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-blue-950/60 border border-sky-400/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] text-xl mx-auto">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. We have received your inquiry and will contact you shortly via WhatsApp or email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-950/80 border border-blue-900/60 focus:border-[#00a2ff] rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-slate-950/80 border border-blue-900/60 focus:border-[#00a2ff] rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">Phone / WhatsApp Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+20 123 456 7890"
                        className="w-full bg-slate-950/80 border border-blue-900/60 focus:border-[#00a2ff] rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">Preferred Destination</label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full bg-slate-950/80 border border-blue-900/60 focus:border-[#00a2ff] rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="Cairo">Cairo & Giza Pyramids</option>
                        <option value="Alexandria">Alexandria Coastal Tour</option>
                        <option value="Aswan">Aswan & Nile Cruise</option>
                        <option value="Red Sea">Red Sea Resorts & Diving</option>
                        <option value="Custom">Custom Full Egypt Package</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">Your Message / Itinerary Request</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your travel dates, number of travelers, and specific preferences..."
                      className="w-full bg-slate-950/80 border border-blue-900/60 focus:border-[#00a2ff] rounded-xl py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00a2ff] to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_25px_rgba(0,162,255,0.4)] transition-all text-sm uppercase tracking-wider"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}