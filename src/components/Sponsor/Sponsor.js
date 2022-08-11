import React from "react";
import "./Sponsor.css";
import logo from "../../assets/sponsor-logo-placeholder.jpg";
import telkom from "../../assets/sponsor/telkom.png";
import bri from "../../assets/sponsor/bri.png";
import evenciio from "../../assets/sponsor/evenciio.png";
import kowawa from "../../assets/sponsor/kowawa.png";
import cano from "../../assets/sponsor/cano.png";
import myrepublic from "../../assets/sponsor/myrepublic.png";
import sahuta from "../../assets/sponsor/sahuta.png";
import hipwee from "../../assets/sponsor/hipwee.png";
import a1 from "../../assets/sponsor/1pers.jpg";
import ffg from "../../assets/sponsor/frisian-flag.jpg";
import bantex from "../../assets/sponsor/bantex.png";
import fitbar from "../../assets/sponsor/fitbar.png";
import misterpotato from "../../assets/sponsor/misterpotato.png";
import pnmim from "../../assets/sponsor/pnmim.png";
import ponds from "../../assets/sponsor/ponds.png";
import smax from "../../assets/sponsor/smax.png";
const Sponsor = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-5 sm:px-10 md:px-10 lg:px-24 2xl:px-32 3xl:px-0">
      <div className="my-10">
        <div className="flex font-center py-4">
          <h2 className="font-sponsor text-2xl md:text-4xl">
            Sponsor dan Rekan Media
          </h2>
        </div>
        <div className="h-auto py-1 w-full bg-white flex flex-col space-y-2  rounded-xl shadow-xl transition-transform drop-shadow-sm overflow-hidden">
          {/* sponsor kecil */}
          <div className="horizontal-image space-x-[3%]">
            <img className="w-1/12 md:w-1/12" src={smax} alt="logo" />
            <img className="w-1/12 md:w-1/12" src={misterpotato} alt="logo" />
            <img className="w-1/12 md:w-1/12" src={a1} alt="logo" />
            <img className="w-1/12 md:w-1/12" src={telkom} alt="logo" />
            <img className="w-1/12 md:w-1/12" src={bri} alt="logo" />
            <img className="w-1/12 md:w-1/12" src={cano} alt="logo" />
            <img className="w-1/12 md:w-1/12 rounded-sm" src={hipwee} alt="logo"/>
          </div>


          {/* sponsor medium */}
          <div className="horizontal-image space-x-[3%] md:h-44 ">
            <img className="w-4/12 md:w-4/12" src={myrepublic} alt="logo" />
            <img className="w-3/12 md:w-2/12" src={sahuta} alt="logo" />
            <img className="w-4/12 md:w-3/12" src={evenciio} alt="logo" />
          </div>
          <div className="horizontal-image space-x-[3%] h-16 md:h-24">
            <img className="w-3/12 md:w-3/12" src={ponds} alt="logo" />
            <img className="w-3/12 md:w-3/12" src={fitbar} alt="logo" />
            <img className="w-3/12 md:w-2/12" src={bantex} alt="logo" />
          </div>


          <div className="horizontal-image space-x-[3%]">
            <img className="w-3/12 md:w-2/12" src={kowawa} alt="logo" />
            <img className="w-3/12 md:w-3/12" src={pnmim} alt="logo" />
            <img className="w-3/12 md:w-2/12" src={ffg} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
