import { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Truck,
  Home as HomeIcon,
  Lock,
} from "lucide-react";
import imagecollage from "./assets/imagecollage.webp";
import ponderethhero from "./assets/ponderethhero.webp";
import trader from "./assets/trader.png";
import escrow from "./assets/escrow.webp";
import logo from "./assets/logo.webp"
import listings from "./assets/listings.webp";
import { Link } from "react-router-dom";


const NAV_LINKS = [
  { label: "Marketplace", href: "#marketplace" },
  { label: "Shortlets & Hotels", href: "#stays" },
  { label: "Payments", href: "#payments" },
  { label: "About", href: "#trust" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased">
      {/* ---------------- Header ---------------- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between py-4">
            <a href="#" className="flex items-center gap-2">
              <img src={logo} alt="Pondereth Logo" srcset="" className="size-10" />
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
                href="#login"
                className="text-sm font-medium text-neutral-700 hover:text-emerald-800 transition-colors"
              >
                Sign in
              </a>
              <a
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
            <div className="pt-2 flex flex-col gap-3">
              {/* <a href="#login" className="text-sm font-medium text-neutral-700">
                Sign in
              </a> */}
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
                <ArrowRight className="h-4 w-4" />

              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 border border-emerald-800/30 rounded-full px-3 py-1">
              Trade &amp; Payments Platform
            </span>
            <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-neutral-900">
              Move goods. Move money.{" "}
              <span className="text-emerald-800">One trusted platform</span>{" "}
              for Nigerian trade.
            </h1>
            <p className="mt-6 text-lg text-neutral-700 max-w-2xl leading-relaxed">
              Pondereth connects importers, exporters, and hosts across
              Nigeria — buy and sell aluminium roofing sheets, clothing, and
              vehicles, book verified shortlets and hotels, and settle every
              transaction with escrow-backed payments you can trust.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              {/* <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-800 px-6 py-3.5 text-sm font-semibold text-white hover:bg-emerald-900 transition-colors"
              >
                Start Trading
                <ArrowRight className="h-4 w-4" />
              </a> */}
              <a
                href="#payments"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-blue-900 px-6 py-3.5 text-sm font-semibold text-blue-900 hover:bg-blue-900 hover:text-white transition-colors"
              >
                See How Payments Work
              </a>
            </div>

            <p className="mt-8 text-xs uppercase tracking-widest text-neutral-500">
              Backed by licensed Nigerian payment rails
            </p>
          </div>
        </div>

        {/* Hero image */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
          <div className="w-full aspect-[16/7] bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden">
            <img
              src={ponderethhero}
              alt="Nigerian importers and exporters trading goods on the Pondereth platform"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ---------------- Section: Marketplace (image left / text right) ---------------- */}
      <section id="marketplace" className="border-t border-dashed border-neutral-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full aspect-[4/3] bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden order-2 md:order-1">
              <img
                src={imagecollage}
                alt="Aluminium roofing sheets, clothing, and vehicles listed for sale"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                Marketplace
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-neutral-900">
                Buy and sell the goods that move Nigeria's economy
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                From aluminium roofing sheets and wholesale clothing to
                vehicles ready for export, Pondereth gives buyers and sellers
                a single place to list, negotiate, and close deals — with
                every listing tied to a verified trader.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-emerald-800 shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Track goods from listing to delivery, across every category
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-800 shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Every seller is identity-verified before they can list
                  </span>
                </li>
              </ul>
              {/* <a
                href="#marketplace-browse"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-900"
              >
                Browse the marketplace
                <ArrowRight className="h-4 w-4" />
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Section: Shortlets & Hotels (text left / image right) ---------------- */}
      <section id="stays" className="bg-neutral-50 border-t border-dashed border-neutral-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                Stays
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-neutral-900">
                Book verified shortlets and hotels, no surprises at check-in
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Hosts list real, verified properties — from short-let
                apartments to full hotels — and every booking is confirmed
                instantly, with payment held securely until you check in.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <HomeIcon className="h-5 w-5 text-emerald-800 shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Verified hosts and photos that match the property
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-emerald-800 shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Payment released to the host only after you check in
                  </span>
                </li>
              </ul>
              {/* <a
                href="#stays-browse"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-900"
              >
                Find a shortlet or hotel
                <ArrowRight className="h-4 w-4" />
              </a> */}
            </div>
            <div className="w-full aspect-[4/3] bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden">
              <img
                src={listings}
                alt="A verified shortlet apartment listed on Pondereth"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Section: Payments / Escrow (image left / text right) ---------------- */}
      <section id="payments" className="border-t border-dashed border-neutral-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="w-full aspect-[4/3] bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden">
                <img
                  src={escrow}
                  alt="Secure escrow payment confirmation on the Pondereth platform"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Signature element: manifest-style verification stamp */}
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
                Payments
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-neutral-900">
                Your money is protected until the deal is done
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Every transaction on Pondereth — a roofing sheet order, a car
                sale, a shortlet booking — runs through escrow-backed
                payments on trusted Nigerian rails. Funds are only released
                once both sides confirm the deal is complete.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-emerald-800 shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Funds held securely until goods or stays are confirmed
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-emerald-800 shrink-0 mt-0.5" />
                  <span className="text-neutral-700">
                    Disputes reviewed before any payout is released
                  </span>
                </li>
              </ul>
              {/* <a
                href="#payments-learn-more"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 hover:text-blue-950"
              >
                Learn how payments work
                <ArrowRight className="h-4 w-4" />
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Section: Trust / Stats (text left / image right) ---------------- */}
      <section id="trust" className="bg-neutral-50 border-t border-dashed border-neutral-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
                Trust
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-bold text-neutral-900">
                Built for Nigerian traders, by people who understand the risk
              </h2>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                Import and export trade runs on trust as much as logistics.
                Pondereth was built to remove the guesswork — verified
                counterparties, transparent pricing, and payments that don't
                move until both sides are satisfied.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-6">
                <div>
                  <p className="font-serif text-2xl md:text-3xl font-bold text-emerald-800">
                    4
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    Trade categories
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl md:text-3xl font-bold text-emerald-800">
                    100%
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    Escrow-backed transactions
                  </p>
                </div>
                <div>
                  <p className="font-serif text-2xl md:text-3xl font-bold text-emerald-800">
                    24/7
                  </p>
                  <p className="mt-1 text-xs text-neutral-600">
                    Support &amp; dispute review
                  </p>
                </div>

              </div>
              <Link
                to="about"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 hover:text-blue-950"
              >
                Read more
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="w-full aspect-[4/3] bg-neutral-100 border border-neutral-200 rounded-xl overflow-hidden">
              <img
                src={trader}
                alt="A verified Pondereth trader reviewing a completed transaction"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA Banner ---------------- */}
      <section className="bg-emerald-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
            Ready to trade with confidence?
          </h2>
          <p className="mt-3 text-emerald-100 max-w-xl mx-auto">
            Create your account and list your first item, or book your next
            stay, in minutes.
          </p>
          {/* <a
            href="#get-started"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-emerald-800 hover:bg-neutral-100 transition-colors"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a> */}
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
