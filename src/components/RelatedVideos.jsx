import React from "react";
import "../style/relatedVideos.css";
import VideoCard from "./VideoCard.jsx";

const RelatedVideos = ({ videoData, handleVideoSelected }) => {
  return (
    <div className="relatedVideos">
      <h3 className="text-center">Related Videos</h3>
      <VideoCard
        videoData={videoData}
        handleVideoSelected={handleVideoSelected}
      />
    </div>
  );
};

export default RelatedVideos;
