import React from "react";
import moment from "moment";
import useFormatViewCount from "../hooks/useFormatViewCount";
import { LuDot } from "react-icons/lu";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;

  const truncatedTitle =
    title?.length > 70 ? title?.substring(0, 50) + "..." : title;
  const timeAgo = moment(publishedAt).fromNow();
  const formattedViewCount = useFormatViewCount(statistics?.viewCount);

  return (
    <div className="p-2 m-2 w-70">
      <img
        src={thumbnails?.medium?.url}
        alt="videoThumbnail"
        className="rounded-md"
      />
      <ul>
        <li className="font-bold py-2">{truncatedTitle}</li>
        <li>{channelTitle}</li>
        <li className="flex items-center">
          {formattedViewCount} <LuDot />
          <span>{timeAgo}</span>
        </li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ videoInfo }) => {
  return (
    <div className=" relative">
      <span className="absolute z-10 px-2 mx-2 font-bold  border border-black rounded-md bg-gray-300">
        Ad
      </span>
      <VideoCard videoInfo={videoInfo} />
    </div>
  );
};
export default VideoCard;
