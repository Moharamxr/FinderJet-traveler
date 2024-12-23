"use client";
import React, { useState } from "react";

interface SelectInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    options: { value: string; label: string }[];
}

const SelectInput: React.FC<SelectInputProps> = ({
    className = 'bg-white border border-border rounded-md p-2 w-full h-12 focus:ring-1  focus:ring-gray-400',
    value,
    onChange,
    label,
    options,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value: string) => {
        if (onChange) onChange(value);
        setIsOpen(false);
    };

    return (
        <div className="w-full relative">
            {label && <label className="block mb-2 text-subtitle font-medium">{label}</label>}
            <div
                className={`${className} flex items-center justify-between cursor-pointer relative ${isOpen ? "rounded-b-none border-gray-900" : "rounded-md"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="truncate text-subtitle">{value ? options.find(opt => opt.value === value)?.label : "Select an option"}</span>
                <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
            {isOpen && (
                <div className={"absolute left-0 right-0  bg-white border border-t-0 rounded-t-none rounded-md shadow-lg z-10 " + (isOpen ? "border-gray-900" : "border-gray-300")}>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleSelect(option.value)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectInput;
