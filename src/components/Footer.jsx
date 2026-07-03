import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <span className="font-serif text-xl font-bold text-emerald-800">
                Pondereth
              </span>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                Nigeria Enterprise Limited. Trade and payments for
                importers, exporters, and hosts.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Marketplace
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li><a href="#" className="hover:text-emerald-800">Roofing Sheets</a></li>
                <li><a href="#" className="hover:text-emerald-800">Clothing</a></li>
                <li><a href="#" className="hover:text-emerald-800">Vehicles</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Stays
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li><a href="#" className="hover:text-emerald-800">Shortlets</a></li>
                <li><a href="#" className="hover:text-emerald-800">Hotels</a></li>
                <li><a href="#" className="hover:text-emerald-800">List Your Property</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Company
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li><a href="#" className="hover:text-emerald-800">About</a></li>
                <li><a href="#" className="hover:text-emerald-800">Payments &amp; Security</a></li>
                <li><a href="#" className="hover:text-emerald-800">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-neutral-200 text-xs text-neutral-500">
            © {new Date().getFullYear()} Pondereth Nigeria Enterprise Limited. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

export default Footer
