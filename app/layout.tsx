import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { fullName } from "../lib/site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${fullName} | Web Development Services`,
  description:
    "Full-stack web development for businesses and founders. Get responsive React and Next.js websites, backend integrations, and reliable bug fixes through Fiverr.",
  openGraph: {
    title: `${fullName} | Web Development Services`,
    description:
      "Full-stack web development, responsive websites, React and Next.js development, and API integrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
