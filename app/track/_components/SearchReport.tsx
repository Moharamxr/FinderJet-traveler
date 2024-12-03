import PrimaryBtn from "@/app/_components/buttons/PrimaryBtn";
import React from "react";

const SearchReport = ({
  onSearch,
  setNotFound,
}: {
  setNotFound: (value: boolean) => void;
  onSearch: (result: any) => void;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-0 w-full">
      <input
        type="text"
        name="Name"
        id="search-report-name"
        placeholder="Name"
        className="bg-white border border-border text-subtitle text-base px-4 py-2 h-12 w-full md:w-56 outline-gray-300"
      />
      <input
        type="email"
        name="email"
        id="search-report-email"
        placeholder="Email address"
        className="bg-white border border-border text-subtitle text-base px-4 py-2 h-12  w-full md:w-56 outline-gray-300"
      />
      <input
        type="text"
        name="Report"
        id="search-report-id"
        placeholder="Report Id"
        className="bg-white border border-border text-subtitle text-base px-4 py-2 h-12  w-full md:w-56 outline-gray-300 "
      />
      <PrimaryBtn
        text="Search"
        onClick={() => onSearch({})}
        extraStyle="md:rounded-s-none"
      />
    </div>
  );
};

export default SearchReport;
