"use client";

import React from "react";
import NavLogo from "../../_assets/NavLogo";
import PrimaryBtn from "../buttons/PrimaryBtn";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

type NavItem = {
    name: string;
    href: string;
};

const Navbar = () => {
    const pathname = usePathname();

    const navItems: NavItem[] = [
        { name: "Home", href: "/" },
        { name: "Report Lost Items", href: "/report" },
        { name: "Track Your Lost Items", href: "/track" },
    ];

    return (
        <nav className="flex justify-between items-center w p-3 shadow-md shadow-gray-200">
            <span className="ps-3 md:ps-5 lg:ps-9">
                <NavLogo extraStyle="w-32 md:w-44 xl:w-48" />
            </span>
            <ul className="center gap-4">
                {navItems.map((item) => (
                    <li
                        key={item.name}
                        className={` ${pathname === item.href ? "text-navActive" : "text-navItem"}`}
                    >
                        <Link className="text-[12px] sm:text-base   md:text-base font-medium leading-6 text-center " href={item.href}>{item.name}</Link>
                    </li>
                ))}
            </ul>
            <PrimaryBtn
                text="Report lost item"
                onClick={() => {}}
                bgColor="secondary"
                textColor="white"
                extraStyle="hidden md:block md:me-16"
            />
           
        </nav>
    );
};

export default Navbar;
