import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 py-6 text-lg">{overview}</p>
      <div>
        <button className="bg-white bg-opacity-50 text-black p-4 px-12 text-xl rounded-sm ">
          <div className="flex items-center">
            <img
              src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-play-icon-png-image_956416.jpg"
              className="h-5 w-5 m-1"
            />
            Play
          </div>
        </button>
        <button className="mx-2 bg-opacity-50 text-white p-4 px-12  text-xl rounded-sm">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
