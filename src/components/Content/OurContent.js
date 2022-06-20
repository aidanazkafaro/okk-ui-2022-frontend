import React from 'react'
import getYouTubeID from 'get-youtube-id';
import YoutubeEmbed from './Video';
import './Content.css';

const OurContent = () => {
  var id1 = getYouTubeID("https://www.youtube.com/watch?v=slcbfbA7--E");
  var id2 = getYouTubeID("https://www.youtube.com/watch?v=gI1PlWKFAJk");
  var id3 = getYouTubeID("https://www.youtube.com/watch?v=cfgHnkuVn6Y");
  var id4 = getYouTubeID("https://www.youtube.com/watch?v=ubN8qHHi_Vw");
  var id5 = getYouTubeID("https://www.youtube.com/watch?v=NRJCWX4MAqg");
  // var id6 = getYouTubeID("https://www.youtube.com/watch?v=Q6aJuwqV2ZQ");

  return (
    <div className = "content">
      <div className = "mx-12 my-8 py-8">
        <div className = "content-area md:text-left text-center">
          <h1 className = "text-6xl mb-8 pb-4 border-orange-300 border-b-8"> Content </h1>
        </div>
        <div className = "content-area ">
          <YoutubeEmbed embedId = {id1}/>
          <div className = "flex justify-center flex-col mb-10">
            <h2 className = "text-5xl md:block hidden"> Lebih dekat dengan OKK UI </h2>
            <p className = "text-lg mt-4 md:text-left text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
        </div>
        <div className = "content-area-2 mt-12 md:h-52 grid grid-cols-2 gap-8">
            <YoutubeEmbed embedId = {id2}/>
            <YoutubeEmbed embedId = {id3}/>
            <YoutubeEmbed embedId = {id5}/>
            <YoutubeEmbed embedId = {id4}/>
        </div>

        <div className = "content-area md:text-right text-center mt-8">
          <a href = "https://www.youtube.com/channel/UCKHfpWWWmXznpsiTswayd0g/videos" target = "_blank" rel="noreferrer">
            <button className = "py-2 px-12 bg-[#E1AA43] hover:bg-[#f0c864] duration-500 font-bold rounded-2xl"> See more </button>
          </a>
        </div>
      </div>
    </div>
  )

}

export default OurContent;