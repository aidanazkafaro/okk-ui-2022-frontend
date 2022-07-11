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
        className="start-about-section lg:-mt-5 3xl:-mt-16"
        alt=""
        src={garland}
      />

      <img className="star lil-star1" alt="" src={lilStar} />
      <img className="star big-star" alt="" src={bigStar} />
      <img className="star lil-star2" alt="" src={lilStar} />

      <div className="about-article flex items-center max-w-[1400px] mx-auto px-5 sm:px-10 md:px-10 lg:px-24 2xl:px-32 3xl:px-0">
        <div id="index-about" className="about-left pt-12">
          <h1 className="w-fit about-title font-semibold rounded text-6xl mb-8 pb-1 border-orange-300 border-b-8 ">
            OKK UI 2022
          </h1>
          <h2 className="about-content text-lg">
          OKK atau Orientasi Kehidupan Kampus merupakan kegiatan pengenalan dan pembinaan kehidupan kampus kepada mahasiswa baru Universitas Indonesia. OKK  merupakan awal terciptanya <span className="about-highlight">kebersamaan</span> antarseluruh mahasiswa untuk dapat saling mengenal dan memperkenalkan arah kontribusi yang terdapat di Universitas Indonesia. Sebagai momen <span className="about-highlight">eksplorasi diri</span>, OKK UI 2022 menyadarkan mahasiswa untuk mengenal peranan sebagai mahasiswa dengan pengenalan nilai dasar Universitas Indonesia. <span className="about-highlight">Bersama bereksplorasi</span>, OKK UI 2022 memiliki <span className="about-highlight">Oka-Oki</span> sebagai teman <span className="about-highlight">bertumbuh</span> para mahasiswa. Rangkaian acara OKK UI 2022 menjadi pintu bagi mahasiswa untuk terus <span className="about-highlight">berproses</span> hingga menjadi pribadi yang <span className="about-highlight">bermanfaat</span>. Dengan <span className="about-highlight">kreativitas dan berbagi</span> rasa melalui <span className="about-highlight">ketiga misi</span>, mari hidupkan harmoni <span className="about-highlight">'Buku, Pesta, dan Cinta'</span> dan ukir cerita kalian sebagai <span className="about-highlight">mahasiswa UI</span>. 
          </h2>
        </div>
        <div className="about-right mt-14 -mb-16">
          <img className="illustration" alt="" src={illustration}/>
        </div>
      </div>
    </section>
  );
};

export default IndexAbout;
