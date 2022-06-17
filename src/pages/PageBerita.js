import React, { useState } from "react";
import Berita from "../components/Berita/Berita";
import CariKelompok from "../components/CariKelompok/CariKelompok";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Header/Navbar";
import Sponsor from "../components/Sponsor/Sponsor";

const Kelompok = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={toggle} />

      <Berita />
      <Sponsor />
      <Footer />
    </>
  );
};

export default Kelompok;
