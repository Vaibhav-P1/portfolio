import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaibhav Pandey | Android Developer",
  description: "Android Developer specializing in Kotlin & Jetpack Compose. Building high-performance, user-centric mobile experiences. CGPA 9.32 at VIT Bhopal.",
  keywords: ["Android Developer", "Kotlin", "Jetpack Compose", "Mobile Development", "VIT Bhopal"],
  authors: [{ name: "Vaibhav Pandey" }],
  openGraph: {
    title: "Vaibhav Pandey | Android Developer",
    description: "Building robust, user-centric mobile experiences with Kotlin and Jetpack Compose.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAF9] text-[#111827]">{children}</body>
    </html>
  );
}
