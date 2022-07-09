import React from "react";
import { TimelineData } from "./TimelineData";
import Stopwatch from "../../assets/stopwatch.png"
import "./timeline.css";


const Timeline = () => {
  return (
    <>
      <div className="relative">
        <img className="absolute md:top-10 top-24 xl:-top-10 right-0 w-[400px] h-[1200px] xl:w-[400px] xl:h-[1400px]" src={Stopwatch} alt="OKK UI"></img>
      </div>
      <div className="xl:mx-12 md:mx-10 mx-3 py-8">
        <div className={`flex items-center justify-center`}>
          <h1
            className={`font-signika font-semibold rounded text-6xl pb-1 border-orange-300 border-b-8 mb-32`}
          >
            Timeline
          </h1>
        </div>
        <div className="antialiased bg-white text-gray-800">
          <div className="relative container mx-auto px-6 flex flex-col">
            <div className="absolute z-0 w-2 h-full rounded-lg bg-[#9F6D55] shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0">
            </div>
            {TimelineData.map((timeline, id) => (
              <div key={id} className="relative z-10">
                <div className="h-8 w-8 md:h-16 md:w-16 xl:h-16 xl:w-16 object-cover mt-20 bg-[#E1AA43] rounded-full shadow-md border-4 border-[#F9E1CF] xs:absolute md:mx-auto md:left-0 md:right-0" />
                <div
                  className={`${id % 2 === 0
                      ? "relative md:w-1/2 md:ml-0 -mt-36 xs:pl-28 xs:pt-0 md:mr-auto md:pl-0 md:pr-16"
                      : "relative md:w-1/2 md:ml-auto xs:pl-28 xs:pt-0 md:pl-16 -mt-36"
                    }`}
                >

                  <div className={`"mb-3 ml-10 mt-12 hover:text-white xl:mt-0 md:mt-0 border-b-1 xl:p-10 md:p-8 p-5 rounded-3xl shadow-lg xl:ml-0 md:ml-0 ml-12" ${id % 2 === 0 ? "hover:bg-[#9F6D55] bg-[#F9E1CF]" : "hover:bg-[#9F6D55] bg-[#E1AA43]"}`}>
                    <span className="font-bold text-sm tracking-wide">{timeline.date}</span>

                    <h2 className="xl:text-2xl md:text-xl text-lg font-bold pt-1">{timeline.title}</h2>
                    <p className="pt-1 xl:text-lg md:text-md text-sm">{timeline.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Timeline;

