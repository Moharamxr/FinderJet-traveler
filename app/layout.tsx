import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_components/layout/Navbar";
import Footer from "./_components/layout/Footer";

const helveticaNeue = localFont({
  src: [
    { path: "./fonts/HelveticaNeueRoman.otf", weight: "400", style: "normal" },
    { path: "./fonts/HelveticaNeueBold.otf", weight: "700", style: "normal" },
    { path: "./fonts/HelveticaNeueLight.otf", weight: "300", style: "normal" },
    { path: "./fonts/HelveticaNeueMedium.otf", weight: "500", style: "normal" },
    { path: "./fonts/HelveticaNeueItalic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-helvetica-neue",
});

export const metadata: Metadata = {
  title: "Finder Jet - Track and Report Lost Items",
  description:
    "Finder Jet helps you report lost items and track them easily. Join our platform to ensure your lost belongings are found quickly.",
  keywords:
    "lost items, track lost items, report lost items, find lost items, lost and found, Finder Jet, lost items tracker, FinderJet, finderjet, finder jet, lost items platform",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helveticaNeue.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
