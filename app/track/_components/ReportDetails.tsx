import StepOne from "@/app/_assets/steps/StepOne copy";
import Image from "next/image";
import React from "react";

const ReportDetails = ({ data }: { data: any }) => {
  return (
    <div className="bg-white rounded-[20px] p-5 md:py-14 md:px-10 w-full max-w-6xl relative">
      {/* Report Header */}
      <div className="border border-primary bg-primaryLight rounded-[4px] w-full p-5 mb-8 md:px-5 md:py-6 flex  flex-col md:flex-row  justify-between items-center gap-3">
        <div className="flex  items-center gap-1">
          <span className="font-[500] text-subtitle">Report Number</span>
          <span className="font-medium text-lg">•</span>
          <h2 className="text-base md:text-2xl">
            {data?.reportNumber || "#96459761"}
          </h2>
        </div>
        <p className="text-xs md:text-sm font-normal leading-5 text-subtitle">
          Report Created on {data?.createdAt || "17Jan, 2024 at 7:32 PM"}.
        </p>
      </div>

      {/* Report Steps */}
      {/* <div className="center w-full bg-slate-200 min-h-fit p-0  md:p-10 md:pt-16"> */}
      {/* <Image
          src={StepOne}
          alt="Step Image"
          className="w-[400px] h-[100px] bg-black"
          draggable={false}
          priority={true}
          quality={100}
        /> */}
      {/* </div> */}
      <div className="w-full center">
        <StepOne extraStyle="" />
      </div>
      {/* <div className="w-full  bg-black">
        <ol className="flex justify-center items-center w-full mb-4 sm:mb-5">
          <li className="flex w-full items-center  justify-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
              <svg
                className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
              </svg>
            </div>
          </li>
          <li className="flex w-full items-center  justify-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
              <svg
                className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
              </svg>
            </div>
          </li>
          <li className="flex w-full items-center  justify-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
              <svg
                className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
              </svg>
            </div>
          </li>
          <li className="flex w-full items-center  justify-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
              <svg
                className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z" />
                <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z" />
              </svg>
            </div>
          </li>
          <li className="flex items-center w-full">
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
              <svg
                className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
              </svg>
            </div>
          </li>
        </ol>
      </div> */}

      {/* Report Information */}
      <h2 className="my-7">Report Information</h2>
      <div className=" flex flex-col gap-6 w-full">
        {/* Personal Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3">
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">Full Name</p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.name || "John Doe"}
              </p>
            </div>
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">Email</p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.email || "john@gmail.com"}
              </p>
            </div>
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">Phone</p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.phone || "+1234567890"}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3">
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">
                Booking Number
              </p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.name || "John Doe"}
              </p>
            </div>
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">Airline</p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.email || "john@gmail.com"}
              </p>
            </div>
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">Flight Number</p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.phone || "+1234567890"}
              </p>
            </div>
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">Flight date</p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.name || "John Doe"}
              </p>
            </div>
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">
                Departure Station
              </p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.email || "john@gmail.com"}
              </p>
            </div>
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">
                Arrival Station
              </p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.phone || "+1234567890"}
              </p>
            </div>
          </div>
        </div>

        {/* Item Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-primary">Lost item information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3">
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">
                Type of Lost Item
              </p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.name || "John Doe"}
              </p>
            </div>
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">
                Seat/Location of Loss
              </p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.email || "john@gmail.com"}
              </p>
            </div>
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">
                Description of the Lost Item
              </p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.phone || "+1234567890"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetails;
