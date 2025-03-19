import React, { useEffect, useState } from "react";
import VideoCard from "./Videocard";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router";
import { AdVideoCard } from "./Videocard";
import { YOUTUBE_KEY, YOUTUBE_VIDEO_API } from "../utils/constant";
const VideoContainer = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API + YOUTUBE_KEY);
    const json = await data.json();

    setvideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.length == 0 ? (
        <Shimmer />
      ) : (
        <>
          <AdVideoCard videoInfo={videos[0]} />
          {videos.map((video) => (
            <NavLink to={`/watch?v=${video.id}`} key={video.id}>
              <VideoCard videoInfo={video} />
            </NavLink>
          ))}
        </>
      )}
    </div>
  );
};

export default VideoContainer;
