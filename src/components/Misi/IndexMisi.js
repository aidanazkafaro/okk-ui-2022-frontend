import React from "react";
import CustomArrows from "./slider";
import MediaQuery from "react-responsive";
import MobileCard from "./MobileSlider";
import { misiItems } from "./MisiData";

const IndexMisi = () => {
  return (
    <div className=" -mt-20 md:-mt-28 h-screen">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Signika:wght@700&display=swap"
        rel="stylesheet"
      ></link>
      <MediaQuery minDeviceWidth={767}>
        <div className={`flex items-center justify-center`}>
          <h1 className={`font-signika font-semibold rounded text-6xl mb-8 pb-1 border-orange-300 border-b-8`}>Misi</h1>
        </div>

        <CustomArrows misiItems={misiItems}/>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={767}>
        <div className={`flex items-center justify-center`}>
          <h1 className={`font-signika text-2xl`}>MISI</h1>
        </div>
        <div className={`flex items-center justify-center`}>
          <div
            className={`container w-16 h-1 bg-underlineOrange rounded-xl mb-4`}
          />
        </div>
        <MobileCard misiItems={misiItems}/>
      </MediaQuery>
    </div>
  );
};

export default IndexMisi;