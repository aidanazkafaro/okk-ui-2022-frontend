import React from "react";
import "./HeaderCariKelompok.css";
import loop from "../../assets/crop-loop.svg";
import book from "../../assets/Written book.svg";
import garland from "../../assets/Garland.svg";
import CariKelompok from "./CariKelompok";

const HeaderCariKelompok = () => {
  return (
    <div className="w-full h-full">
      {/* header */}
      <section className="relative bg-[#F9E1CF] items-center flex -top-20 h-full">
        <div className="bg-header-carikelompok bg-cover w-full pt-36 header-bg-section sm:pt-36">
          <div className="flex items-center justify-center flex-col h-full">
            <h1 className="h1-title text-4xl mb-2 tracking-wide text-white font-bold xl:text-7xl lg:text-6xl lg:mb-8 md:text-5xl md:mb-7 sm:text-4xl sm:mb-7">
              Cari Kelompok
            </h1>
            <div className="relative flex items-center justify-center w-full">
              <img src={loop} alt="LOOP" className="w-1/2 sm:w-1/4" />
              <img
                src={book}
                alt="BOOK"
                className="absolute z-10 top-[47%] w-2/3 sm:w-2/5"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="relative garland-section">
        <img className="absolute garland" alt="" src={garland} />
      </div>
      {/* body */}
      <div className="carikelompok-body flex items-center max-w-[1400px] mx-auto px-5 sm:px-10 md:px-10 lg:px-24 2xl:px-32 3xl:px-0">
        {/* form-side */}
        <div className="p-0 md:w-1/2 mr-8">
          <div className="rounded-xl bg-[#364130] pt-28 pb-20 pl-10 flex items-center justify-center">
            <CariKelompok />
          </div>
        </div>
        {/* result-side */}
        <div className="p-0 md:w-1/2"></div>
      </div>
    </div>
  );
};

export default HeaderCariKelompok;
