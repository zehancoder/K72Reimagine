import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import React, { useRef } from "react";

function Agence() {
  gsap.registerPlugin(ScrollTrigger);
  const imageArray = [
    "/scrollChangeImages/img1.jpg",
    "/scrollChangeImages/img2.jpg",
    "/scrollChangeImages/img3.jpg",
    "/scrollChangeImages/img4.jpg",
    "/scrollChangeImages/img5.jpg",
    "/scrollChangeImages/img6.jpg",
    "/scrollChangeImages/img7.jpg",
    "/scrollChangeImages/img8.jpg",
    "/scrollChangeImages/img9.jpg",
    "/scrollChangeImages/img10.jpg",
    "/scrollChangeImages/img11.jpg",
    "/scrollChangeImages/img12.jpg",
    "/scrollChangeImages/img13.jpg",
    "/scrollChangeImages/img14.jpg",
  ];
  const imageDivRef = useRef();
  const imageRef = useRef(null);
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 0",
        end: "top -100%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex =
              Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        },
      },
    });
  });

  return (
    <div className="parent">
      <div className="section1 py-1 relative">
        <div
          ref={imageDivRef}
          className="md:w-[20vw] small:w-[25vw] w-[30vw] overflow-hidden lg:w-[17vw] xl:w-[15vw] rounded-lg md:rounded-xl lg:rounded-3xl  absolute xl:top-[280px] lg:top-[380px] md:top-[400px] small:top-[220px] top-[230px] left-[30vw]"
        >
          <img
            ref={imageRef}
            className="w-full object-cover rounded-lg md:rounded-xl lg:rounded-3xl "
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>
        <div className="relative">
          <div className="text-white mt-[30vh] md:mt-[50vh] ">
            <h1 className="allPageBigText text-center ">
              Soixan7e <br />
              Douze
            </h1>
          </div>
          <div className="pl-[10%] small:pl-[20%] md:pl-[30%] lg:pl-[50%]  mt-4">
            <p className=" text-[6.3vw] md:text-[3.2vw] leading-[7vw] md:leading-[3.5vw] indent-[40%] text-white">
              {" "}
              Notre curiosité nourrit notre créativité. On reste humbles et on
              dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
              a des valeurs, une personnalité, une histoire. Si on oublie ça, on
              peut faire de bons chiffres à court terme, mais on la tue à long
              terme. C’est pour ça qu’on s’engage à donner de la perspective,
              pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
}

export default Agence;
