import React, { useState } from 'react'
import Footer from '../components/footer/Footer';
import Navbar from '../components/Header/Navbar';
import NotFound from '../components/NotFound/NotFound';
import Sponsor from '../components/Sponsor/Sponsor';

const PageNotFound = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };
    return (
      <>
        <Navbar isOpen={isOpen} setIsOpen={toggle} />
        <NotFound />
        <Sponsor />
        <Footer />
      </>
    );
  };
export default PageNotFound