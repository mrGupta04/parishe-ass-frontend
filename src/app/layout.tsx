import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parikshe | Exam-ready learning platform",
  description: "Recreated Parikshe experience with modern Next.js app router and mock APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 bg-gradient-to-br from-slate-50 via-white to-blue-50/50">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
