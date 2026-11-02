"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// ============================================================================
// DATA DEFINITIONS & INTERFACES
// ============================================================================

interface PolicySection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  lastReviewed: string;
  icon: React.ReactNode;
  summary: string;
  paragraphs: string[];
  bulletPoints?: {
    title: string;
    description: string;
  }[];
  callout?: {
    title: string;
    text: string;
    badge: string;
  };
}

interface DataRetentionRow {
  category: string;
  dataTypes: string;
  purpose: string;
  retentionPeriod: string;
  legalBasis: string;
}

interface ThirdPartyPartner {
  name: string;
  role: string;
  location: string;
  safeguardMechanism: string;
  dataShared: string;
}

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function PrivacyPolicyPage() {
  const whatsappNumber = "00201214968169";
  const whatsappMessage = encodeURIComponent(
    "Hello Travel Friend Privacy Team, I have an inquiry regarding my personal data and privacy rights."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // States for Interactive Features
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: true,
    analytics: false,
    marketing: false,
  });
  const [preferencesSaved, setPreferencesSaved] = useState<boolean>(false);

  // Detailed Policy Sections Data
  const policySections: PolicySection[] = [
    {
      id: "introduction",
      number: "01",
      title: "Introduction & Global Scope",
      subtitle: "Our foundational commitment to safeguarding your digital and travel footprint.",
      lastReviewed: "November 2026",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      summary:
        "Travel Friend operates as a premier travel companion and booking facilitator. This Privacy Policy governs how we collect, process, store, and protect your personal information across our web platform, mobile communications, and partner networks.",
      paragraphs: [
        "Welcome to Travel Friend ('we', 'our', or 'us'). We recognize that planning and booking travel involves entrusting us with sensitive personal, identity, and itinerary details. Protecting your privacy is not merely a legal compliance requirement for us—it is a core pillar of the trust we build with every traveler.",
        "This comprehensive Privacy Policy applies to all visitors, registered users, and corporate clients who access our website, interact with our customer support agents via WhatsApp or telephone, or book guided tours, accommodation, transportation, and travel packages through our platform.",
        "By accessing our platform or submitting your personal data to our travel specialists, you acknowledge that you have read and understood the practices described in this policy. We regularly update our privacy framework to align with international data protection standards, including the EU General Data Protection Regulation (GDPR), the Egyptian Personal Data Protection Law (Law No. 151 of 2020), and the California Consumer Privacy Act (CCPA).",
      ],
      callout: {
        title: "Transparency Guarantee",
        text: "We never sell your personal contact lists or passport details to unauthorized third-party data brokers under any circumstances.",
        badge: "Core Principle",
      },
    },
    {
      id: "information-collection",
      number: "02",
      title: "Information We Collect",
      subtitle: "Detailed breakdown of personal, travel, and technical data we gather.",
      lastReviewed: "November 2026",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      summary:
        "To execute seamless travel arrangements, we collect information directly from you, automatically through your device, and from authorized travel partners.",
      paragraphs: [
        "The nature of travel coordination requires accurate identification and communication records. Depending on the specific services you request—such as domestic excursions, international flight reservations, hotel check-ins, or VIP airport transfers—we collect distinct categories of information.",
        "When you initiate a conversation with us via WhatsApp (+20 121 496 8169) or submit an inquiry on our website, our systems log your communication metadata to ensure continuity of service and rapid response times from our travel consultants.",
      ],
      bulletPoints: [
        {
          title: "Identity & Official Documentation Data",
          description:
            "Full legal name (as shown on passport or national ID), date of birth, nationality, gender, passport number, passport issue and expiration dates, and visa documentation required by aviation and hospitality authorities.",
        },
        {
          title: "Contact & Communication Details",
          description:
            "Primary email address, WhatsApp phone number, emergency contact person details, billing address, and records of correspondence with our support team.",
        },
        {
          title: "Itinerary & Travel Preferences",
          description:
            "Flight numbers, arrival and departure timestamps, hotel room preferences, dietary requirements, accessibility or mobility assistance needs, and bespoke excursion interests.",
        },
        {
          title: "Financial & Transaction Records",
          description:
            "Payment confirmation tokens, bank transfer receipts, billing summaries, and currency preferences. Note: Full credit card numbers and CVV codes are processed exclusively via PCI-DSS Level 1 certified payment gateways.",
        },
        {
          title: "Technical & Device Telemetry",
          description:
            "IP address, browser type and version, operating system, referral URLs, time zone settings, page interaction metrics, and performance logs collected via Next.js edge telemetry.",
        },
      ],
    },
    {
      id: "how-we-use-data",
      number: "03",
      title: "How We Use Your Information",
      subtitle: "Operational, legal, and service-enhancement purposes for processing data.",
      lastReviewed: "November 2026",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      summary:
        "Every piece of data we process is tied to a specific, lawful purpose aimed at delivering safe, reliable, and personalized travel experiences.",
      paragraphs: [
        "We process your personal information strictly where we have a valid legal basis to do so. In the vast majority of cases, our processing is necessary for the performance of a contract with you (fulfilling your travel booking) or taking steps at your request prior to entering into a contract (providing quotes and custom itineraries).",
        "Furthermore, we use aggregated, non-identifiable analytics to optimize our website speed, video streaming performance, and destination guides so that future travelers enjoy a smooth browsing experience.",
      ],
      bulletPoints: [
        {
          title: "Reservation & Voucher Issuance",
          description:
            "Transmitting required passenger manifests to airlines, resorts, cruise operators, desert safari guides, and local transport fleets to lock in your reservations.",
        },
        {
          title: "Real-Time Travel Updates & Concierge Support",
          description:
            "Sending instant WhatsApp alerts regarding pickup times, gate changes, weather advisories, tour guide contact cards, and emergency itinerary adjustments.",
        },
        {
          title: "Regulatory & Customs Compliance",
          description:
            "Fulfilling mandatory reporting obligations to tourism ministries, port authorities, border security agencies, and tax departments.",
        },
        {
          title: "Security & Fraud Prevention",
          description:
            "Verifying identity during high-value bookings, preventing unauthorized account access, and protecting our platform against automated cyber threats.",
        },
      ],
    },
    {
      id: "data-sharing",
      number: "04",
      title: "Information Sharing & Third-Party Disclosures",
      subtitle: "How and when we share necessary data with trusted hospitality and transport partners.",
      lastReviewed: "November 2026",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      summary:
        "Travel cannot happen in isolation. We share only the minimum required data with vetted suppliers who directly fulfill segments of your journey.",
      paragraphs: [
        "When you book a tour or travel package with Travel Friend, we act as an intermediary between you and the physical service providers (such as hotels, diving centers, yacht charters, and licensed tour operators). We only transmit the specific data fields required by those suppliers to honor your booking.",
        "All third-party service providers and technology vendors working with Travel Friend are bound by strict Data Processing Agreements (DPAs) that prohibit them from using your personal information for their own independent marketing purposes.",
      ],
      callout: {
        title: "WhatsApp & Meta Communications",
        text: "When you choose to communicate with us via WhatsApp (+20 121 496 8169), your messages are protected by end-to-end encryption in transit and governed alongside Meta Platforms' privacy infrastructure.",
        badge: "Encrypted Channel",
      },
    },
    {
      id: "cookies-tracking",
      number: "05",
      title: "Cookies & Tracking Technologies",
      subtitle: "Managing browser storage, session tokens, and analytical beacons.",
      lastReviewed: "November 2026",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      summary:
        "We use lightweight cookies and local storage to keep our website fast, remember your language and currency choices, and understand traffic patterns.",
      paragraphs: [
        "Cookies are small text files placed on your computer or mobile device when you visit a website. At Travel Friend, we prioritize a clean, high-performance web architecture and avoid intrusive cross-site tracking scripts.",
        "You can customize your cookie preferences at any time using the interactive Cookie Control Panel located below on this page, or by adjusting your browser settings to block or delete cookies.",
      ],
      bulletPoints: [
        {
          title: "Strictly Necessary Cookies (Always Active)",
          description:
            "Required for core site functionality, security routing, load balancing, and saving your privacy consent preferences.",
        },
        {
          title: "Functional & Preference Cookies",
          description:
            "Remember your preferred departure city, currency display, and recently viewed travel packages so you do not have to re-enter them.",
        },
        {
          title: "Performance & Analytics Cookies",
          description:
            "Help us measure page load speeds, video playback smoothness, and popular destination pages using anonymized telemetry.",
        },
      ],
    },
    {
      id: "data-security",
      number: "06",
      title: "Data Security & Encryption Architecture",
      subtitle: "Technical and organizational safeguards protecting your records.",
      lastReviewed: "November 2026",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      summary:
        "We deploy enterprise-grade encryption, strict access controls, and continuous infrastructure monitoring to defend your personal data.",
      paragraphs: [
        "We implement robust technical and organizational security measures designed to protect your personal data against accidental loss, unauthorized access, alteration, or disclosure. All data transmitted between your web browser and our Next.js servers is encrypted using Transport Layer Security (TLS 1.3).",
        "Internally, access to customer booking files and passport details is restricted on a strict 'Zero-Trust, Need-to-Know' basis. Only authorized reservation specialists assigned to your itinerary can view your travel documents, and all access events are logged and audited.",
        "In the unlikely event of a data security incident that poses a risk to your rights and freedoms, we have established an Incident Response Protocol to notify affected travelers and relevant data protection authorities within 72 hours.",
      ],
    },
    {
      id: "your-privacy-rights",
      number: "07",
      title: "Your Data Protection Rights",
      subtitle: "Exercising control over your personal records under global privacy laws.",
      lastReviewed: "November 2026",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      summary:
        "You own your personal data. Regardless of your nationality or residence, we grant all Travel Friend clients comprehensive rights over their information.",
      paragraphs: [
        "Under applicable privacy legislation (including GDPR, Egyptian Data Protection Law, and CCPA), you have specific legal rights regarding the personal information we hold about you. We do not charge any fee to exercise your standard privacy rights, and we aim to respond to all verified requests within 14 business days.",
      ],
      bulletPoints: [
        {
          title: "Right of Access & Data Portability",
          description:
            "You have the right to request a complete, machine-readable copy of the personal data and booking history we hold about you.",
        },
        {
          title: "Right to Rectification",
          description:
            "If your passport number is renewed, your name is misspelled, or your contact number changes, you can request immediate correction.",
        },
        {
          title: "Right to Erasure ('Right to be Forgotten')",
          description:
            "You may request the permanent deletion of your personal data once your trip is completed, subject to mandatory tax and legal retention periods.",
        },
        {
          title: "Right to Restrict or Object to Processing",
          description:
            "You can ask us to suspend the processing of your data or opt out of promotional travel updates at any moment.",
        },
      ],
    },
    {
      id: "childrens-privacy",
      number: "08",
      title: "Family Bookings & Children's Privacy",
      subtitle: "Special safeguards for minors traveling with parents or legal guardians.",
      lastReviewed: "November 2026",
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      summary:
        "We do not knowingly solicit data directly from minors under 18. Children's travel details are processed strictly with parental consent.",
      paragraphs: [
        "Travel Friend's website and booking services are not directed at children under the age of 18. We do not knowingly allow minors to create independent accounts or book travel services without adult supervision.",
        "When we collect personal information regarding a minor (such as age, birth certificate, or passport details for family hotel rooms, child flight tickets, or excursion age-verification), we do so exclusively through the parent or legal guardian who initiates the booking. If you believe a minor has submitted personal data to us without parental consent, please contact us immediately so we can purge the record.",
      ],
    },
  ];

  // Data Retention Schedule Table Data
  const retentionSchedule: DataRetentionRow[] = [
    {
      category: "Active Booking & Itinerary Files",
      dataTypes: "Full name, contact number, hotel & tour vouchers, pickup locations",
      purpose: "Trip execution, customer support, and post-trip feedback",
      retentionPeriod: "24 Months after trip completion",
      legalBasis: "Contractual Necessity (Art. 6(1)(b) GDPR)",
    },
    {
      category: "Passport & Visa Copies",
      dataTypes: "Scanned passport bio-page, national ID, visa stamps, permit numbers",
      purpose: "Tourism police permits, aviation manifests, hotel check-in rules",
      retentionPeriod: "90 Days after trip completion",
      legalBasis: "Legal Obligation & Vital Interests",
    },
    {
      category: "Financial & Accounting Invoices",
      dataTypes: "Billing receipts, payment references, tax invoices, refund records",
      purpose: "Statutory tax audits, financial reconciliation, dispute resolution",
      retentionPeriod: "5 to 7 Years (Statutory Tax Law)",
      legalBasis: "Statutory Legal Compliance (Art. 6(1)(c) GDPR)",
    },
    {
      category: "WhatsApp & Support Chat Logs",
      dataTypes: "Inquiry history, voice note transcripts, itinerary customization requests",
      purpose: "Quality assurance, dispute verification, repeat traveler convenience",
      retentionPeriod: "18 Months from last interaction",
      legalBasis: "Legitimate Business Interests",
    },
    {
      category: "Web Telemetry & Server Logs",
      dataTypes: "Anonymized IP addresses, browser headers, error logs, cookie tokens",
      purpose: "Cybersecurity monitoring, DDoS mitigation, site speed optimization",
      retentionPeriod: "30 to 180 Days",
      legalBasis: "Security & Legitimate Interests",
    },
  ];

  // Third-Party Partners Table Data
  const thirdPartyPartners: ThirdPartyPartner[] = [
    {
      name: "Hospitality & Resort Partners",
      role: "Accommodation & Check-in",
      location: "Egypt & Destination Countries",
      safeguardMechanism: "Supplier Confidentiality Clauses",
      dataShared: "Guest names, arrival/departure dates, room preferences",
    },
    {
      name: "Licensed Excursion & Fleet Operators",
      role: "Ground Transport, Yachts & Guided Tours",
      location: "Destination Regions",
      safeguardMechanism: "Tourism Authority Licensing & DPAs",
      dataShared: "Passenger manifest, nationality, pickup coordinates, phone number",
    },
    {
      name: "Cloud & Edge Hosting (Vercel / Cloudflare)",
      role: "Web Application Delivery & CDN Security",
      location: "Global Edge Network (EU/US)",
      safeguardMechanism: "Standard Contractual Clauses (SCCs) & ISO 27001",
      dataShared: "Encrypted HTTP requests, IP addresses, TLS session identifiers",
    },
    {
      name: "Meta Platforms (WhatsApp Business)",
      role: "Direct Concierge Communication",
      location: "Global Infrastructure",
      safeguardMechanism: "End-to-End Encryption & Data Privacy Framework",
      dataShared: "Phone number, chat messages, shared itinerary documents",
    },
  ];

  // Interactive FAQ Data
  const faqItems: FaqItem[] = [
    {
      category: "Documents & Passports",
      question: "Why does Travel Friend ask for a copy of my passport for certain excursions?",
      answer:
        "In many popular travel destinations (especially across Egypt for marine trips, domestic flights, and inter-governorate desert safaris), local Tourism Police and Maritime Port Authorities mandate passenger manifests containing passport or national ID details prior to issuing departure permits. We purge these copies 90 days after your trip concludes.",
    },
    {
      category: "WhatsApp Privacy",
      question: "Is it safe to send my booking details via WhatsApp to +20 121 496 8169?",
      answer:
        "Yes. WhatsApp utilizes industry-standard end-to-end encryption, meaning messages and documents sent between your device and our official Travel Friend business device cannot be intercepted in transit. Once received, our team stores your itinerary in secured, access-controlled reservation folders.",
    },
    {
      category: "Data Deletion",
      question: "How can I delete all my personal data after my vacation ends?",
      answer:
        "You can submit a 'Right to Erasure' request at any time by messaging us on WhatsApp or calling our support line. We will permanently erase your profile, chat logs, and travel preferences within 14 business days, retaining only anonymized accounting invoices required by tax law.",
    },
    {
      category: "Marketing & Spam",
      question: "Will I receive unsolicited promotional messages on my phone?",
      answer:
        "No. We strictly use your phone number to coordinate your active inquiry or confirmed booking. We only send seasonal travel deals if you explicitly opt in, and you can reply 'STOP' at any time to opt out immediately.",
    },
  ];

  // Filter sections based on live search input
  const filteredSections = policySections.filter((section) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchTitle = section.title.toLowerCase().includes(q);
    const matchSummary = section.summary.toLowerCase().includes(q);
    const matchParagraphs = section.paragraphs.some((p) => p.toLowerCase().includes(q));
    const matchBullets = section.bulletPoints?.some(
      (b) => b.title.toLowerCase().includes(q) || b.description.toLowerCase().includes(q)
    );
    return matchTitle || matchSummary || matchParagraphs || matchBullets;
  });

  // Scroll Spy Effect for Sticky Table of Contents
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const section of policySections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers for Cookie Toggles
  const handleToggleCookie = (key: "functional" | "analytics" | "marketing") => {
    setPreferencesSaved(false);
    setCookiePreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSavePreferences = () => {
    setPreferencesSaved(true);
    setTimeout(() => setPreferencesSaved(false), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-20 selection:bg-sky-500 selection:text-slate-950">
      {/* =====================================================================
          1. HERO BANNER SECTION
      ===================================================================== */}
      <section className="relative overflow-hidden border-b border-blue-900/40 bg-gradient-to-b from-[#0a192f] via-slate-950 to-slate-950 py-20 lg:py-28">
        {/* Decorative Ambient Blue Glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/15 border border-blue-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Legal & Trust Center • Travel Friend
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Privacy Policy &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-300 to-blue-500">
                Data Protection
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100/80 font-light leading-relaxed mb-8">
              At <strong className="text-white font-semibold">Travel Friend</strong>, your peace of mind starts long before you board your flight. Explore how we protect your personal information, travel documents, and digital privacy with industry-leading security standards.
            </p>

            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-blue-200/90">
              <div className="flex items-center gap-2 bg-blue-950/50 border border-blue-800/50 px-4 py-2.5 rounded-xl">
                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Effective Date: November 2, 2026</span>
              </div>

              <div className="flex items-center gap-2 bg-blue-950/50 border border-blue-800/50 px-4 py-2.5 rounded-xl">
                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>GDPR & Egyptian Law 151 Compliant</span>
              </div>

              <div className="flex items-center gap-2 bg-blue-950/50 border border-blue-800/50 px-4 py-2.5 rounded-xl">
                <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>TLS 1.3 End-to-End Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. QUICK PRIVACY HIGHLIGHTS BAR
      ===================================================================== */}
      <section className="border-b border-blue-900/30 bg-[#071120]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-blue-900/40 hover:border-sky-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-sky-400 font-bold mb-3">
                01
              </div>
              <h3 className="text-base font-bold text-white mb-1">Zero Data Selling</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We never sell, rent, or trade your personal contact details or travel history to third-party advertisers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 border border-blue-900/40 hover:border-sky-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-sky-400 font-bold mb-3">
                02
              </div>
              <h3 className="text-base font-bold text-white mb-1">Minimal Data Sharing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We only share required booking manifests with the specific hotels, airlines, or tour operators fulfilling your trip.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 border border-blue-900/40 hover:border-sky-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-sky-400 font-bold mb-3">
                03
              </div>
              <h3 className="text-base font-bold text-white mb-1">Document Auto-Purge</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Scanned passport or ID copies required for local travel permits are automatically purged 90 days post-trip.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 border border-blue-900/40 hover:border-sky-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-sky-400 font-bold mb-3">
                04
              </div>
              <h3 className="text-base font-bold text-white mb-1">24/7 Human Support</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Exercise your data access or deletion rights anytime by messaging our privacy team directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. MAIN CONTENT & STICKY SIDEBAR LAYOUT
      ===================================================================== */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDEBAR: Sticky Navigation & Search */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Search Box inside Policy */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-blue-900/50 backdrop-blur-md">
              <label htmlFor="policy-search" className="block text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
                Search Privacy Policy
              </label>
              <div className="relative">
                <input
                  id="policy-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. passport, cookies, WhatsApp..."
                  className="w-full bg-slate-950 border border-blue-800/60 focus:border-sky-400 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
                <svg
                  className="w-4 h-4 text-slate-400 absolute left-3.5 top-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-2.5 text-xs text-sky-400 hover:text-sky-300"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Table of Contents */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-blue-900/50 backdrop-blur-md">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-200 mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-1.5">
                {policySections.map((sec) => {
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={() => setActiveSection(sec.id)}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600/30 to-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                      }`}
                    >
                      <span className={`text-xs font-mono ${isActive ? "text-sky-400 font-bold" : "text-slate-500"}`}>
                        {sec.number}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </a>
                  );
                })}
                <a
                  href="#retention-schedule"
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all"
                >
                  <span className="text-xs font-mono text-slate-500">09</span>
                  <span className="truncate">Data Retention Schedule</span>
                </a>
                <a
                  href="#cookie-manager"
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all"
                >
                  <span className="text-xs font-mono text-slate-500">10</span>
                  <span className="truncate">Interactive Cookie Controls</span>
                </a>
                <a
                  href="#privacy-faq"
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all"
                >
                  <span className="text-xs font-mono text-slate-500">11</span>
                  <span className="truncate">Privacy FAQs</span>
                </a>
              </nav>
            </div>

            {/* Direct Privacy Officer Contact Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0a192f] via-[#1e3a8a]/50 to-slate-900 border border-blue-500/30 shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300 mb-4">
                🛡️
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Need Immediate Assistance?
              </h4>
              <p className="text-xs text-blue-100/80 leading-relaxed mb-5">
                Our Data Protection & Support Specialists are available directly via WhatsApp or telephone to help you manage your booking data.
              </p>
              <div className="space-y-2.5">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs py-3 px-4 rounded-xl shadow-md transition-all"
                >
                  <span>WhatsApp Privacy Desk</span>
                </Link>
                <a
                  href={`tel:${whatsappNumber}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600/30 hover:bg-blue-600/50 text-blue-100 font-medium text-xs py-2.5 px-4 rounded-xl border border-blue-400/30 transition-all"
                >
                  <span>Call: +20 121 496 8169</span>
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN: Detailed Policy Articles, Tables & Interactive Tools */}
          <div className="lg:col-span-8 space-y-12">
            {/* Render Filtered Sections */}
            {filteredSections.length === 0 ? (
              <div className="p-12 rounded-2xl bg-slate-900/60 border border-blue-900/40 text-center">
                <p className="text-lg font-semibold text-white mb-2">
                  No matching policy clauses found for &ldquo;{searchQuery}&rdquo;
                </p>
                <p className="text-sm text-slate-400 mb-6">
                  Try searching for another term like &ldquo;passport&rdquo;, &ldquo;cookies&rdquo;, or &ldquo;WhatsApp&rdquo;.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-2.5 px-6 rounded-xl transition-colors"
                >
                  Reset Search Filter
                </button>
              </div>
            ) : (
              filteredSections.map((section) => (
                <article
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-blue-900/40 hover:border-blue-800/70 transition-all shadow-lg"
                >
                  {/* Section Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-blue-900/40">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                        {section.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
                            Section {section.number}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="text-xs text-slate-400">
                            Reviewed {section.lastReviewed}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
                          {section.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  {/* Executive Summary Box */}
                  <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-800/40 mb-6">
                    <p className="text-xs uppercase tracking-wider text-sky-400 font-bold mb-1">
                      Key Summary
                    </p>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      {section.summary}
                    </p>
                  </div>

                  {/* Detailed Paragraphs */}
                  <div className="space-y-4 text-slate-300 text-base leading-relaxed font-light">
                    {section.paragraphs.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Structured Bullet Points */}
                  {section.bulletPoints && (
                    <div className="mt-8 grid grid-cols-1 gap-4">
                      {section.bulletPoints.map((item, bIdx) => (
                        <div
                          key={bIdx}
                          className="p-4 rounded-2xl bg-slate-950/70 border border-blue-900/30 flex items-start gap-3.5"
                        >
                          <div className="w-6 h-6 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 text-xs font-bold shrink-0 mt-0.5">
                            ✓
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-white mb-1">
                              {item.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlight Callout Box */}
                  {section.callout && (
                    <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-blue-900/40 to-sky-900/20 border border-sky-400/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-400/20 text-sky-300 mb-2">
                          {section.callout.badge}
                        </span>
                        <h4 className="text-base font-bold text-white mb-1">
                          {section.callout.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-blue-100/90">
                          {section.callout.text}
                        </p>
                      </div>
                    </div>
                  )}
                </article>
              ))
            )}

            {/* =================================================================
                SECTION 09: DATA RETENTION & THIRD-PARTY TABLES
            ================================================================= */}
            <div
              id="retention-schedule"
              className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-blue-900/40 shadow-lg space-y-8"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
                  Section 09 • Governance Schedules
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                  Data Retention & Authorized Partners Schedule
                </h2>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including satisfying legal, accounting, or reporting requirements. Below is our transparent retention matrix.
                </p>
              </div>

              {/* Retention Table */}
              <div className="overflow-x-auto rounded-2xl border border-blue-900/50">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-blue-950/70 text-sky-300 text-xs uppercase tracking-wider border-b border-blue-900/50">
                      <th className="py-3.5 px-4 font-bold">Data Category</th>
                      <th className="py-3.5 px-4 font-bold">Specific Records</th>
                      <th className="py-3.5 px-4 font-bold">Retention Period</th>
                      <th className="py-3.5 px-4 font-bold">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-900/30 text-xs sm:text-sm bg-slate-950/50">
                    {retentionSchedule.map((row, idx) => (
                      <tr key={idx} className="hover:bg-blue-950/20 transition-colors">
                        <td className="py-4 px-4 font-semibold text-white">{row.category}</td>
                        <td className="py-4 px-4 text-slate-300">{row.dataTypes}</td>
                        <td className="py-4 px-4">
                          <span className="inline-block px-2.5 py-1 rounded-lg bg-blue-500/15 border border-blue-400/30 text-sky-300 font-medium text-xs">
                            {row.retentionPeriod}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-400">{row.legalBasis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Sub-table: Third Party Disclosures */}
              <div className="pt-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  Authorized Service Providers & Cross-Border Safeguards
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-4">
                  Overview of third-party categories that receive limited booking data to execute your travel itinerary.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-blue-900/50">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-blue-950/70 text-sky-300 text-xs uppercase tracking-wider border-b border-blue-900/50">
                        <th className="py-3.5 px-4 font-bold">Partner Category</th>
                        <th className="py-3.5 px-4 font-bold">Operational Role</th>
                        <th className="py-3.5 px-4 font-bold">Data Shared</th>
                        <th className="py-3.5 px-4 font-bold">Protection Safeguard</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-blue-900/30 text-xs sm:text-sm bg-slate-950/50">
                      {thirdPartyPartners.map((partner, idx) => (
                        <tr key={idx} className="hover:bg-blue-950/20 transition-colors">
                          <td className="py-4 px-4 font-semibold text-white">{partner.name}</td>
                          <td className="py-4 px-4 text-slate-300">{partner.role}</td>
                          <td className="py-4 px-4 text-slate-300">{partner.dataShared}</td>
                          <td className="py-4 px-4 text-sky-300">{partner.safeguardMechanism}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* =================================================================
                SECTION 10: INTERACTIVE COOKIE CONSENT MANAGER
            ================================================================= */}
            <div
              id="cookie-manager"
              className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a192f] to-slate-900 border border-sky-500/30 shadow-xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-900/50 pb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
                    Section 10 • Live Preference Center
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    Interactive Cookie & Privacy Manager
                  </h2>
                </div>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold">
                  Instant Browser Sync
                </span>
              </div>

              <p className="text-sm text-blue-100/80 leading-relaxed">
                Customize how Travel Friend uses cookies and local storage on your current browser. Essential cookies cannot be disabled as they are required for security and core navigation.
              </p>

              <div className="space-y-4">
                {/* Essential Cookies */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-blue-900/40 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">Strictly Necessary Cookies</h4>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-600/30 text-sky-300">
                        Always Active
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Required for page navigation, security firewalls, and saving your privacy preferences.
                    </p>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-semibold">
                    Locked
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-blue-900/40 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">Functional & Itinerary Preferences</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Remembers your preferred language, currency, and recently viewed travel destinations.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleToggleCookie("functional")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      cookiePreferences.functional
                        ? "bg-sky-500 text-slate-950 shadow-md"
                        : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                    }`}
                  >
                    {cookiePreferences.functional ? "Enabled" : "Disabled"}
                  </button>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-blue-900/40 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">Anonymized Performance Analytics</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Helps us optimize video streaming speeds and identify broken links without identifying you personally.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleToggleCookie("analytics")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      cookiePreferences.analytics
                        ? "bg-sky-500 text-slate-950 shadow-md"
                        : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                    }`}
                  >
                    {cookiePreferences.analytics ? "Enabled" : "Disabled"}
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-blue-900/40 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-white">Personalized Travel Offers</h4>
                    <p className="text-xs text-slate-400 mt-1">
                      Allows us to display relevant seasonal tour packages matching your destination interests.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleToggleCookie("marketing")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      cookiePreferences.marketing
                        ? "bg-sky-500 text-slate-950 shadow-md"
                        : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                    }`}
                  >
                    {cookiePreferences.marketing ? "Enabled" : "Disabled"}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={handleSavePreferences}
                  className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-sm py-3 px-6 rounded-xl shadow-lg transition-all"
                >
                  Save My Privacy Preferences
                </button>
                {preferencesSaved && (
                  <span className="text-xs font-semibold text-sky-400 flex items-center gap-1.5">
                    ✓ Your cookie preferences have been updated for this session.
                  </span>
                )}
              </div>
            </div>

            {/* =================================================================
                SECTION 11: INTERACTIVE PRIVACY FAQ ACCORDION
            ================================================================= */}
            <div
              id="privacy-faq"
              className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-blue-900/40 shadow-lg space-y-6"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-sky-400">
                  Section 11 • Common Questions
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  Frequently Asked Privacy Questions
                </h2>
              </div>

              <div className="space-y-3">
                {faqItems.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="rounded-2xl bg-slate-950/70 border border-blue-900/40 overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-blue-950/20 transition-colors"
                      >
                        <div>
                          <span className="text-[11px] font-mono uppercase text-sky-400 block mb-1">
                            {faq.category}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-white">
                            {faq.question}
                          </h4>
                        </div>
                        <span className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-sky-400 font-bold shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-blue-900/30">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =================================================================
                BOTTOM CTA: EXERCISE YOUR DATA RIGHTS
            ================================================================= */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0a192f] via-[#1e3a8a]/80 to-[#0284c7]/40 border border-sky-400/30 text-center space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Have Questions About Your Personal Data?
              </h3>
              <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
                Whether you want to request a copy of your travel records, update your passport details, or ask a question about our security practices, our team is ready to help immediately.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <span>Chat on WhatsApp (+20 121 496 8169)</span>
                </Link>
                <Link
                  href="/"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-600/30 hover:bg-blue-600/50 text-white font-semibold py-4 px-8 rounded-xl border border-blue-400/30 transition-all"
                >
                  Return to Home Page
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}