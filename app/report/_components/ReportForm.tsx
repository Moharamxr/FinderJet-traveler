"use client";
import SelectInput from "@/app/_components/inputs/SelectInput";
import TextInput from "@/app/_components/inputs/TextInput";
import React from "react";
import { Airlines } from "../../_data/static-data";
import ItemTypesModal from "@/app/_components/inputs/ItemTypesModal";
import FileInput from "@/app/_components/inputs/FileInput";
import PrimaryBtn from "@/app/_components/buttons/PrimaryBtn";
const ReportForm = () => {
  return (
    <form className="bg-white rounded-[20px] p-8 lg:w-9/12 space-y-4">
      <h4 className="text-xl font-medium tracking-wide mb-5">
        Personal information
      </h4>
      <div className="flex md:flex-row flex-col justify-between items-center gap-10">
        <TextInput label="First Name" placeholder="John Doe" />
        <TextInput label="Last Name" placeholder="John Doe" />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-10">
        <TextInput label="Flight Number" placeholder="98474844999" />
        <TextInput label="Choose Flight date" placeholder="Date" />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-10">
        <SelectInput label="Departure Station" options={Airlines} />
        <SelectInput label="Arrival Station" options={Airlines} />
      </div>
      <h4 className="text-xl font-medium tracking-wide mb-5">
        Lost item information
      </h4>
      <div className="flex md:flex-row flex-col justify-between items-center gap-10">
        <ItemTypesModal />
        <TextInput
          label="Seat/Location of Loss"
          placeholder="Seat/Location of Loss"
        />
      </div>
      <div className="w-full">
        {
          <label className="block mb-2 text-headlines font-medium text-lg">
            Description of the Lost Item
          </label>
        }
        <textarea
          className="bg-white border border-border rounded-md p-2 h-32 w-full outline-none focus:border-gray-400 transform duration-300 transition-colors"
          placeholder={"Description of the Lost Item"}
        />
      </div>
      <FileInput />
      <h4 className="text-xl font-medium tracking-wide mb-5">
        Contact information
      </h4>
      <div className="flex md:flex-row flex-col justify-between items-center gap-10">
        <TextInput label="Mobile Number" placeholder="192833767687" />
        <TextInput label="Email Address" placeholder="Email Address" />
      </div>
      <div className="flex flex-row-reverse gap-4 pt-10">
        <PrimaryBtn text="Discard" bgColor="discard" textColor="primary" />
        <PrimaryBtn text="Send Report" bgColor="primary" textColor="white"/>
      </div>
    </form>
  );
};

export default ReportForm;
