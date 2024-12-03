"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import clsx from "clsx";
import TextInput from "@/app/_components/inputs/TextInput";
import PrimaryBtn from "@/app/_components/buttons/PrimaryBtn";
import { Airlines, itemTypes, locationOptions } from "../../_data/static-data";
import ReceivedReportModal from "./ReceivedReportModal";

// Dynamically import components with fallback loading states
const SelectInput = dynamic(() => import("@/app/_components/inputs/SelectInput"), {
  loading: () => <p>Loading...</p>,
});
const ItemTypesModal = dynamic(() => import("@/app/_components/inputs/ItemTypesModal"), {
  loading: () => <p>Loading...</p>,
});
const FileInput = dynamic(() => import("@/app/_components/inputs/FileInput"), {
  loading: () => <p>Loading...</p>,
});

type TabsType = "Airport" | "Hotel";

const FormRow = ({ children }:{
    children: React.ReactNode
}) => (
  <div className="flex md:flex-row flex-col justify-between items-center gap-10">
    {children}
  </div>
);


const ReportForm = () => {
  const [selectedTab, setSelectedTab] = useState<TabsType>("Airport");
  const [isReceivedReportModalOpen, setIsReceivedReportModalOpen] = useState<boolean>(true);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [additionalDetails, setAdditionalDetails] = useState<string>("");

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
  };

  const buttonClasses =
    "px-6 py-3 text-lg rounded-2xl hover:shadow-md cursor-pointer transition-all duration-300";

  return (
    <>
      {/* Tabs */}
      <div className="center gap-4">
        {["Airport", "Hotel"].map((tab) => (
          <span
            key={tab}
            aria-selected={selectedTab === tab}
            className={clsx(
              selectedTab === tab ? "bg-primary text-white" : "bg-primaryLight text-primary",
              buttonClasses
            )}
            onClick={() => setSelectedTab(tab as TabsType)}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Form */}
      <form className="bg-white rounded-[20px] p-8 w-full lg:w-9/12 flex flex-col gap-4">
        <h3 className="text-2xl font-medium tracking-wide mb-5">Personal Information</h3>
        <FormRow>
          <TextInput label="First Name" placeholder="John" />
          <TextInput label="Last Name" placeholder="Doe" />
        </FormRow>

        <h3 className=" font-medium tracking-wide mb-5">Lost Item Information</h3>
        <FormRow>
          <ItemTypesModal label="Type of Lost Item" options={itemTypes} />
          <ItemTypesModal
            label="Location of Lost Item"
            options={locationOptions}
            placeholder="Select a location"
            onSelect={handleLocationSelect}
          />
        </FormRow>
        {selectedLocation && (
          <div className="mt-4 w-full">
            <label className="block mb-2 text-subtitle font-medium">
              Additional Location Details
            </label>
            <input
              type="text"
              placeholder="E.g., Near Gate 10 or on a table at the restaurant"
              value={additionalDetails}
              onChange={(e) => setAdditionalDetails(e.target.value)}
              className="w-full p-2 border border-border rounded-md"
            />
          </div>
        )}
        <div className="w-full">
          <label className="block mb-2 text-headlines font-medium text-lg">
            Description of the Lost Item
          </label>
          <textarea
            className="bg-white border border-border rounded-md p-2 h-32 w-full outline-none focus:border-gray-400 transform duration-300 transition-colors"
            placeholder="Description of the Lost Item"
          />
        </div>
        <FileInput />

        {selectedTab === "Airport" && (
          <>
            <h3 className="text-2xl font-medium tracking-wide mb-5">Flight Information</h3>
            <FormRow>
              <TextInput label="Booking Number" placeholder="98474844999" />
              <SelectInput label="Airline" options={Airlines} />
            </FormRow>
            <FormRow>
              <TextInput label="Flight Number" placeholder="98474844999" />
              <TextInput label="Choose Flight Date" placeholder="Date" />
            </FormRow>
            <FormRow>
              <SelectInput label="Departure Station" options={Airlines} />
              <SelectInput label="Arrival Station" options={Airlines} />
            </FormRow>
          </>
        )}

        {selectedTab === "Hotel" && (
          <>
            <h3 className="text-2xl font-medium tracking-wide mb-5">Additional Information</h3>
            <FormRow>
              <TextInput label="Choose Lost Date" placeholder="Date" />
              <TextInput label="Room Number (optional)" placeholder="12345" />
            </FormRow>
          </>
        )}

        <h3 className="text-2xl font-medium tracking-wide mb-5">Contact Information</h3>
        <FormRow>
          <TextInput label="Mobile Number" placeholder="192833767687" />
          <TextInput label="Email Address" placeholder="Email Address" />
        </FormRow>
        <div className="flex flex-row-reverse gap-4 pt-10">
          <PrimaryBtn text="Discard" bgColor="discard" textColor="primary" />
          <PrimaryBtn text="Send Report" bgColor="primary" textColor="white" />
        </div>
        <ReceivedReportModal isOpen={isReceivedReportModalOpen} setIsOpen={setIsReceivedReportModalOpen} />
      </form>
    </>
  );
};

export default ReportForm;
