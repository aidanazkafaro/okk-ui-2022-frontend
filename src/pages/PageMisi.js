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
      <div className={`${isOpen ? "fixed h-screen w-full" : ""} flex flex-col min-h-screen min-w-[300px]`}>
        <Navbar isOpen={isOpen} setIsOpen={toggle} />
        <div className="p-5 mb-28 md:pt-20">
          {misiItems.map((misiItem, id) => (
            <Misi key={id} misiItem={misiItem} disable={misiItem.disable} />
          ))}
        </div>
        {/* <Sponsor /> */}
        <div className="relative mt-auto bottom-0 w-screen">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default PageMisi;
