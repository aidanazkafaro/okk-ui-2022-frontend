import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carouselCard from "../../assets/carousel-misi.png";
import RightArrow from "../../assets/right-arrow.svg";
import LeftArrow from "../../assets/left-arrow.svg";
import misiData from "./MisiData";
import MediaQuery from "react-responsive";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <MediaQuery minWidth={1270}>
        <img
          src={RightArrow}
          alt=""
          className={className}
          style={{
            ...style,
            display: "block",
            right: "calc(50% - 490px)",
            width: "30px",
            height: "20px",
          }}
          onClick={onClick}
        />
      </MediaQuery>
      <MediaQuery maxWidth={1270}>
        <img
          src={RightArrow}
          alt=""
          className={className}
          style={{
            ...style,
            display: "block",
            right: "12%",
            width: "30px",
            height: "20px",
          }}
          onClick={onClick}
        />
      </MediaQuery>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <MediaQuery minWidth={1270}>
        <img
          src={LeftArrow}
          alt=""
          className={className}
          style={{
            ...style,
            display: "block",
            left: "calc(50% - 490px)",
            "z-index": "1",
            width: "30px",
            height: "20px",
          }}
          onClick={onClick}
        />
      </MediaQuery>
      <MediaQuery maxWidth={1270}>
        <img
          src={LeftArrow}
          alt=""
          className={className}
          style={{
            ...style,
            display: "block",
            left: "12%",
            "z-index": "1",
            width: "30px",
            height: "20px",
          }}
          onClick={onClick}
        />
      </MediaQuery>
    </div>
  );
}

function Card(props) {
  const { title, content } = props;

  return (
    <div className={`relative`}>
      <div className={`flex items-center justify-center`}>
        <div className={`w-4/5 h-cardheight max-w-screen-lg`}>
          <div className={`flex items-center justify-center`}>
            <img src={carouselCard} className={`w-full h-cardheight`} alt="" />
          </div>
          <div className={`absolute w-4/5 h-4/5 top-10 max-w-screen-lg`}>
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
        </Slider>
      </div>
    );
  }
}