import React from "react";
import { MdHome } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="w-1/8  flex flex-col gap-3 shadow-lg text-xl p-2">
      <div>
        <ul>
          <li className="flex items-center gap-1">
            <MdHome />
            Home
          </li>
          <li className="flex items-center gap-1">
            <SiYoutubeshorts />
            Shorts
          </li>
          <li className="flex items-center gap-1">
            <RiLiveLine />
            Live
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Tech</li>
          <li>Movies</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold">Watch later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Tech</li>
          <li>Movies</li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold">Playlists</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Tech</li>
          <li>Movies</li>
        </ul>
      </div>

      <div>
        <h1 className="font-bold">Liked Videos</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Tech</li>
          <li>Movies</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
