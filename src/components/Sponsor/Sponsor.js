import React from 'react'
import "./Sponsor.css"
import logo from "../../assets/sponsor-logo-placeholder.jpg"

const Sponsor = () => {
  return (
  <div className="">
    <div className="flex font-center py-4">
      <h2 className="font-sponsor text-4xl">Sponsor dan Rekan Media</h2>
    </div>
    <div className="h-auto py-1 px-5 w-10/12 bg-white flex flex-col space-y-2 mx-auto rounded-xl shadow-xl transition-transform drop-shadow-sm">

      <div className="horizontal-image">
        <img className="resize-image" src={logo} alt="logo" />
        <img className="resize-image" src={logo} alt="logo" />
        <img className="resize-image" src={logo} alt="logo" />
        <img className="resize-image" src={logo} alt="logo" />
        <img className="resize-image" src={logo} alt="logo" />
      </div>
      <div className="horizontal-image">
        <img className="resize-image" src={logo} alt="logo" />
        <img className="resize-image" src={logo} alt="logo" />
        <img className="resize-image" src={logo} alt="logo" />

      </div>
      
   
    
  </div>
</div>
  )
}

export default Sponsor