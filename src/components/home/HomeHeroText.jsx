import React from "react";
import Video from "./Video";

function HomeHeroText() {
  return (
    <div>
      <div className="md:text-7xl md:mt-0 mt-16 lg:leading-[150px] small:text-5xl text-5xl lg:text-[150px] text-white pt-2 text-center font-[font1] uppercase">
        <h1 className="">L'étincelle</h1>
        <div className="flex justify-center items-center ">
          qui
          <div className="md:w-64 w-44 lg:w-80 md:h-24 h-18 lg:h-32 overflow-hidden rounded-full">
            <Video />
          </div>
          génère
        </div>
        <h1 className="">la créativité</h1>
      </div>
    </div>
  );
}

export default HomeHeroText;
