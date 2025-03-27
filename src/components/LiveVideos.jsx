import React, { useEffect, useState } from "react";
import { YOUTUBE_KEY, YOUTUBE_LVEVIDEOS_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { NavLink } from "react-router";
import VideoCard from "./Videocard";

const LiveVideos = () => {
  const [liveVideos, setLiveVideos] = useState([]);
  useEffect(() => {
    fetchLiveVideos();
  }, []);
  const fetchLiveVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_LVEVIDEOS_API + YOUTUBE_KEY);
      const data = await response.json();
      if (data.items) {
        setLiveVideos(
          data.items.filter(
            (item) => item.snippet.liveBroadcastContent === "live"
          )
        );
      } else {
        console.log("No live videos found.");
      }
    } catch (error) {
      console.error("Error fetching live videos:", error);
    }
  };

  return (
    <div className="flex flex-wrap">
      {liveVideos.length == 0 ? (
        <Shimmer />
      ) : (
        <>
          {liveVideos.map((video) => (
            <NavLink to={`/watch?v=${video.id.videoId}`} key={video.id.videoId}>
              <VideoCard videoInfo={video} />
            </NavLink>
          ))}
        </>
      )}
    </div>
  );
};

export default LiveVideos;
