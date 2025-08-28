import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import React, { useRef } from "react";

function Agence() {
  gsap.registerPlugin(ScrollTrigger);
  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];
  const imageDivRef = useRef();
  const imageRef = useRef(null);
  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 28.3%",
        end: "top -100%",
        scrub: true,
        pin: true,
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
    <div>
      <div className="section1">
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
