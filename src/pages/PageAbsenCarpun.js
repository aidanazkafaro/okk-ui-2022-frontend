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
      <div data-tf-widget="KS6YMyQg" data-tf-hide-headers data-tf-iframe-props="title=My typeform" data-tf-medium="snippet" style={`width:80%;height:400px;`}></div><script src="//embed.typeform.com/next/embed.js"></script>      {/* <Sponsor /> */}
      <Footer />
    </div>
  );
};
export default PageNotFound;
