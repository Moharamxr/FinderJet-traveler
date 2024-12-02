"use client";

import React, { useState } from "react";
import NavLogo from "../../_assets/NavLogo";
import PrimaryBtn from "../buttons/PrimaryBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@/app/_assets/icons/MenuIcon";

type NavItem = {
    name: string;
    href: string;
};

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems: NavItem[] = [
        { name: "Home", href: "/" },
        { name: "Report Lost Items", href: "/report" },
        { name: "Track Your Lost Items", href: "/track" },
    ];

    return (
        <nav className="flex justify-between items-center p-3  shadow-md shadow-gray-200 relative">
            {/* Logo */}
            <span className="ps-3 md:ps-5 lg:ps-9">
                <NavLogo extraStyle="w-32 md:w-44 xl:w-52" />
            </span>

            {/* Burger Icon */}
            <button
                className="text-2xl md:hidden block me-3"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {<MenuIcon />}
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-4">
                {navItems.map((item) => (
                    <li
                        key={item.name}
                        className={`${
                            pathname === item.href ? "text-navActive" : "text-navItem"
                        }`}
                    >
                        <Link
                            className="text-[12px] sm:text-base font-medium leading-6 text-center"
                            href={item.href}
                            aria-label={item.name}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Primary Button for Desktop */}
            <PrimaryBtn
                text="Report lost item"
                onClick={() => {}}
                bgColor="secondary"
                textColor="white"
                extraStyle="hidden md:block md:me-16"
            />

            {/* Mobile Menu with Expand Animation */}
            <div
                className={`absolute top-full  left-0 w-full bg-white shadow-lg overflow-hidden z-10 md:hidden transition-[height] duration-300 ease-in-out ${
                    isMenuOpen ? "h-auto py-4" : "h-0"
                }`}
            >
                <ul className={`flex flex-col gap-4 px-4 ${isMenuOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}>
                    {navItems.map((item) => (
                        <li
                            key={item.name}
                            className={`${
                                pathname === item.href
                                    ? "text-navActive"
                                    : "text-navItem"
                            }`}
                        >
                            <Link
                                className="text-[14px] font-medium text-center"
                                href={item.href}
                                aria-label={item.name}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    {/* <li>
                        <PrimaryBtn
                            text="Report lost item"
                            onClick={() => setIsMenuOpen(false)}
                            bgColor="secondary"
                            textColor="white"
                            extraStyle="w-full"
                        />
                    </li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
