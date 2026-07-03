import { useState } from "react";
import { Menu, X, ArrowRight, Phone, Mail, Send } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.webp";
import support from "./assets/supportpondereth.png";

const NAV_LINKS = [
  { label: "Marketplace", href: "/#marketplace" },
  { label: "Shortlets & Hotels", href: "/#stays" },
  { label: "Payments", href: "/#payments" },
  { label: "About", href: "/about" },
];

const PHONE_NUMBER = "+234 803 638 8461";
const EMAIL_ADDRESS = "chiskylily@gmail.com";

export default function ContactUs() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased">
      {/* ---------------- Header ---------------- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Pondereth Logo" srcset="" className="size-10" />
              <span className="font-serif text-2xl font-bold tracking-tight text-emerald-800">
                Pondereth
              </span>
              <span className="hidden sm:inline text-[11px] uppercase tracking-widest text-neutral-500 border-l border-neutral-300 pl-2">
                Nigeria Enterprise Ltd
              </span>
            </Link>

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
              {/* <Link
            href="/contact"
                className="text-sm font-semibold text-emerald-800"
              >
                Contact Us
              </Link> */}
              {/* <a
                href="#get-started"
                className="inline-flex items-center gap-1.5 rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-900 transition-colors"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a> */}
{/* 
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white"
              >
                Contact Us
              </Link> */}
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
            </Link>
          </div>
        )
        }
      </header >

      {/* ---------------- Page intro ---------------- */}
      < section className="border-b border-dashed border-neutral-300" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-14 md:pt-20 md:pb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 border border-emerald-800/30 rounded-full px-3 py-1">
            Contact Us
          </span>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl font-bold leading-[1.1] text-neutral-900 max-w-2xl">
            We're here to help with your next trade or booking
          </h1>
          <p className="mt-5 text-lg text-neutral-700 max-w-xl leading-relaxed">
            Whether it's a question about a listing, a payment, or a
            shortlet booking, reach our team directly by phone or email.
          </p>
        </div>
      </section >

      {/* ---------------- Contact details + form (image left / info right) ---------------- */}
      < section >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Image side */}
            <div className="w-full aspect-[4/5] md:aspect-auto md:h-full min-h-[420px] bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden">
              <img
                src={support}
                alt="Pondereth support team ready to assist traders and hosts"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info + form side */}
            <div>
              {/* Direct contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 rounded-xl border border-neutral-200 p-5 hover:border-emerald-800 transition-colors"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-800/10">
                    <Phone className="h-5 w-5 text-emerald-800" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      Call Us
                    </p>
                    <p className="mt-1 font-serif text-lg font-bold text-neutral-900">
                      {PHONE_NUMBER}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-start gap-3 rounded-xl border border-neutral-200 p-5 hover:border-emerald-800 transition-colors"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-800/10">
                    <Mail className="h-5 w-5 text-emerald-800" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                     Click to email Us
                    </p>
                    <p className="mt-1 font-serif text-lg font-bold text-neutral-900 break-all">
                      {EMAIL_ADDRESS}
                    </p>
                  </div>
                </a>
              </div>

              {/* Simple contact form */}
              <div className="mt-10 border-t border-dashed border-neutral-300 pt-10">
                <h2 className="font-serif text-2xl font-bold text-neutral-900">
                  Or send us a message
                </h2>
                <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-widest text-neutral-500"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-800/40 focus:border-emerald-800"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-widest text-neutral-500"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-800/40 focus:border-emerald-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-widest text-neutral-500"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="How can we help?"
                      className="mt-2 w-full rounded-md border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-800/40 focus:border-emerald-800"
                    />
                  </div>

                  
                  <a
                   href={`mailto:${EMAIL_ADDRESS}`}
>
                    <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-800 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-900 transition-colors"
                  >
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section >

    </div >
  );
}
