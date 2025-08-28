import React from "react";
import { Link } from "react-router-dom";

function HomeBottomText() {
  return (
    <div className="font-[font2] uppercase md:text-5xl small:text-4xl text-3xl lg:text-6xl font-bold flex text-white items-center justify-center gap-2 small:flex-row flex-col">
      <Link to={"/projects"} className="bottomText ">
      
        Projects
      </Link>
      <Link to={"/agence"} className="bottomText">
        agence
      </Link>
    </div>
  );
}

export default HomeBottomText;
