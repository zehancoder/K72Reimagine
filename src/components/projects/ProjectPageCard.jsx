import React from "react";
import { Link } from "react-router-dom";
function ProjectPageCard({img, img2}) {
  return (
    <div className="w-full mb-4 flex-col lg:flex-row flex items-center gap-4 justify-between h-[600px]">
      <div className="lg:w-1/2 h-full cursor-pointer relative hover:rounded-[45px] duration-300 transition-all overflow-hidden">
        <img
          className="w-full h-full object-cover "
          src={img}
          alt=""
        />
        <div className="absolute h-full w-full top-0 left-0 hover:bg-black/35 opacity-0 hover:opacity-100 transition-all duration-300 ">
          <div className="absolute top-[50%] left-[50%] w-full text-center -translate-y-[50%] -translate-x-[50%] transform hover:block   font-[font2] uppercase md:text-4xl small:text-3xl text-xl lg:text-6xl font-bold  text-white  ">
            <Link to={"/projects"} className="flex justify-center">
              <p className="border-2 rounded-full pt-4 md:leading-7 leading-5 lg:leading-11  px-3 w-auto tracking-wide">
                Vior Le projet
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 h-full cursor-pointer relative hover:rounded-[45px] duration-300 transition-all overflow-hidden">
        <img
          className="w-full h-full object-cover "
          src={img2}
          alt=""
        />
        <div className="absolute h-full w-full top-0 left-0 hover:bg-black/35 opacity-0 hover:opacity-100 transition-all duration-300 ">
          <div className="absolute top-[50%] left-[50%] w-full text-center -translate-y-[50%] -translate-x-[50%] transform hover:block   font-[font2] uppercase md:text-4xl small:text-3xl text-xl lg:text-6xl font-bold  text-white  ">
            <Link to={"/projects"} className="flex justify-center">
              <p className="border-2 rounded-full pt-4 md:leading-7 leading-5 lg:leading-11  px-3 w-auto tracking-wide">
                Vior Le projet
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPageCard;
