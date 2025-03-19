import React from "react";
import { MdHome } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";
import { NavLink } from "react-router";

const SideContainer = () => {
  return (
    <div className="p-2 text-sm  ">
      <ul className="flex flex-col gap-5 cursor-pointer">
        <li className="flex flex-col items-center ">
          <NavLink to="/">
            <MdHome className="text-3xl" />
            Home
          </NavLink>
        </li>
        <li className="flex flex-col items-center cursor-pointer">
          <SiYoutubeshorts className="text-3xl" />
          Shorts
        </li>
        <li className="flex flex-col items-center cursor-pointer">
          <RiLiveLine className="text-3xl" />
          Live
        </li>
      </ul>
    </div>
  );
};

export default SideContainer;
