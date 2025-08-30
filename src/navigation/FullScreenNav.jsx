import React from "react";

function FullScreenNav() {
  return (
    <div
      id="fullscrennav"
      className="absolute z-23 text-white top-0 h-screen w-screen bg-black"
    >
      <div>
        <div className="allLinks">
          <div id="link" className="border-y-1 leading-none py-4 border-white">
            <h1 className="text-[8vw] md:text-[7vw] lg:text-[6vw] uppercase font-[font2]">Projects</h1>
            {/* <div className="flex items-center">
              <div className="flex items-center gap-3 border-y-2 py-2 border-white">
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2>Pour Tout Voir</h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="flex items-center gap-3 border-y-2 py-2 border-white">
                <img
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2>Pour Tout Voir</h2>
                <img
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenNav;
