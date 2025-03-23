import React from "react";
import { commentsData } from "../utils/comentsMockData";
import Comments from "./Comments";
import CommentsLists from "./CommentsLists";

const ComentsContainer = () => {
  return (
    <div className="m-5 p-2 w-2/3">
      <h1 className="font-bold">Comments: </h1>
     <CommentsLists comments = {commentsData}/>
    </div>
  );
};

export default ComentsContainer;
