import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselCard from "../../assets/carousel-misi.png";
import RightArrow from "../../assets/right-arrow.png";
import LeftArrow from "../../assets/left-arrow.png";
import misiData from "./MisiData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src={RightArrow}
      alt=""
      className={className}
      style={{ ...style, display: "block", right: "12%" }}
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
      style={{ ...style, display: "block", left: "12%", "z-index": "1" }}
      onClick={onClick}
    />
  );
}

function Card(props) {
  const { title, content } = props;

  return (
    <div className={`relative`}>
      <div className={`flex items-center justify-center`}>
        <div className={`w-4/5 h-cardheight`}>
          <div className={`flex items-center justify-center`}>
            <img src={carouselCard} className={`w-full h-cardheight`} alt="" />
          </div>
          <div className={`absolute w-4/5 h-4/5 top-10`}>
            <div className={`px-24 grid grid-cols-2 gap-6`}>
              <div className={`w-full h-full`}></div>
              <div className={`grid grid-rows-7 gap-5`}>
                <div className="w-44 h-10 font-poppins text-3xl font-bold mt-7">
                  {title}
                </div>

                {/* konten misi */}
                <div className={`h-full w-full row-span-2`}>
                  <div
                    className={`line-clamp-5 font-poppins text-lg font-normal`}
                  >
                    {content}
                  </div>
                </div>
                {/* button selengkapnya */}
                <div className={`w-full h-20`}>
                  <a href={"/PageMisi"}>
                    <button
                      type="button"
                      className={`font-bold font-signika h-14 w-48 px-6 py-4 bg-underlineOrange rounded-2xl shadow-md shadow-slate-500 `}
                    >
                      Selengkapnya
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default class CustomArrows extends Component {
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
          {/* <Card />
          <Card />
          <Card /> */}
        </Slider>
      </div>
    );
  }
}
