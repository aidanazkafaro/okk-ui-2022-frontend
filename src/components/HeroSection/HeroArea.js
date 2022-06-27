import React from "react";
import "./hero.css";
import loop from "../../assets/LOOP.png";

const HeroArea = () => {
  return (
    <>
      <section className="bg-[#F9E1CF] relative items-center flex -top-20">
        <div
          className="bg-hero-bg bg-cover no-repeat w-full hero-section 
        lg:py-4 md:px-10 sm:px-10 px-5 lg:px-24 py-4 md:py-6 2xl:px-48 overflow-hidden "
        >
          <div className="container relative w-full h-full m-auto text-center items-center flex flex-wrap ">
            <div className=" relative text-left md:w-8/12 lg:w-6/12 xl:w-6/12 my-auto z-10">
              <h1 className="h1-shadow text-6xl tracking-wide text-white  lg:text-8xl  mb-2">
                OKK UI
              </h1>
              <h1 className="h1-shadow text-6xl tracking-wide text-white lg:text-8xl">
                2022
              </h1>
              <h2 className="text-2xl tracking-wide text-white lg:text-3xl my-2">
                Some text explaining OKK UI
              </h2>
              <h3 className="text-xl tracking-wide text-white lg:text-2xl my-2 italic">
                #BersamaBereksplorasi
              </h3>

              <div className="mt-6">
                {/* <a
                  href="#"
                  className="inline-block text-lg px-3 py-2 font-semibold tracking-wider text-center text-white transition-colors duration-200 transform bg-[#E1AA43] rounded-xl hover:bg-[#F9E1CF] hover:text-[#E1AA43] w-52 h-12"
                >
                  Tentang
                </a> */}
                <button type="button" class="inline-block px-6 py-2.5 bg-[#E1AA43] text-white font-medium text-xs leading-tight uppercase rounded-xl shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out">Tentang OKK UI</button>

              </div>
            </div>

            <img className="loop" alt="LOOP" src={loop} />
          </div>
        </div>
        {/* <img className="z-20" alt="Buku" src={plainBook} /> */}
      </section>
    </>
  );
};

export default HeroArea;
