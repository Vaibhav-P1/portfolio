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
  title: "Vaibhav Pandey | Android Developer",
  description: "Android Developer specializing in Kotlin & Jetpack Compose. Building high-performance, user-centric mobile experiences. CGPA 9.18 at VIT Bhopal.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f5f5f5]">{children}</body>
    </html>
  );
}
