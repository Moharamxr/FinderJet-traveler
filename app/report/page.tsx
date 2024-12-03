import React from "react";
import ReportForm from "./_components/ReportForm";

const Report = () => {
  return (
    <div className="mx-auto bg-background  py-8 px-4 md:px-10 flex flex-col items-center space-y-4">
      <h1>Report Lost Items</h1>
      <p className="text-subtitle text-center leading-7 font-normal text-base">
        Quickly report and describe your lost items to help us locate them.
      </p>
      <ReportForm />
    </div>
  );
};

export default Report;
