import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Layers,
  Home as HomeIcon,
  Car,
  Shirt,
  ShieldCheck,
} from "lucide-react";
import team from "./assets/team.png";
import imagecollage from "./assets/imagecollage.webp";
import escrow from "./assets/escrow.webp";
import { Link } from "react-router-dom";




const NAV_LINKS = [
  { label: "Marketplace", href: "/#marketplace" },
  { label: "Shortlets & Hotels", href: "/#stays" },
  { label: "Payments", href: "/#payments" },
];

const CATEGORIES = [
  {
    icon: Layers,
    title: "Aluminium Roofing Sheets",
    desc: "Bulk and retail roofing materials from verified suppliers.",
  },
  {
    icon: Shirt,
    title: "Clothing",
    desc: "Wholesale and retail apparel for importers and exporters.",
  },
  {
    icon: Car,
    title: "Vehicles",
    desc: "Cars listed, inspected, and ready for local or export sale.",
  },
  {
    icon: HomeIcon,
    title: "Shortlets & Hotels",
    desc: "Verified stays booked and paid for securely in one place.",
  },
];

export default function AboutUs() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased">
      {/* ---------------- Header ---------------- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between py-4">
            <a href="#" className="flex items-center gap-2">
              <img src="/public/logo.webp" alt="Pondereth Logo" srcset="" className="size-10" />
              <span className="font-serif text-2xl font-bold tracking-tight text-emerald-800">
                Pondereth
              </span>
              <span className="hidden sm:inline text-[11px] uppercase tracking-widest text-neutral-500 border-l border-neutral-300 pl-2">
                Nigeria Enterprise Ltd
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-neutral-700 hover:text-emerald-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              {/* <a
                href="/contact"
                className="text-sm font-medium text-neutral-700 hover:text-emerald-800 transition-colors"
              >
                Contact Us
              </a> */}
              {/* <a
                href="#get-started"
                className="inline-flex items-center gap-1.5 rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900 transition-colors"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a> */}
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />

              </Link>
            </div>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-neutral-700"
              >
                {link.label}
              </a>
            ))}
            {/* <a
              href="/contact"
              className="block text-sm font-medium text-neutral-700"
            >
              Contact Us
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white"
            >
              Get Started
            </a> */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />

            </Link>
          </div>
        )}
      </header>

      {/* ---------------- Page intro ---------------- */}
      <section className="border-b border-dashed border-neutral-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-14 md:pt-20 md:pb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 border border-emerald-800/30 rounded-full px-3 py-1">
            About Us
          </span>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl font-bold leading-[1.1] text-neutral-900 max-w-2xl">
            Built to make Nigerian trade simpler and safer
          </h1>
          <p className="mt-5 text-lg text-neutral-700 max-w-xl leading-relaxed">
            Pondereth Nigeria Enterprise Limited is a trade and payments
            platform for importers, exporters, and hosts — built so that
            every deal, from a roofing sheet order to a shortlet booking,
            happens with less risk and more trust.
          </p>
        </div>
      </section>

      {/* ---------------- Our Story (image left / text right) ---------------- */}
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full aspect-[4/3] bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden order-2 md:order-1">
              <img
                src={team}
                alt="The Pondereth team at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                Our Story
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-neutral-900">
                Started by people who've felt the friction firsthand
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                {/* Placeholder — replace with your real founding story */}
                Pondereth was founded to solve a problem Nigerian traders
                know well: closing a deal is easy, trusting that both sides
                will follow through is not. We built a platform where
                goods, bookings, and payments move together — so no one
                has to choose between speed and security.
              </p>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Today, Pondereth supports traders across four categories —
                aluminium roofing sheets, clothing, vehicles, and shortlets
                or hotels — with the same principle behind every
                transaction: nothing moves until both sides are protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- What We Do (text left / image right) ---------------- */}
      <section className="bg-neutral-50 border-t border-dashed border-neutral-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                What We Do
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-neutral-900">
                One platform, four categories of trade
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Whether you're sourcing materials, moving vehicles, or
                hosting travelers, Pondereth gives you the same trusted
                foundation to trade on.
              </p>

              <ul className="mt-8 space-y-5">
                {CATEGORIES.map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-800/10">
                      <Icon className="h-5 w-5 text-emerald-800" />
                    </span>
                    <div>
                      <p className="font-serif text-lg font-bold text-neutral-900">
                        {title}
                      </p>
                      <p className="text-sm text-neutral-600">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full aspect-[4/3] bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden">
              <img
                src={imagecollage}
                alt="Examples of goods and stays available on Pondereth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Trust & Payments (image left / text right) ---------------- */}
      <section className="border-t border-dashed border-neutral-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="w-full aspect-[4/3] bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden">
                <img
                  src={escrow}
                  alt="Secure payment processing behind every Pondereth transaction"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:flex h-24 w-24 rotate-[-8deg] items-center justify-center rounded-full border-2 border-double border-emerald-800 bg-white text-center">
                <span className="font-serif text-[10px] font-bold uppercase leading-tight tracking-widest text-emerald-800">
                  Escrow
                  <br />
                  Verified
                </span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                Trust &amp; Payments
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-neutral-900">
                Backed by licensed Nigerian payment rails
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                {/* Placeholder — name your actual payment partner(s) once confirmed */}
                Every payment on Pondereth runs through licensed, regulated
                payment processors, held in escrow until both sides of a
                deal are satisfied. We don't move money ourselves — we
                partner with providers built and trusted for Nigerian
                trade.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-800 shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Every seller and host is identity-verified
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-800 shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Disputes are reviewed by our team before any payout
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA Banner ---------------- */}
      <section className="bg-emerald-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Have questions about how we work?
          </h2>
          <p className="mt-3 text-emerald-100 max-w-xl mx-auto">
            Our team is happy to walk you through it.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 hover:bg-neutral-100 transition-colors"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
