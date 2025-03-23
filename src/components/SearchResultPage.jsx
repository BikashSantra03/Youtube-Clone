import React, { useEffect, useState } from "react";
import { YOUTUBE_KEY } from "../utils/constant";
import { NavLink, useSearchParams } from "react-router";
import SearchedVideoCard from "./SearchedVideoCard";
import Shimmer from "./Shimmer";

const SearchResultPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchResult();

    // Cleanup function to reset searchResults when component unmounts
    return () => {
      setSearchResults([]);
    };
  }, [searchQuery]);

  const searchResult = async () => {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        searchQuery
      )}&type=video&maxResults=${50}&key=${YOUTUBE_KEY}`
    );
    const json = await data.json();
    console.log(json.items);
    setSearchResults(json.items);
  };
  return searchResults.length == 0 ? (
    <Shimmer />
  ) : (
    <div>
      {searchResults.map((result) => (
        <NavLink to={`/watch?v=${result.id.videoId}`} key={result.id.videoId}>
          <SearchedVideoCard
            searchedVideoInfo={result}
            key={result.id.videoId}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default SearchResultPage;
