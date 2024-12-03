"use client";
import React, { useState } from "react";
import SearchReport from "./_components/SearchReport";
import ReportDetails from "./_components/ReportDetails";
import NotFoundCard from "./_components/NotFoundCard";

const Track = () => {
  const [reportDetails, setReportDetails] = useState(null);
  const [notFound, setNotFound] = useState<boolean>(true);
  const handleSearch = (result: any) => {
    setReportDetails(result);
  };

  return (
    <div className="mx-auto bg-background py-8 px-4 md:px-10 flex flex-col  items-center space-y-4">
      <h1>Track Lost Items</h1>
      <p className="text-subtitle text-center leading-7 font-normal text-base">
        Quickly report and describe your lost items to help us locate them.
      </p>
      {!notFound && (
        <SearchReport onSearch={handleSearch} setNotFound={setNotFound} />
      )}
      {!notFound && reportDetails && (
        <ReportDetails
          data={{
            reportNumber: "#12345678",
            createdAt: "18 Jan, 2024 at 9:45 PM",
            traveler: {
              name: "Jane Doe",
              email: "jane.doe@example.com",
              phone: "+19876543210",
            },
            itemType: "Backpack",
            itemDescription: "Blue hiking backpack with camping gear.",
            dateLost: "18 Jan, 2024",
          }}
        />
      )}
      {notFound && !reportDetails && (
        <NotFoundCard onTryAgain={() => setNotFound(false)} />
      )}
    </div>
  );
};

export default Track;
