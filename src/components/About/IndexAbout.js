import React from 'react'

// local:
import "./about.css";
// import bookBG from "../../assets/book bg.png";
// import bookHalfBG from "../../assets/book half bg.png";

// import '../../index.css'; // after pull again

const IndexAbout = () => {
  return (
    <section className="about-section">

    {/* <img className="book-bg" alt="" src={bookBG} />
    <img className="book-half-bg" alt="" src={bookHalfBG} /> */}

{/* .about-div */}
    <div className="about-article bg-empty-book-bg bg-cover no-repeat"> 
    <h1 className="about-title text-5xl font-semibold underline decoration-[#e1aa43] decoration-8 underline-offset-8 ">OKK UI 2022</h1>

    <h2 className="about-content text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Faucibus dignissim purus lectus at amet accumsan, turpis tortor. 
      Augue tortor curabitur elementum diam quisque et porttitor at. 
      Sed magna odio ornare diam, id. Ac in et, amet, neque faucibus duis neque, dui.
      Sit porta quis arcu amet sed erat arcu et. Sit facilisi at ac cursus pulvinar interdum purus pharetra. Odio vel suspendisse tempus eu eget cras viverra augue. Purus suspendisse eu eget viverra sit. 
      Egestas diam quis nunc, adipiscing nisl. Id leo sodales scelerisque vitae cras. Mi porttitor turpis tellus tempus donec ut donec consectetur ipsum. Dolor tincidunt egestas massa ut cursus pulvinar tellus tincidunt tellus. Amet fames libero eget elit.
    </h2>
    </div>

    </section>
  )
}

export default IndexAbout