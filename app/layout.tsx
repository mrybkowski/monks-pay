import type { Metadata } from "next";
import { Outfit, Urbanist } from "next/font/google";

import { Footer, Header } from "./sections";

import "./globals.css";
import { AOSInit } from "@/components";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monks Pay",
  description: "Pay fast and smarter from anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${urbanist.variable} antialiased`}>
        <Header />
        {children}
        <Footer />

        <AOSInit />
      </body>
    </html>
  );
}
