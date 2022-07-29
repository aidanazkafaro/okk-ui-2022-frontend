import React from "react";
import "./Sponsor.css";
import logo from "../../assets/sponsor-logo-placeholder.jpg";
import telkom from "../../assets/sponsor/telkom.png"
import bri from "../../assets/sponsor/bri.png"
import evenciio from "../../assets/sponsor/evenciio.png"
import kowawa from "../../assets/sponsor/kowawa.png"
import cano from "../../assets/sponsor/cano.png"
import myrepublic from "../../assets/sponsor/myrepublic.png"
import sahuta from "../../assets/sponsor/sahuta.png"

const Sponsor = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-5 sm:px-10 md:px-10 lg:px-24 2xl:px-32 3xl:px-0">
      <div className="my-10">
        <div className="flex font-center py-4">
          <h2 className="font-sponsor text-2xl md:text-4xl">
            Sponsor dan Rekan Media
          </h2>
        </div>
        <div className="h-auto py-1 w-full bg-white flex flex-col space-y-2  rounded-xl shadow-xl transition-transform drop-shadow-sm">
          <div className="horizontal-image space-x-[6%]">
            <img className="w-2/12 md:w-1/12" src={telkom} alt="logo" />
            <img className="w-2/12 md:w-1/12" src={bri} alt="logo" />
            <img className="w-2/12 md:w-1/12" src={cano} alt="logo" />
            <img className="w-3/12 md:w-2/12" src={kowawa} alt="logo" />
          </div>
          <div className="horizontal-image space-x-[6%]">
            <img className="w-4/12 md:w-4/12" src={myrepublic} alt="logo" />
            <img className="w-3/12 md:w-2/12" src={sahuta} alt="logo" />
            <img className="w-4/12 md:w-3/12" src={evenciio} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
