import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Header = () => {
  const [searchedQuery, setSearchedQuery] = useState("");
  const dispatch = useDispatch();
  const handleHamburgerClick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timefn = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timefn); // called everytime while unMounting
    };
  }, [searchedQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchedQuery);
    const json = await data.json();
    console.log(json[1]);
  };
  return (
    <div className="grid grid-flow-col m-2 ">
      <div className="flex col-span-1  gap-4">
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

      <div className="col-span-10 text-center flex justify-center items-center">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          value={searchedQuery}
          onChange={(e) => setSearchedQuery(e.target.value)}
        />
        <button className="border border-gray-400 bg-gray-200 px-4 py-2 rounded-r-full cursor-pointer ">
          <CiSearch className="text-2xl" />
        </button>
      </div>

      <div className="col-span-1">
        <FaUserCircle className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
