import React from "react";
import "../style/player.css";
import ReactPlayer from "react-player";

const Player = ({ videoSelected }) => {
  return (
    <div className="player">
      <ReactPlayer
        className="player-react"
        url={
          videoSelected
            ? videoSelected
            : "https://www.youtube.com/watch?v=SWKSnVx1fQg&ab_channel=UnidadDigitalEntelOcean"
        }
        width="100%"
        height="100%"
        muted={false}
        playing={true}
        controls={true}
      />
    </div>
  );
};

export default Player;
