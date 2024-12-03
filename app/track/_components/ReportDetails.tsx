import StepOne from "@/app/_assets/steps/StepOne";
import Image from "next/image";
import React from "react";

const ReportDetails = ({ data }: { data: any }) => {
  return (
    <div className="bg-white rounded-[20px] p-5 md:py-14 md:px-10 w-full max-w-6xl">
      {/* Report Header */}
      <div className="border border-primary bg-primaryLight rounded-[4px] w-full p-5 mb-8 md:px-5 md:py-6 flex  flex-col md:flex-row  justify-between items-center gap-3">
        <div className="flex  items-center gap-1">
          <span className="font-[500] text-subtitle">Report Number</span>
          <span className="font-medium text-lg">•</span>
          <h2 className="text-base md:text-2xl">{data?.reportNumber || "#96459761"}</h2>
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
      <StepOne extraStyle={'w-[100%]'} />

      {/* Report Information */}
      <h2 className="my-7">Report Information</h2>
      <div className="flex flex-col gap-6 w-full">
        {/* Personal Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
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
          <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3">
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">Booking Number</p>
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
              <p className="text-lg font-medium text-subtitle">Departure Station</p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.email || "john@gmail.com"}
              </p>
            </div>
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">Arrival Station</p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.phone || "+1234567890"}
              </p>
            </div>
          </div>
        </div>
          
          {/* Item Information */}
          <div>
          <h3 className="text-xl font-semibold mb-4">Lost item information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3">
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">Type of Lost Item</p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.name || "John Doe"}
              </p>
            </div>
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">Seat/Location of Loss</p>
              <p className="text-base  font-normal text-info">
                {data?.traveler?.email || "john@gmail.com"}
              </p>
            </div>
            <div className="col-span-1 ">
              <p className="text-lg font-medium text-subtitle">Description of the Lost Item</p>
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
