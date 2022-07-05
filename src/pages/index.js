import React, { useState } from "react";
import Navbar from "../components/Header/Navbar";
import HeroArea from "../components/HeroSection/HeroArea";
import IndexAbout from "../components/About/IndexAbout";
import IndexMisi from "../components/Misi/IndexMisi";
import OurContent from "../components/Content/OurContent";
import Timeline from "../components/Timeline/indexTimeline";
import Footer from "../components/footer/Footer";
import Sponsor from "../components/Sponsor/Sponsor";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${isOpen ? "fixed h-screen w-full" : ""} min-w-[300px]`}>
      <Navbar isOpen={isOpen} setIsOpen={toggle} />
      <HeroArea />
      <IndexAbout />
      <IndexMisi />
      <Timeline />
      <OurContent />
      <Sponsor />
      <Footer />
    </div>
  );
};

export default Home;