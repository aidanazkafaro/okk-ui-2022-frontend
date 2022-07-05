import React from "react";
import "./Sponsor.css";
import logo from "../../assets/sponsor-logo-placeholder.jpg";

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
          <div className="horizontal-image">
            <img className="resize-image" src={logo} alt="logo" />
            <img className="resize-image" src={logo} alt="logo" />
            <img className="resize-image" src={logo} alt="logo" />
            <img className="resize-image" src={logo} alt="logo" />
            <img className="resize-image" src={logo} alt="logo" />
          </div>
          <div className="horizontal-image">
            <img className="resize-image" src={logo} alt="logo" />
            <img className="resize-image" src={logo} alt="logo" />
            <img className="resize-image" src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
