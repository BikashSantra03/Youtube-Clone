import React, { useEffect, useState } from "react";
import VideoCard from "./Videocard";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyD4sRm3LSMKEHmGmXeQhxOBEz83C4cTyPY"
    );
    const json = await data.json();
    console.log(json.items);
    setvideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.length == 0 ? (
        <Shimmer />
      ) : (
        videos.map((video) => (
          <NavLink to={`/watch?v=${video.id}`}>
            <VideoCard key={video.id} videoInfo={video}  />
          </NavLink>
        ))
      )}
    </div>
  );
};

export default VideoContainer;
