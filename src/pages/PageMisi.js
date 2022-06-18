import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Header/Navbar";
import Misi from "../components/Misi/Misi";
import { misiItems } from "../components/Misi/MisiData";
import Sponsor from "../components/Sponsor/Sponsor";

const PageMisi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {console.log(misiItems)}
      <div className={`${isOpen ? "fixed h-screen w-full" : ""} `}>
        <Navbar isOpen={isOpen} setIsOpen={toggle} />
        <Misi props={misiItems} />
        <Sponsor />
        <Footer />
      </div>
    </>
  );
};
export default PageMisi;
