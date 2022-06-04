import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Header/Navbar";
import Misi from "../components/Misi/Misi";
import Sponsor from "../components/Sponsor/Sponsor";
import { misiItems } from "../components/Misi/MisiData";

const PageMisi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={toggle} />
      <div className="p-10 md:px-32 md:pt-20">
      {misiItems.map((misiItem, id) => (
          <Misi misiItem={misiItem}/>
        ))}
      </div>
      <Sponsor />
      <Footer />
    </>
  );
};
export default PageMisi;
