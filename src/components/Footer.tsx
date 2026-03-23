export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                Bay Area Renovation
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Professional home renovation services in the San Francisco Bay
              Area. Licensed, insured, and committed to transforming your home
              with expert craftsmanship.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Whole-Home Renovation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Kitchen Remodeling
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Bathroom Renovation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Roofing Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Fence &amp; Painting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+14155551234"
                  className="hover:text-amber-400 transition-colors"
                >
                  (415) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@bayarearenovation.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  info@bayarearenovation.com
                </a>
              </li>
              <li>San Francisco Bay Area, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Bay Area Renovation. All rights
            reserved.
          </p>
          <p className="text-xs">
            Licensed General Contractor &bull; CA License #XXXXXXX
          </p>
        </div>
      </div>
    </footer>
  );
}
