import React from "react";
import CustomArrows from "./slider";

function Card() {
  return <CustomArrows />;
}

const IndexMisi = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Signika:wght@700&display=swap"
        rel="stylesheet"
      ></link>
      <div className={`flex items-center justify-center`}>
        <h1 className={`font-signika text-7xl`}>MISI</h1>
      </div>
      <div className={`flex items-center justify-center`}>
        <div
          className={`container w-64 h-3 bg-underlineOrange rounded-xl mb-11`}
        />
      </div>
      <Card />
    </div>
  );
};

export default IndexMisi;
