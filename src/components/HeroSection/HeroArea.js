import React from "react";
import "./hero.css";
import loop from "../../assets/LOOP.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "@mui/material";

const HeroArea = () => {
  return (
    <>
      <section className="bg-[#F9E1CF] relative items-center flex -top-20">
        <div
          className="bg-hero-bg bg-cover no-repeat w-full hero-section px-5 sm:px-10 md:px-10 lg:px-24 2xl:px-48
        lg:py-4 py-4 md:py-6 overflow-hidden"
        >
          <div className="container relative w-full h-full max-w-[1400px] m-auto text-center items-center flex flex-wrap ">
            <div className=" relative text-left md:w-8/12 lg:w-6/12 xl:w-6/12 my-auto z-10">
              <h1 className="h1-shadow text-6xl tracking-wide text-white  lg:text-8xl  mb-2">
                OKK UI
              </h1>
              <h1 className="h1-shadow text-6xl tracking-wide text-white lg:text-8xl">
                2022
              </h1>
              <h2 className="text-2xl tracking-wide text-white lg:text-3xl my-2">
                Buku, Pesta, dan Cinta
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
                <Button variant="contained" style={{
                  backgroundColor: "#E1AA43"
                }}>

                  <Link
                    activeClass="active"
                    to="index-about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Tentang OKK UI
                  </Link>
                </Button>
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
