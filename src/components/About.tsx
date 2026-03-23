"use client";

import Image from "next/image";
import { useI18n } from "@/i18n/context";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-200 shadow-2xl">
              <Image
                src="/owner.jpeg"
                alt="Professional contractor"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white rounded-2xl p-6 shadow-xl">
              <div className="text-3xl font-bold">{t.about.yearsExp}</div>
              <div className="text-sm font-medium opacity-90">
                {t.about.yearsLabel1}
                <br />
                {t.about.yearsLabel2}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-block text-amber-600 text-sm font-semibold tracking-wider uppercase mb-4">
              {t.about.label}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {t.about.title1}
              <br />
              {t.about.title2}
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              {t.about.p1}
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {t.about.p2}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { title: t.about.badge1Title, desc: t.about.badge1Desc, icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: t.about.badge2Title, desc: t.about.badge2Desc, icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
                { title: t.about.badge3Title, desc: t.about.badge3Desc, icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" },
                { title: t.about.badge4Title, desc: t.about.badge4Desc, icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
              ].map((badge) => (
                <div key={badge.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d={badge.icon} />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{badge.title}</div>
                    <div className="text-sm text-gray-500">{badge.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
