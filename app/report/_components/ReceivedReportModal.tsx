import Image from "next/image";
import React from "react";
import ReceivedReportPic from "@/app/_assets/images/Businessman searching for an answer.png";
import XCloseIcon from "@/app/_assets/icons/XCloseIcon";

const ReceivedReportModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    isOpen && (
      <>
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
        <div
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          className="center flex-col  fixed top-1/2 left-[52%] transform -translate-x-[55%] -translate-y-1/2 z-10 bg-white rounded-[20px] border border-border w-11/12 md:w-full max-w-lg p-5 lg:px-12 md:p-20"
        >
          <XCloseIcon setIsOpen={setIsOpen} />
          <Image
            src={ReceivedReportPic}
            alt="Received Report"
            width={200}
            style={{ height: "auto" }}
            quality={100}
            draggable={false}
            priority={true}
          />
          <h2 id="modal-title" className="text-center pb-2">
            Report Received
          </h2>
          <p id="modal-description" className="text-center text-subtitle">
            Your report has been successfully submitted. We appreciate your
            effort and will begin working on it promptly.
          </p>
        </div>
      </>
    )
  );
};

export default ReceivedReportModal;
