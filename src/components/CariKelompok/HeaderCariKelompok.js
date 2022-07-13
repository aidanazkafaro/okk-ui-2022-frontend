import React from "react";
import "./HeaderCariKelompok.css";
import loop from "../../assets/crop-loop.svg";
import book from "../../assets/Written book.svg";
import garland from "../../assets/garland-carikelompok.png";

const HeaderCariKelompok = () => {
  return (
    <div className=" min-w-[350px]">
      {/* header */}
      <section className="relative bg-[#F9E1CF] items-center flex -top-20 h-full">
        <div className="bg-header-carikelompok bg-cover w-full pt-36 header-bg-section sm:pt-60">
          <div className="flex items-center justify-center flex-col h-full">
            <h1 className="h1-title text-4xl mb-2 tracking-wide text-white font-bold xl:text-7xl lg:text-6xl lg:mb-8 md:text-5xl md:mb-7 sm:text-4xl sm:mb-7">
              Cari Kelompok
            </h1>
            <div className="relative flex items-center justify-center w-full">
              <img src={loop} alt="LOOP" className="w-1/2 md:w-1/4" />
              <img
                src={book}
                alt="BOOK"
                className="absolute z-10 top-[47%] w-2/3 md:w-2/5"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="relative garland-section">
        <img className="absolute garland-carikelompok" alt="" src={garland} />
      </div>
    </div>
  );
};

export default HeaderCariKelompok;
