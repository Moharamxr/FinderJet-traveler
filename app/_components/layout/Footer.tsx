import NavLogo from "@/app/_assets/NavLogo";
import InstagramIcon from "@/app/_assets/social-media/InstagramIcon";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-primaryLight flex flex-col md:flex-row justify-start gap-20 bottom-0 w-full p-4 py-6 md:py-14 md:px-16">
      <div className="flex md:flex-col md:justify-start justify-between items-center gap-5 ">
        <span className="w-52"><NavLogo /></span>
        <div className="flex flex-col gap-3">
          <p className="text-base font-medium text-center text-headlines">
            Connect With Us
          </p>
          <div className="center gap-3">
            <InstagramIcon extraStyle="w-8  h-8" />
            <InstagramIcon extraStyle="w-8  h-8" />
            <InstagramIcon extraStyle="w-8  h-8" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-5 w-full">
        <div className="w-1/2 md:w-1/4 flex flex-col gap-3 p-2">
          <p className="text-base font-medium  text-headlines">
            About finderjet
          </p>
          <ul>
            <li className="text-info text-sm tracking-wider leading-8 cursor-pointer">About Us</li>
            <li className="text-info text-sm tracking-wider leading-8 cursor-pointer">Contact Us</li>
            <li className="text-info text-sm tracking-wider leading-8 cursor-pointer">Careers</li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/4 flex flex-col gap-3 p-2">
          <p className="text-base font-medium  text-headlines">Main Pages</p>
          <ul>
            <li className="text-info text-sm tracking-wider leading-8 cursor-pointer">About Us</li>
            <li className="text-info text-sm tracking-wider leading-8 cursor-pointer">Contact Us</li>
            <li className="text-info text-sm tracking-wider leading-8 cursor-pointer">Careers</li>
          </ul>
        </div>
        <div className="w-1/2 md:w-1/4 flex flex-col gap-3 p-2">
          <p className="text-base font-medium  text-headlines">Support</p>
          <ul>
            <li className="text-info text-sm tracking-wider leading-8 cursor-pointer">About Us</li>
            <li className="text-info text-sm tracking-wider leading-8 cursor-pointer">Contact Us</li>
            <li className="text-info text-sm tracking-wider leading-8 cursor-pointer">Careers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
