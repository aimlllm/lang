"use client";

import { useI18n } from "@/i18n/context";
import PhoneNumber from "./PhoneNumber";

export default function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block text-amber-600 text-sm font-semibold tracking-wider uppercase mb-4">
            {t.contact.label}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t.contact.title1}
            <br />
            {t.contact.title2}
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {t.contact.description}
          </p>

          {/* Phone CTA */}
          <div className="mt-10 inline-flex flex-col items-center">
            <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div className="text-sm text-gray-500 font-medium mb-2">{t.contact.phoneLabel}</div>
            <PhoneNumber
              href={t.phoneHref}
              phone={t.phone}
              className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-amber-600 transition-colors"
            />
            <a
              href={t.phoneHref}
              className="mt-6 inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-semibold px-10 py-4 rounded-lg text-lg transition-colors gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {t.contact.callNow}
            </a>
          </div>

          {/* Service area */}
          <div className="mt-16 flex items-center justify-center gap-3 text-gray-600">
            <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <span className="font-medium">{t.contact.areaLabel}: {t.contact.areaValue}</span>
          </div>

          {/* Cities */}
          <div className="mt-8 p-6 bg-gray-50 rounded-2xl inline-block">
            <div className="text-sm font-semibold text-gray-900 mb-3">{t.contact.areasTitle}</div>
            <div className="flex flex-wrap justify-center gap-2">
              {t.contact.cities.map((city) => (
                <span key={city} className="bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

