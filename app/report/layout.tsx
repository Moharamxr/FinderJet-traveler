import React from "react";
import Head from "next/head";
import { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "Report Lost Items - Finder Jet",
    description: "Easily report and track your lost items with Finder Jet. Our platform helps you find your lost belongings quickly and efficiently.",
    keywords: "lost items, report lost items, find lost items, lost and found, Finder Jet",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
