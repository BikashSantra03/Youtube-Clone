import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdHome } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { NavLink } from "react-router";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleHamburgerClick = () => {
    dispatch(toggleMenu());
  };

  if (!toggleMenu) return null;
  return (
    <div
      className={`absolute top-0 left-0  w-1/6 bg-gray-100 px-4 mt-2 flex flex-col shadow-lg z-50`}
    >
      <div className="flex gap-4">
        <GiHamburgerMenu
          className="text-3xl cursor-pointer"
          onClick={handleHamburgerClick}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="Youtube-Logo"
          className="h-7 cursor-pointer"
        />
      </div>
      <div className="mt-4">
        <ul>
          <li className="flex items-center gap-1 ">
            <NavLink to="/">
              <MdHome />
              Home
            </NavLink>
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
