import Image from "next/image";
import React from "react";
import PinkMagnifying from "../../_assets/home/pink-magnifying.webp";
import PrimaryBtn from "../buttons/PrimaryBtn";

const MissionVisionSection = () => {
  return (
    <div className="center gap-5 px-20 text-[#F3F3F3] pt-5">
      <div className="flex gap-5 flex-wrap justify-center">
        {/* Card 1 */}
        <div className="bg-[#2872B3] rounded-[20px] p-8 py-10 md:w-4/12 w-full space-y-11 flex flex-col items-start">
          <h2>Who We Are</h2>
          <p className="font-normal leading-8 tracking-wider flex-grow">
            <span>FinderJet</span> is your one-stop solution for managing lost and found items
            with ease, reliability, and efficiency. Whether you're a traveler
            looking for a lost item or an airline striving for seamless property
            management, FinderJet is here to bridge the gap. We provide an
            efficient and reliable lost and found solution for airports, airlines,
            and passengers worldwide.”
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#343434] rounded-[20px] p-8 md:w-4/12 w-full space-y-3 flex flex-col items-start">
          <Image src={PinkMagnifying} width={500} height={500} alt="PinkMagnifying" />
          <h2>What we offer</h2>
          <ul className="list-disc list-inside space-y-3 tracking-wide font-normal leading-6 flex-grow">
            <li>Effortless lost item reporting.</li>
            <li>Smart search tools for accurate matches.</li>
            <li>Seamless integration with airlines and airports.</li>
          </ul>
          <div>
            <PrimaryBtn text="Search your lost" />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#FEA873] rounded-[20px] p-8 md:w-3/12 w-full center">
          <p className="text-[28px] font-bold leading-relaxed flex-grow">
            Our Mission Is To Reunite People With Their Lost Belongings
            Efficiently And Securely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
