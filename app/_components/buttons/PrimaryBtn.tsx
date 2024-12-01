"use client";

import React from "react";
import clsx from "clsx";

type PrimaryBtnProps = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  bgColor?: "primary" | "secondary" | "discard";
  textColor?: "primary" | "white" | "secondary" | "headlines";
  extraStyle ?: string;
};

const PrimaryBtn = ({
  text,
  onClick,
  disabled = false,
  bgColor = "primary",
  textColor = "white",
  extraStyle = "",
}: PrimaryBtnProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "px-4 py-2 rounded-lg", 
        "sm:px-6 sm:py-3", // Small screens
        // "md:px-8 md:py-4", // Medium screens
        // "lg:px-10 lg:py-5", // Large screens
        bgColor === "primary" ? "bg-primary hover:bg-primaryHover" : 
        bgColor === "secondary" ? "bg-secondary hover:bg-secondaryHover" : 
        bgColor === "discard" ? "bg-discard hover:bg-discardHover" : "",
        textColor === "primary" ? "text-primary" : 
        textColor === "secondary" ? "text-secondary" : 
        textColor === "headlines" ? "text-headlines" : "text-white",
        { "opacity-50 cursor-not-allowed": disabled },
        " transition-all duration-300",
        `${extraStyle}`,
      )}
    >
      {text}
    </button>
  );
};

export default PrimaryBtn;
