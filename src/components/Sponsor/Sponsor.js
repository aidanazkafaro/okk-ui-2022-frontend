import React from 'react'
import "./Sponsor.css"
import logo from "../../assets/sponsor-logo-placeholder.jpg"

const Sponsor = () => {
  return (
  <div class="">
    <div class="flex font-center py-4">
      <h2 class="font-sponsor text-4xl">Sponsor dan Rekan Media</h2>
    </div>
    <div class="h-auto py-1 px-5 w-10/12 bg-white flex flex-col space-y-2 mx-auto rounded-xl shadow-xl transition-transform drop-shadow-sm">

      <div class="horizontal-image">
        <img class="resize-image" src={logo} alt="logo" />
        <img class="resize-image" src={logo} alt="logo" />
        <img class="resize-image" src={logo} alt="logo" />
        <img class="resize-image" src={logo} alt="logo" />
        <img class="resize-image" src={logo} alt="logo" />
      </div>
      <div class="horizontal-image">
        <img class="resize-image" src={logo} alt="logo" />
        <img class="resize-image" src={logo} alt="logo" />
        <img class="resize-image" src={logo} alt="logo" />

      </div>
      
   
    
  </div>
</div>
  )
}

export default Sponsor