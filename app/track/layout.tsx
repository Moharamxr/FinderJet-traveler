import React from "react";
import { Metadata } from "next";
import { Viewport } from "next";

// Metadata specific to the track route
export const metadata: Metadata = {
    title: "Track Your Report - Finder Jet",
    description:
        "Track the status of your reported lost items with Finder Jet. Stay updated on the progress and find your lost belongings quickly and efficiently.",
    keywords:
        "track report, lost items, track lost items, lost and found, Finder Jet",
    robots: "index, follow",
};
// Viewport settings should be separate, not part of metadata
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <main>{children}</main>;
};

export default Layout;
