import React from "react";
import "../style/videoCard.css";

const VideoCard = ({ videoData, handleVideoSelected }) => {
  return (
    <div className="videoCard mx-2 overflow-auto">
      {videoData.map((video) => (
        <div
          onClick={() => handleVideoSelected(video.url)}
          className="videoCard__card"
          key={video.key}
        >
          <img
            className="videoCard__image"
            src={video.thumbnail}
            alt={video.title}
          />
          <div className="videoCard__info p-2">
            <h6>{video.title}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCard;
