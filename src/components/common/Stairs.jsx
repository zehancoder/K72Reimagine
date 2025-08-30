import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";
function Stairs(props) {
  const currentPath = useLocation();
  console.log({ dependencies: [currentPath.pathname] });
  const stairParent = useRef(null);
  const pageRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairParent.current, {
      display: "block",
    });
    tl.from(".stairs", {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(".stairs", {
      y: "100%",
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairParent.current, {
      display: "none",
    });
    tl.to(".stairs", {
      y: '0%',
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      scale: 1.2,
      delay: 1.3,
    });
    return () => {
      tl.kill(); // পুরোনো animation বন্ধ করবে
    };
  }, [currentPath.pathname]);
  return (
    <div className="overflow-hidden">
      <div
        ref={stairParent}
        className="h-screen w-screen fixed top-0 z-10 overflow-hidden"
      >
        <div className="h-full w-full flex">
          <div className="w-1/5 h-full bg-black stairs"></div>
          <div className="w-1/5 h-full bg-black stairs"></div>
          <div className="w-1/5 h-full bg-black stairs"></div>
          <div className="w-1/5 h-full bg-black stairs"></div>
          <div className="w-1/5 h-full bg-black stairs"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  );
}

export default Stairs;
