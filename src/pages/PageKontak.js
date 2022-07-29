import React, { useState } from "react";
import Kontak from "../components/Kontak/Kontak";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Header/Navbar";
import Sponsor from "../components/Sponsor/Sponsor";

const PageKontak = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${isOpen ? "fixed h-screen w-full" : ""} flex flex-col min-h-screen min-w-[300px]`}>
      <Navbar isOpen={isOpen} setIsOpen={toggle} />
      
      <Kontak />
      <Sponsor />
      <Footer />
    </div>
  );
};

export default PageKontak;
