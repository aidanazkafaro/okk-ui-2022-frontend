import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Header/Navbar";
import Misi from "../components/Misi/Misi";
import Sponsor from "../components/Sponsor/Sponsor";

const PageMisi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${isOpen ? "fixed h-screen w-full" : ""} `}>
      <Navbar isOpen={isOpen} setIsOpen={toggle} />
      <Misi/>
      <Sponsor />
      <Footer />
    </div>
  );
};
export default PageMisi;
