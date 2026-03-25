import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const SITE_URL = "https://lang-orcin.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "湾区专业房屋装修 | Bay Area Premier Home Renovation",
  description:
    "旧金山湾区专业房屋装修服务。整体翻新、厨房卫浴改造、屋顶修缮、ADU加建、围栏安装、油漆粉刷。持牌保险，免费估价。Licensed general contractor serving San Francisco Bay Area — kitchen remodel, bathroom renovation, roofing, ADU, painting & more.",
  keywords:
    "旧金山湾区装修, 湾区刘师傅, 房屋翻新, 厨房改造, 卫浴装修, ADU加建, 车房改室, 屋顶更换, 室内外油漆, San Francisco Bay Area renovation, home remodeling, kitchen renovation, bathroom remodel, ADU construction, roofing, painting, licensed contractor",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "湾区专业房屋装修 | Bay Area Premier Home Renovation",
    description:
      "旧金山湾区专业房屋装修——整体翻新、厨房卫浴改造、ADU加建、屋顶修缮。持牌保险，15年以上经验，免费估价。",
    url: SITE_URL,
    siteName: "湾区装修 Bay Area Renovation",
    locale: "zh_CN",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/owner.jpeg",
        width: 800,
        height: 600,
        alt: "湾区专业房屋装修服务",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "湾区专业房屋装修 | Bay Area Premier Home Renovation",
    description:
      "旧金山湾区专业房屋装修——整体翻新、厨房卫浴改造、ADU加建、屋顶修缮。持牌保险，免费估价。",
    images: ["/owner.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "湾区装修 Bay Area Renovation",
  alternateName: "湾区刘师傅",
  description:
    "旧金山湾区专业房屋装修服务。整体翻新、厨房卫浴改造、ADU加建、屋顶修缮、水电安装、室内外油漆。持牌保险，免费估价。",
  url: SITE_URL,
  telephone: ["+14153611692", "+18122418280"],
  areaServed: [
    { "@type": "City", name: "San Francisco" },
    { "@type": "City", name: "Palo Alto" },
    { "@type": "City", name: "San Mateo" },
    { "@type": "City", name: "Mountain View" },
    { "@type": "City", name: "Fremont" },
    { "@type": "City", name: "Oakland" },
    { "@type": "City", name: "Berkeley" },
    { "@type": "City", name: "San Jose" },
    { "@type": "City", name: "Sunnyvale" },
    { "@type": "City", name: "Redwood City" },
    { "@type": "City", name: "Daly City" },
    { "@type": "City", name: "Cupertino" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
    addressLocality: "San Francisco Bay Area",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.7749,
    longitude: -122.4194,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Renovation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "整体房屋翻新 Whole-Home Renovation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "厨房改造 Kitchen Remodeling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "卫浴翻新 Bathroom Renovation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "屋顶服务 Roofing Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ADU / 车房改室 ADU Construction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "水电安装 Plumbing & Electrical" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "室内外油漆 Interior & Exterior Painting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "围栏安装 Fence Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "前后院铺设 Landscaping & Paving" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "500",
    bestRating: "5",
  },
  priceRange: "$$",
  knowsLanguage: ["zh", "en"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
