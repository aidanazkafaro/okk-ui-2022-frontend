import React, { useState } from "react";
import CariKelompok from "../components/CariKelompok/CariKelompok";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Header/Navbar";
import Sponsor from "../components/Sponsor/Sponsor";
import HeaderCariKelompok from "../components/CariKelompok/HeaderCariKelompok";

const Kelompok = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${isOpen ? " fixed h-screen w-full" : ""} flex flex-col min-h-screen min-w-[350px]`}>
      <Navbar isOpen={isOpen} setIsOpen={toggle} />
      <HeaderCariKelompok />
      <CariKelompok />
      <Sponsor />
      <Footer />
    </div>
  );
};

export default Kelompok;
