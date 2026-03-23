import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "湾区专业房屋装修 | Bay Area Premier Home Renovation",
  description:
    "旧金山湾区专业房屋装修服务。整体翻新、厨房卫浴改造、屋顶修缮、围栏安装、油漆粉刷。持牌保险，值得信赖。Expert home renovation in SF Bay Area.",
  keywords:
    "旧金山湾区装修, 房屋翻新, 厨房改造, 卫浴装修, San Francisco Bay Area renovation, home remodeling, kitchen renovation, bathroom remodel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
