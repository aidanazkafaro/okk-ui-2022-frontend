import React from "react";
import "./about.css";
import garland from "../../assets/Garland.png";
import illustration from "../../assets/illustration.svg";
import bigStar from "../../assets/star.svg";
import lilStar from "../../assets/star-small.svg";

const IndexAbout = () => {
  return (
    <section className="about-section" >
      <img
        className="lg:-mt-5 3xl:-mt-16"
        alt=""
        src={garland}
      />

      <img className="star lil-star1" alt="" src={lilStar} />
      <img className="star big-star" alt="" src={bigStar} />
      <img className="star lil-star2" alt="" src={lilStar} />

      <div id="index-about" className="about-article flex items-center max-w-[1400px] mx-auto px-5 sm:px-10 md:px-10 lg:px-24 2xl:px-32 3xl:px-0">
        <div className="about-left ">
          <h1 className="w-fit about-title font-semibold rounded text-6xl mb-8 pb-1 border-orange-300 border-b-8 ">
            OKK UI 2022
          </h1>
          <h2 className="about-content text-lg">
            Lorem imsum dolor sit amet, consectetur adipiscing elit. Faucibus
            dignissim purus lectus at amet accumsan, turpis tortor. Augue tortor
            curabitur elementum diam quisque et porttitor at. Sed magna odio
            ornare diam, id. Ac in et, amet, neque faucibus duis neque, dui. Sit
            porta quis arcu amet sed erat arcu et. Sit facilisi at ac cursus
            pulvinar interdum purus pharetra. Odio vel suspendisse tempus eu
            eget cras viverra augue. Purus suspendisse eu eget viverra sit.
            Egestas diam quis nunc, adipiscing nisl. Id leo sodales scelerisque
            vitae cras. Mi porttitor turpis tellus tempus donec ut donec
            consectetur ipsum. Dolor tincidunt egestas massa ut cursus pulvinar
            tellus tincidunt tellus. Amet fames libero eget elit.
          </h2>
        </div>
        <div className="about-right">
          <img className="illustration" alt="" src={illustration} />
        </div>
      </div>
    </section>
  );
};

export default IndexAbout;
