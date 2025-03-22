import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchedQuery, setSearchedQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const handleHamburgerClick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timefn = setTimeout(() => {
      searchCache[searchedQuery]
        ? setSuggestions(searchCache[searchedQuery])
        : getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timefn); // called everytime while unMounting
    };
  }, [searchedQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchedQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({ [searchedQuery]: json[1] }));
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

      <div className="col-span-10 flex justify-center ">
        <div className="w-1/2 relative flex flex-col justify-center items-center">
          <input
            type="text"
            className="w-full border border-gray-400 p-2 rounded-l-full"
            value={searchedQuery}
            onChange={(e) => setSearchedQuery(e.target.value)}
            onFocus={() => {
              setShowSuggestions(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setShowSuggestions(false);
              }, 200); // Small delay to select the suggestions
            }}
          />

          {showSuggestions && (
            <div className="w-full bg-white shadow-lg b rounded-lg ml-1 mt-1 absolute top-full z-10">
              <ul>
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSearchedQuery(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
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
