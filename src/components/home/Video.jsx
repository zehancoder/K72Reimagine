import React from "react";

function Video() {
  return (
    <div className="w-full h-full">
      <video autoPlay loop muted className="w-full h-full object-cover" src="/video/video1.mp4"></video>
    </div>
  );
}

export default Video;
