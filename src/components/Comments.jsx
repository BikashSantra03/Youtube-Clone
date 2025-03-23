import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Comments = ({ data }) => {
  const { userName, text, replies } = data;
  return (
    <div className="">
      <div className="flex shadow-md  bg-gray-100 rounded-md my-2 ">
        <FaUserCircle className="text-3xl cursor-pointer" />
        <div className="px-3">
          <p className=" font-bold">{userName}</p>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
