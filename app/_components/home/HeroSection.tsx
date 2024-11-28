import Image from "next/image";

import CloudIcon from "../../_assets/home/cloud.png";
import Binoculars from "../../_assets/home/blue-binoculars.png";
import CreditCards from "../../_assets/home/credit-card.png";
import CreditCards2 from "../../_assets/home/credit-cards2.png";
import LargePlane from "../../_assets/home/large-plane.png";
import SmallPlane from "../../_assets/home/plane.png";
import Magnifier from "../../_assets/home/magnifier.png";
import Suitcase from "../../_assets/home/suitcase.png";
import Wallet from "../../_assets/home/wallet.png";
import Kite from "../../_assets/home/kite.png";
import PrimaryBtn from "../buttons/PrimaryBtn";

const HeroSection = () => {
    return (
        <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden">
            {/* Outer Circle */}
            <div className="relative w-[700px] h-[700px] md:w-[900px] md:h-[900px] lg:w-[1100px] lg:h-[1100px] rounded-full border border-gray-200 flex items-center justify-center">
                {/* Outer Circle Icons (only left and right sides) */}

                <div className="bg-[#F3F4F7] rounded-full size-20 center absolute right-5 top-1/3 transform translate-x-1/2 -translate-y-1/2">
                    <Image src={Wallet} alt="Wallet" width={60} height={40} style={{ userSelect: 'none' }} draggable="false" />
                </div>
                <div className="bg-[#F3F4F7] rounded-full size-20 center absolute left-6 top-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <Image src={Binoculars} alt="Binoculars" width={60} height={47} style={{ userSelect: 'none' }} draggable="false" />
                </div>
                <div className="absolute right-1 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <Image src={SmallPlane} alt="SmallPlane" width={28} height={28} style={{ userSelect: 'none' }} draggable="false" />
                </div>
                <div className="bg-[#FFF6F2] rounded-full size-20 center  absolute right-6 bottom-1/3 transform translate-x-1/2 translate-y-1/2">
                    <Image src={Magnifier} alt="Magnifier" width={60} height={47} style={{ userSelect: 'none' }} draggable="false" />
                </div>
                <div className="bg-[#F3F4F7] rounded-full size-20 center  absolute left-6 bottom-1/3 transform -translate-x-1/2 translate-y-1/2">
                    <Image src={Suitcase} alt="Wallet" width={38} height={60} style={{ userSelect: 'none' }} draggable="false" />
                </div>

                {/* Inner Circle */}
                <div className="relative w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full border border-gray-200">
                    {/* Inner Circle Icons (only left and right sides) */}
                    <div className=" bg-[#FFF6F2] rounded-full size-20 center absolute right-12 top-1/4 transform translate-x-1/2 -translate-y-1/2">
                        <Image src={LargePlane} alt="LargePlane" width={60} height={28} style={{ userSelect: 'none' }} draggable="false" />
                    </div>
                    <div className="absolute left-6 top-[18%] transform translate-x-1/2 -translate-y-1/2">
                        <Image src={CloudIcon} alt="CloudIcon" width={64} height={47} style={{ userSelect: 'none' }} draggable="false" />
                    </div>
                    <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image src={Kite} alt="Kite" width={24} height={17} style={{ userSelect: 'none' }} draggable="false" />
                    </div>

                    <div className="bg-[#F3F4F7] rounded-full size-20 center absolute right-0 bottom-[20%] transform -translate-x-1/2 translate-y-1/2">
                        <Image src={CreditCards} alt="Credit Cards" width={40} height={40} style={{ userSelect: 'none' }} draggable="false" />
                    </div>

                    <div className="bg-[#F3F4F7] rounded-full size-20 center absolute left-14 bottom-[12%] transform translate-x-1/2 translate-y-1/2">
                        <Image src={CreditCards2} alt="Credit Cards 2" width={60} height={60} style={{ userSelect: 'none' }} draggable="false" />
                    </div>
                </div>
                <div className="absolute center flex-col gap-5">
                    <h1 className="text-center selection:bg-secondary selection:text-white">
                        Welcome to FinderJet <br />
                        Your Trusted Partner in Recovering <br />
                        Lost Items
                    </h1>
                    <h2 className="text-secondary">
                        Effortlessly Locate and Recover Your Lost Items
                    </h2>
                    <PrimaryBtn text="Report lost items"  />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
