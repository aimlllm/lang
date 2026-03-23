"use client";

import { useI18n } from "@/i18n/context";
import PhoneNumber from "./PhoneNumber";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">{t.footer.brand}</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2 text-sm">
              {t.footer.serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <PhoneNumber href={t.phoneHref} phone={t.phone} className="hover:text-amber-400 transition-colors" />
              </li>
              <li>{t.footer.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </p>
          <p className="text-xs">{t.footer.license}</p>
        </div>
      </div>
    </footer>
  );
}
