import Image from "next/image";
import React from "react";
import ReceivedReportPic from "@/app/_assets/images/Businessman searching for an answer.png";

const ReceivedReportModal = ({
isOpen,
setIsOpen,
}:
{
isOpen: boolean;
setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    isOpen && (
      <>
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
        <div className="center flex-col  fixed top-1/2 left-[52%] transform -translate-x-[55%] -translate-y-1/2 z-10 bg-white rounded-[20px] border border-border w-11/12 md:w-full max-w-lg p-5 lg:px-12 md:p-20">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-5 left-5 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <path
              d="M9.37479 1.12479L1.12521 9.37437M1.12521 1.12479L9.37479 9.37437"
              stroke="#1E1E1E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              />
            </svg>
            <Image
              src={ReceivedReportPic}
              alt="Received Report"
              width={200}
              style={{height:"auto"}}
              quality={100}
              draggable={false}
              priority
            />
            <h2 className="text-center pb-2">Report Received</h2>
            <p className="text-center text-subtitle">
            Your report has been successfully submitted. We appreciate your effort and will begin working on it promptly.
            </p>
        </div>
      </>
    )
  );
};

export default ReceivedReportModal;
