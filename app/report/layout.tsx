import React from "react";
import { Metadata } from "next";
import { Viewport } from "next";

// Metadata specific to the report route
export const metadata: Metadata = {
  title: "Report Lost Items - Finder Jet",
  description:
    "Easily report and track your lost items with Finder Jet. Our platform helps you find your lost belongings quickly and efficiently.",
  keywords:
    "lost items, report lost items, find lost items, lost and found, Finder Jet",
  robots: "index, follow",
};
// Viewport settings should be separate, not part of metadata
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
