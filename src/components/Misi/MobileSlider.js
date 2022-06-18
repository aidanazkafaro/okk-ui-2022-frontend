import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselCard from "../../assets/carousel-misi-mobile.png";
import rectangleMobile from "../../assets/Rectangle.png";
import RightArrow from "../../assets/right-arrow.svg";
import LeftArrow from "../../assets/left-arrow.svg";
import misiData from "./MisiData";

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
        "z-index": "1",
        top: "92.5%",
        width: "40px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

function Card(props) {
  const { title, content } = props;

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
                <a href={"/PageMisi"}>
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
            <div className={`flex items-center justify-center h-1/3`}>
              <img src={rectangleMobile} className={``} alt="" />
            </div>

            <div className={`grid grid-rows-8 gap-1`}>
              <div className="w-44 h-full font-poppins text-2xl font-bold mt-7">
                {title}
              </div>

              {/* konten misi */}
              <div className={`h-full w-full row-span-2`}>
                <div
                  className={`line-clamp-6 font-poppins text-lg font-normal`}
                >
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class MobileCard extends Component {
  render() {
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
          {misiData.map((obj, index) => {
            return (
              <Card key={obj.id} title={obj.title} content={obj.content} />
            );
          })}
        </Slider>
      </div>
    );
  }
}
