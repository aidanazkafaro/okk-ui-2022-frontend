import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/Header/Navbar";
import NotFound from "../components/NotFound/NotFound";
import Sponsor from "../components/Sponsor/Sponsor";

const PageNotFound = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${isOpen ? "fixed h-screen w-full" : ""} flex flex-col min-h-screen min-w-[300px]`}>
      <Navbar isOpen={isOpen} setIsOpen={toggle} />
      <NotFound />
      {/* <Sponsor /> */}
      <Footer />
    </div>
  );
};
export default PageNotFound;
