import moment from "moment";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const SearchedVideoCard = ({ searchedVideoInfo }) => {
  const { snippet } = searchedVideoInfo;
  const { channelTitle, thumbnails, title, description, publishedAt } = snippet;

  const truncatedDescription =
    description?.length > 110
      ? description?.substring(0, 109) + "..."
      : description;
  const timeAgo = moment(publishedAt).fromNow();

  return (
    <div className="mx-10">
      <div className="p-2 m-2 w-full flex gap-3 ">
        <img
          src={thumbnails?.medium?.url}
          alt="videoThumbnail"
          className=" w-96 h-56 object-cover rounded-md"
        />
        <ul className="flex flex-col gap-2">
          <li className="font-bold py-2">{title}</li>

          <li className=" flex items-center  gap-1 font-semibold">
            {channelTitle}
            <span>
              <FaRegCheckCircle />
            </span>
          </li>

          <li>{timeAgo}</li>
          <li className="text-sm">{truncatedDescription}</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchedVideoCard;
