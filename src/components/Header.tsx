"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/context";
import PhoneNumber from "./PhoneNumber";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, toggleLocale } = useI18n();

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#portfolio", label: t.nav.portfolio },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
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
            <div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                {t.footer.brand}
              </span>
              <span className="hidden sm:block text-xs text-gray-500 tracking-wide uppercase">
                SF Bay Renovations
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className="text-sm font-medium text-gray-500 hover:text-amber-600 transition-colors border border-gray-300 rounded-lg px-3 py-1.5"
            >
              {t.langToggle}
            </button>

            <PhoneNumber
              href={t.phoneHref}
              phone={t.phone}
              className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
            />
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLocale}
              className="text-sm font-medium text-gray-500 hover:text-amber-600 transition-colors border border-gray-300 rounded-lg px-3 py-1.5"
            >
              {t.langToggle}
            </button>
            <button
              className="p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-6 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <PhoneNumber
                href={t.phoneHref}
                phone={t.phone}
                className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors text-center block"
              />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
