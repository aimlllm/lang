import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bay Area Premier Home Renovation | Professional Remodeling Contractor",
  description:
    "Expert home renovation services in the San Francisco Bay Area. Specializing in whole-home remodels, kitchen & bathroom renovations, roofing, fence installation, and interior painting. Licensed, insured, and trusted by Bay Area homeowners.",
  keywords:
    "San Francisco Bay Area renovation, home remodeling, kitchen renovation, bathroom remodel, roofing contractor, fence installation, house painting, Bay Area contractor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
