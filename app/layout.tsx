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
  title: "Finder Jet",
  description: "Report lost items and track them",
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
