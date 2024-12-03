import React from "react";

const InstagramIcon = (
  {
    extraStyle='',
  }:{
    extraStyle?: string;
  }
) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={extraStyle}
    >
      <path
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
        fill="#055499"
      />
      <path
        d="M11.9996 10.4347C11.1394 10.4347 10.4375 11.1367 10.4375 11.9968C10.4375 12.857 11.1394 13.5589 11.9996 13.5589C12.8597 13.5589 13.5617 12.857 13.5617 11.9968C13.5617 11.1367 12.8597 10.4347 11.9996 10.4347ZM16.6847 11.9968C16.6847 11.35 16.6906 10.7089 16.6543 10.0632C16.6179 9.31324 16.4468 8.64761 15.8984 8.09918C15.3488 7.54957 14.6843 7.37965 13.9343 7.34332C13.2875 7.30699 12.6464 7.31285 12.0007 7.31285C11.3539 7.31285 10.7128 7.30699 10.0671 7.34332C9.31715 7.37965 8.65152 7.55074 8.10308 8.09918C7.55347 8.64879 7.38355 9.31324 7.34722 10.0632C7.3109 10.7101 7.31675 11.3511 7.31675 11.9968C7.31675 12.6425 7.3109 13.2847 7.34722 13.9304C7.38355 14.6804 7.55465 15.3461 8.10308 15.8945C8.65269 16.4441 9.31715 16.614 10.0671 16.6503C10.714 16.6867 11.355 16.6808 12.0007 16.6808C12.6476 16.6808 13.2886 16.6867 13.9343 16.6503C14.6843 16.614 15.35 16.4429 15.8984 15.8945C16.448 15.3449 16.6179 14.6804 16.6543 13.9304C16.6918 13.2847 16.6847 12.6437 16.6847 11.9968ZM11.9996 14.4003C10.6695 14.4003 9.59605 13.3269 9.59605 11.9968C9.59605 10.6668 10.6695 9.59332 11.9996 9.59332C13.3296 9.59332 14.4031 10.6668 14.4031 11.9968C14.4031 13.3269 13.3296 14.4003 11.9996 14.4003ZM14.5015 10.0562C14.191 10.0562 13.9402 9.80543 13.9402 9.49488C13.9402 9.18433 14.191 8.93355 14.5015 8.93355C14.8121 8.93355 15.0628 9.18433 15.0628 9.49488C15.0629 9.56862 15.0485 9.64165 15.0203 9.7098C14.9921 9.77795 14.9508 9.83986 14.8986 9.892C14.8465 9.94415 14.7846 9.98549 14.7164 10.0137C14.6483 10.0418 14.5753 10.0563 14.5015 10.0562Z"
        fill="#F5F6F6"
      />
    </svg>
  );
};

export default InstagramIcon;