import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import Stairs from "../components/common/Stairs";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
function FullScreenNav({ navOpen, setNavOpen }) {
  useGSAP(() => {
    gsap.from(".stairs2", {
      height: 0,
    });
    gsap.to(".closeBar", {
      x: 140,
      duration: 0.1,
    });
  }, []);
  const handleClose = () => {
    setNavOpen(false);
    const tl = gsap.timeline();
    // close menu bar
    tl.to(".closeBar", {
      x: 140,
      delay: 0,
    });
    // single nav linkses

    tl.to(".link", {
      rotateX: 45,
      opacity: 0,
      stagger: {
        amount: -0.25,
      },
    });
    // navigation links
    tl.to(".navLinks", {
      display: "none",
    });

    // animated stairs
    tl.to(".stairs2", {
      height: "0",
      delay: 0.1,
      stagger: {
        amount: -0.3,
      },
    });
    //menu hambarger
    tl.to(".menuBar", {
      display: "flex",
    });
    // animated stairs parent
    tl.to(".stairsParent", {
      display: "none",
    });
  };

  return (
    <div className="overflow-hidden">
      {/* close menu */}
      <div
        className={`z-50 absolute p-3 top-0 right-0 cursor-pointer closeMenu transition closeBar overflow-hidden
        `}
        onClick={handleClose}
      >
        <div className="relative h-28 w-28 overflow-hidden ">
          <div className="h-44 w-0.5 bg-white -rotate-45 origin-top menuLine"></div>
          <div className="h-44 w-0.5 bg-white top-0 right-0 absolute menuLine rotate-45 origin-top"></div>
        </div>
      </div>
      {/* animation */}

      <div className="h-screen w-screen fixed top-0 z-10 overflow-hidden stairsParent">
        <div className="h-full w-full flex">
          <div className="w-1/5 h-full bg-black stairs2"></div>
          <div className="w-1/5 h-full bg-black stairs2"></div>
          <div className="w-1/5 h-full bg-black stairs2"></div>
          <div className="w-1/5 h-full bg-black  stairs2"></div>
          <div className="w-1/5 h-full bg-black stairs2"></div>
        </div>
      </div>

      <div
        id="fullscrennav"
        className="absolute hidden navLinks z-30 text-white top-0 h-screen w-screen "
      >
        <div className="-z-30">
          <div className="allLinks">
            <Link to={"/projects"} className="link">
              <div
                id="link"
                className="relative  hoverEffect flex items-center hover:border-none transition-all duration-300 justify-center h-28 lg:h-40 border-y cursor-pointer border-[#ffffff80]  leading-none md:mt-20 mt-16 lg:mt-36"
              >
                <h1 className="text-[9vw]  w-full  text-center md:text-[8vw] lg:text-[6vw] uppercase font-[font2]">
                  Projects
                </h1>
                <div className="absolute h-full w-full top-0 z-50 bg-[#D3FD50] translateItem"></div>
                <div className="absolute textTransfrom z-50 h-full transition-all  flex top-0  text-black">
                  <div className="flex moveX items-center gap-3 border-white py-2">
                    <h2 className="text-[9vw] whitespace-nowrap border-white text-center md:text-[8vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Voir
                    </h2>

                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt=""
                    />
                    <h2 className="text-[8vw] whitespace-nowrap border-white text-center md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Voir
                    </h2>
                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex moveX  overflow-x-auto items-center gap-3 border-white">
                    <h2 className="text-[8vw] whitespace-nowrap border-white text-center md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Voir
                    </h2>

                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt=""
                    />
                    <h2 className="text-[8vw] whitespace-nowrap border-white text-center md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Voir
                    </h2>
                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            {/* link 2 */}
            <Link to={"/agence"} className="link">
              <div
                id="link"
                className="relative origin-top  cursor-pointer hoverEffect flex items-center hover:border-none transition-all duration-300 justify-center h-28 lg:h-40 border-b border-[#ffffff80]   leading-none "
              >
                <h1 className="text-[9vw]  w-full  text-center md:text-[8vw] lg:text-[6vw] uppercase font-[font2]">
                  Agence
                </h1>
                <div className="absolute h-full w-full top-0 z-50 bg-[#D3FD50] translateItem"></div>
                <div className="absolute textTransfrom z-50 h-full transition-all  flex top-0  text-black">
                  <div className="flex moveX items-center gap-3 border-white py-2">
                    <h2 className="text-[9vw] whitespace-nowrap border-white text-center md:text-[8vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Savoir
                    </h2>

                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/teamMembers/SophieA_640X290-640x290.jpg"
                      alt=""
                    />
                    <h2 className="text-[8vw] whitespace-nowrap border-white text-center md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Savoir
                    </h2>
                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex moveX  overflow-x-auto items-center gap-3 border-white">
                    <h2 className="text-[8vw] whitespace-nowrap border-white text-center md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Savoir
                    </h2>

                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/teamMembers/SophieA_640X290-640x290.jpg"
                      alt=""
                    />
                    <h2 className="text-[8vw] whitespace-nowrap border-white text-center md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Savoir
                    </h2>
                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/teamMembers/blank_copie_2-640x290.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            {/* link 3 */}
            <Link to={"/contact"} className="link">
              <div
                id="link"
                className="relative  origin-top cursor-pointer hoverEffect flex items-center hover:border-none transition-all duration-300 justify-center h-28 lg:h-40 border-b border-[#ffffff80]  leading-none "
              >
                <h1 className="text-[9vw]  w-full  text-center md:text-[8vw] lg:text-[6vw] uppercase font-[font2]">
                  Contact
                </h1>
                <div className="absolute h-full w-full top-0 z-50 bg-[#D3FD50] translateItem"></div>
                <div className="absolute textTransfrom z-50 h-full transition-all  flex top-0  text-black">
                  <div className="flex moveX items-center gap-3 border-white py-2">
                    <h2 className="text-[9vw] whitespace-nowrap border-white text-center md:text-[8vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Voir
                    </h2>

                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt=""
                    />
                    <h2 className="text-[8vw] whitespace-nowrap border-white text-center md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Voir
                    </h2>
                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex moveX  overflow-x-auto items-center gap-3 border-white">
                    <h2 className="text-[8vw] whitespace-nowrap border-white text-center md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Voir
                    </h2>

                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt=""
                    />
                    <h2 className="text-[8vw] whitespace-nowrap border-white text-center md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Voir
                    </h2>
                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            {/* link 4 */}
            <Link to={"/bloge"} className="link">
              <div
                id="link"
                className="relative  origin-top cursor-pointer hoverEffect flex items-center hover:border-none transition-all duration-300 justify-center h-28 lg:h-40 border-b border-[#ffffff80]  leading-none "
              >
                <h1 className="text-[9vw]  w-full  text-center md:text-[8vw] lg:text-[6vw] uppercase font-[font2]">
                  Blogue
                </h1>
                <div className="absolute h-full w-full top-0 z-50 bg-[#D3FD50] translateItem"></div>
                <div className="absolute textTransfrom z-50 h-full transition-all  flex top-0  text-black ">
                  <div className="flex moveX items-center gap-3 border-white py-2">
                    <h2 className="text-[9vw] whitespace-nowrap border-white text-center md:text-[8vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Voir
                    </h2>

                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                      alt=""
                    />
                    <h2 className="text-[8vw] whitespace-nowrap border-white text-center md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Voir
                    </h2>
                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                      alt=""
                    />
                  </div>
                  <div className="flex moveX  overflow-x-auto items-center gap-3 border-white">
                    <h2 className="text-[8vw] whitespace-nowrap border-white text-center md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Voir
                    </h2>

                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                      alt=""
                    />
                    <h2 className="text-[8vw] whitespace-nowrap border-white text-center md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">
                      Pour Tout Voir
                    </h2>
                    <img
                      className="shrink-0  lg:h-[100px] xl:h-[100px]  object-cover rounded-full lg:w-64 md:h-[75px] small:h-[55px] h-[45px] md:w-[170px] small:w-[150px] w-[90px]"
                      src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
            {/* menu cross icons */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenNav;
