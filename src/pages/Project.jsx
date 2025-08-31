import React from "react";
import { Link } from "react-router-dom";
import gsap, { ScrollTrigger } from "gsap/all";
import ProjectPageCard from "../components/projects/ProjectPageCard";
import { useGSAP } from "@gsap/react";
function Project() {
  gsap.registerPlugin(ScrollTrigger);
  const cardDatas = [
    {
      text: "",
      img: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      text: "",
      img: "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
    },
    {
      text: "",
      img: "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      text: "",
      img: "https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
    },

    {
      text: "",
      img: "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    },
    {
      text: "",
      img: "https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
    },

    {
      text: "",
      img: "https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },

    {
      text: "",
      img: "https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg",
      img2: "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg",
    },
  ];

  useGSAP(() => {
    gsap.from(".projectCards", {
      height: "200px",
      stagger: {
        amount: 0.9,
      },
      scrollTrigger: {
        trigger: ".projectCardParent",
        start: "top 30%",
        end: "top -250%",
        markers: true,
        scrub: true,
      },
    });
  });

  return (
    <div>
      <div className="mt-56">
        <div className="h-full w-full  p-3">
          <div className="w-full">
            <h1 className="lg:text-[7vw] inline md:text-[8vw] text-[9vw] xl:text-[7vw] font-[font1] font-semibold uppercase text-white relative">
              Projects <p className="absolute top-0 xl:top-2 lg:-right-10 -right-6 md:-right-8 xl:-right-13 lg:text-4xl md:text-3xl text-xl xl:text-5xl">16</p>
            </h1>
            <div className="w-full projectCardParent">
              {cardDatas.map(({ img, img2 }, idx) => (
                <div className="projectCards w-full h-full mt-2" key={idx}>
                  <ProjectPageCard img={img} img2={img2} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
