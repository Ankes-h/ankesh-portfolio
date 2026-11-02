import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Ankesh Singh | AI/ML & Software Engineering Dashboard",
  description: "Interactive portfolio and engineering dashboard of Ankesh Singh - B.E. CSE (AI/ML), Chitkara University (GPA 8.0).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#07090e] text-zinc-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
