import type { Metadata, Viewport } from "next";
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
  display: "swap",
});

export const metadata: Metadata = {
  title: "Finder Jet - Lost Item Tracker & Reporting",
  description:
    "Finder Jet makes it simple to report and track lost items. Join now to find your belongings quickly and efficiently.",
  keywords:
    "lost items, track lost items, lost and found, Finder Jet",
  robots: "index, follow",
  applicationName: "Finder Jet",
};
// Viewport settings should be separate, not part of metadata
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
