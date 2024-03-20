"use client";

import YouTube from "react-youtube";
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useState } from "react";

const Video = ({ videoId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideo = () => {
    setIsOpen(!isOpen);
  };

  const option = {
    width: "370",
    height: "250",
  };

  const OpenVideo = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="float-right bg-color-primary text-color-dark rounded"
          onClick={handleVideo}
        >
          <MdKeyboardDoubleArrowDown size={25} />
        </button>
        <YouTube
          videoId={videoId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const CloseVideo = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="float-right bg-color-primary text-color-dark rounded"
          onClick={handleVideo}
        >
          <MdKeyboardDoubleArrowUp size={25} />
        </button>
      </div>
    );
  };

  return isOpen ? <OpenVideo/> : <CloseVideo />;
};

export default Video;
