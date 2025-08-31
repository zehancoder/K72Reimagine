import React, { useState } from "react";
import FullScreenNav from "./FullScreenNav";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Navber() {
  const [navOpen, setNavOpen] = useState(false);

  useGSAP(() => {
    // animated staris
    gsap.to(".stairs2", {
      height: 0,
    });
    // navlinks pages links
    gsap.to(".navLinks", {
      display: "none",
    });
    // animated stairs parent
    gsap.to(".stairsParent", {
      display: "none",
    });
    // menu close bar
    gsap.to(".closeBar", {
      x: 140,
      duration: 0.1
    })
  }, []);
  const handleOpen = () => {
    setNavOpen(true)
    const tl = gsap.timeline();
    //  menu bar
    gsap.to(".menuBar", {
      display: "none"
    })
    // stair parent
    gsap.to(".stairsParent", {
      display: "block",
    });
    tl.to(".stairs2", {
      opacity: 1,
      height: "100%",
      delay: 0.2,
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".navLinks", {

      display: "block",
    });
    // all single links
    tl.to(".link", {
      rotateX: 45,
      opacity: 1,
      stagger: {
        amount: 0.25
      }
    })
    // close menu bar
    tl.to(".closeBar", {
      x: 0,
      duration: 0.1,
      delay: 0
    })
  };

  return (
    <div>
      <div className="flex w-full items-center fixed top-0 z-50 justify-between">
        <Link to={"/"} className="p-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-28"
            viewBox="0 0 103 44"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </Link>
        <div
          className={`h-10 md:h-11 w-60 md:w-72 bg-black mb-7 md:mb-7 menuBar flex items-center justify-center cursor-pointer menuBar`}
          onClick={handleOpen}
        >
          <div>
            <div className="w-16 bg-white changeColor h-0.5"></div>
            <div className="w-14 mt-2 ml-5 changeColor bg-white h-0.5 "></div>
          </div>
        </div>
      </div>
      <div>
        <FullScreenNav setNavOpen = {setNavOpen} navOpen = {navOpen}/>
      </div>
    </div>
  );
}

export default Navber;
