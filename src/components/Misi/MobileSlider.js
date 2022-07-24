import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselCard from "../../assets/carousel-misi-mobile.png";
import "./sliderMisi.css";
import RightArrow from "../../assets/right-arrow.svg";
import LeftArrow from "../../assets/left-arrow.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={RightArrow}
      alt=""
      className={className}
      style={{
        ...style,
        display: "block",
        right: "15%",
        top: "92.5%",
        width: "40px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={LeftArrow}
      alt=""
      className={className}
      style={{
        ...style,
        display: "block",
        left: "15%",
        zIndex: "1",
        top: "92.5%",
        width: "40px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

function Card(props) {
  const { judul, deskripsi, misiKe, logo } = props;

  return (
    <div className={`relative`}>
      <div className={`flex items-center justify-center`}>
        <div className={`w-4/5 h-cardheightmobile`}>
          <div className={`flex items-center justify-center`}>
            <img
              src={carouselCard}
              className={`w-full h-cardheightmobile`}
              alt=""
            />
          </div>
          {/* button selengkapnya */}
          <div className={`absolute w-4/5 h-cardheightmobile top-0 z-10`}>
            <div className="absolute top-[89%] w-full h-cardheightmobile">
              <div className="flex items-center justify-center">
                <a href={"/Misi"}>
                  <button
                    type="button"
                    className={`text-center font-semibold text-base font-signika h-9 w-36 px-6 bg-underlineOrange rounded-2xl shadow-md shadow-slate-500 `}
                  >
                    Selengkapnya
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className={`absolute w-4/5 h-cardheightmobile top-9 px-7 `}>
            <div className="flex items-center justify-center">
              <div className="h-2/3 w-2/3 sm:h-1/2 sm:w-1/2">
                <div className={`w-full h-full`}>
                  <img
                    src={logo}
                    className={`max-h-full max-w-full w-full`}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="font-poppins text-3xl font-bold mt-8 text-center">
              {misiKe}
            </div>
            <div className="font-poppins text-2xl font-bold mt-2 text-center">
              {judul}
            </div>
            <div
              className={`lines font-poppins text-lg font-normal mt-2 text-center`}
            >
              {deskripsi}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileCard({ misiItems }) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        {misiItems.map((obj, index) => {
          return (
            <Card
              key={index}
              judul={obj.judul}
              deskripsi={obj.deskripsi}
              misiKe={obj.misiKe}
              logo={obj.logo}
            />
          );
        })}
      </Slider>
    </div>
  );
}
