"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/header/Navbar";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { PageTransition } from "@/components/animations/PageTransition";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <AnimatePresence mode="wait">
          <PageTransition key={pathname}>{children}</PageTransition>
        </AnimatePresence>
      </body>
    </html>
  );
}
