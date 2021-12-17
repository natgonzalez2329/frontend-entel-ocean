import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import VideosView from "./components/VideosView.jsx";
import apiTest from "./api/apiTest.json";

function App() {
  const getDataVideos = apiTest;
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    setVideoData(getDataVideos.videos);
  }, [getDataVideos]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="app__main">
        <Sidebar />
        <VideosView videoData={videoData} />
      </div>
    </div>
  );
}

export default App;
