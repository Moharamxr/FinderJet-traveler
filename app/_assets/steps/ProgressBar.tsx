import clsx from "clsx";
import React from "react";

interface ProgressBarProps {
  progress: number;
}

const CheckIcon = () => (
  <div className="relative w-[1.5rem] h-[1.5rem] bg-[#2872B3] rounded-full flex items-center justify-center">
    <svg
      width="20"
      height="22"
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.8641 7.40733C19.0516 7.59486 19.1569 7.84917 19.1569 8.11433C19.1569 8.3795 19.0516 8.6338 18.8641 8.82133L11.3688 16.3167C11.2697 16.4157 11.1521 16.4943 11.0227 16.548C10.8933 16.6016 10.7545 16.6292 10.6144 16.6292C10.4743 16.6292 10.3356 16.6016 10.2062 16.548C10.0768 16.4943 9.95915 16.4157 9.8601 16.3167L6.1361 12.5933C6.04059 12.5011 5.96441 12.3907 5.912 12.2687C5.85959 12.1467 5.832 12.0155 5.83085 11.8827C5.82969 11.75 5.855 11.6183 5.90528 11.4954C5.95556 11.3725 6.02981 11.2608 6.1237 11.1669C6.2176 11.073 6.32925 10.9988 6.45214 10.9485C6.57504 10.8982 6.70672 10.8729 6.8395 10.8741C6.97228 10.8752 7.1035 10.9028 7.2255 10.9552C7.34751 11.0076 7.45785 11.0838 7.5501 11.1793L10.6141 14.2433L17.4494 7.40733C17.5423 7.31441 17.6526 7.24069 17.7739 7.19039C17.8953 7.1401 18.0254 7.11421 18.1568 7.11421C18.2881 7.11421 18.4182 7.1401 18.5396 7.19039C18.661 7.24069 18.7712 7.31441 18.8641 7.40733Z"
        fill="#F2F3F7"
      />
    </svg>
  </div>
);

const WhiteCircle = () => (
  <div className="w-[1.375rem] h-[1.375rem] bg-white border-2 border-[#2872B3] rounded-full"></div>
);

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  // Clamp the progress value between 0 and 100 and calculate the progress bar's width
  const clampedProgress = Math.min(100, Math.max(0, progress));
  return (
    <div className="relative w-full max-w-[57rem] h-[1.5rem] mx-auto">
      {/* Background Bar */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 h-[0.5rem] bg-gray-100 rounded-full"></div>
      {/* Progress Bar */}
      <div
        className={clsx(
          "absolute top-1/2 -translate-y-1/2 left-4 h-[0.5rem] bg-[#2872B3] rounded-full",
          progress === 100 && "rounded-r-full",
          "hidden md:block"
        )}
        style={{ width: `calc(${clampedProgress}% - 3%)` }}
      ></div>
      <div
        className={clsx(
          "absolute top-1/2 -translate-y-1/2 left-4 h-[0.5rem] bg-[#2872B3] rounded-full",
          progress === 100 && "rounded-r-full",
          "block md:hidden"
        )}
        style={{ width: `calc(${clampedProgress}% - 6%)` }}
      ></div>

      <div className="flex justify-between items-center w-full h-[1.5rem] relative px-4">
        <CheckIcon />
        {progress >= 25 ? <CheckIcon /> : <WhiteCircle />}
        {progress > 50 ? <CheckIcon /> : <WhiteCircle />}
        {progress > 75 ? <CheckIcon /> : <WhiteCircle />}
        {progress >= 100 ? <CheckIcon /> : <WhiteCircle />}
      </div>
    </div>
  );
};

export default ProgressBar;
