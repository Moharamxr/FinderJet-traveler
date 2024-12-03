import Image from "next/image";

import CloudIcon from "../../_assets/home/cloud.webp";
import Binoculars from "../../_assets/home/blue-binoculars.webp";
import CreditCards from "../../_assets/home/credit-card.webp";
import CreditCards2 from "../../_assets/home/credit-cards2.webp";
import LargePlane from "../../_assets/home/large-plane.webp";
import SmallPlane from "../../_assets/home/plane.webp";
import Magnifier from "../../_assets/home/magnifier.webp";
import Suitcase from "../../_assets/home/suitcase.webp";
import Wallet from "../../_assets/home/wallet.webp";
import Kite from "../../_assets/home/kite.webp";
import PrimaryBtn from "../buttons/PrimaryBtn";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden">
      {/* Outer Circle */}
      <div className="relative w-[550px] h-[550px] md:w-[900px] md:h-[900px] lg:w-[1100px] lg:h-[1100px] rounded-full border border-gray-200 flex items-center justify-center">
        {/* Outer Circle Icons (only left and right sides) */}
        <div className="w-20 h-20 center bg-[#F3F4F7] rounded-full absolute right-[15%] md:right-5 top-14 md:top-1/3 transform translate-x-1/2 -translate-y-1/2 p-3">
          <Image
            src={Wallet}
            alt="Wallet"
            className="object-contain  w-14 h-14"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="bg-[#F3F4F7] center w-24 h-24  rounded-full absolute left-[15%] md:left-6 top-14 md:top-1/3 transform -translate-x-1/2 -translate-y-1/2 p-3">
          <Image
            src={Binoculars}
            alt="Binoculars"
            className="object-contain w-16 "
            style={{ height: "auto" }}

            draggable={false}
            priority={true}
          />
        </div>
        <div className="absolute w-auto h-auto right-1/2 md:right-1 top-1 md:top-1/2 transform translate-x-1/2 -translate-y-1/2">
          <Image
            src={SmallPlane}
            className="object-contain w-6 "
            style={{ height: "auto" }}
            alt="SmallPlane"
            draggable={false}
            priority={true}
          />
        </div>
        <div className="w-20 h-20 center bg-[#FFF6F2] rounded-full absolute right-[18%] md:right-6 bottom-[10%] md:bottom-1/3 transform translate-x-1/2 translate-y-1/2 p-3">
          <Image
            src={Magnifier}
            alt="Magnifier"
            className="object-contain w-16 h-16"

            draggable={false}
            priority={true}
          />
        </div>
        <div className="w-20 h-20 center bg-[#F3F4F7] rounded-full absolute left-[18%] md:left-6 bottom-[10%] md:bottom-1/3 transform -translate-x-1/2 translate-y-1/2 p-3">
          <Image
            src={Suitcase}
            
            alt="Wallet"
            className="object-contain w-9 h-14"
            draggable={false}
            priority={true}
          />
        </div>

        {/* Inner Circle */}
        <div className="hidden md:block relative w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full border border-gray-200">
          {/* Inner Circle Icons (only left and right sides) */}
          <div className="w-20 h-20 center bg-[#FFF6F2] rounded-full absolute right-12 top-1/4 transform translate-x-1/2 -translate-y-1/2 px-3 py-5">
            <Image
              src={LargePlane}
              alt="LargePlane"
              className="object-contain w-14 h-11 "
              draggable={false}
              priority={true}
            />
          </div>
          <div className="absolute w-auto h-auto left-10 top-[18%] transform translate-x-1/2 -translate-y-1/2">
            <Image
              src={CloudIcon}
              alt="CloudIcon"
              className="object-contain w-12 h-12"

              draggable={false}
              priority={true}
            />
          </div>
          <div className="absolute w-auto h-auto left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={Kite}
              alt="Kite"
              className="object-contain w-12 h-12"

              draggable={false}
              priority={true}
            />
          </div>

          <div className="w-20 h-20  bg-[#F3F4F7] center rounded-full absolute right-0 bottom-[20%] transform -translate-x-1/2 translate-y-1/2 p-3">
            <Image
              src={CreditCards}
              alt="Credit Cards"
              className="object-contain w-12 h-12"

              draggable={false}
              priority={true}
            />
          </div>

          <div className="w-20 h-20 bg-[#F3F4F7] center rounded-full absolute left-14 bottom-[12%] transform translate-x-1/2 translate-y-1/2 p-3">
            <Image
              src={CreditCards2}
              alt="Credit Cards 2"
              className="object-contain w-12 h-12"

              draggable={false}
              priority={true}
            />
          </div>
        </div>

        <div className="absolute w-auto h-auto center flex-col gap-5 ">
          <h1 className="text-2xl md:text-4xl text-center selection:bg-secondary selection:text-white">
            Welcome to FinderJet <br />
            Your Trusted Partner in Recovering <br />
            Lost Items
          </h1>
          <h2 className="text-xl md:text-[28] text-center text-secondary">
            Effortlessly Locate and Recover Your Lost Items
          </h2>
          <PrimaryBtn text="Report lost items" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
