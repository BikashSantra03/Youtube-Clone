import React from "react";
import { FaUserCircle } from "react-icons/fa";

const LiveChatMessages = ({ chatData }) => {
  const { chatMessage, displayName, profileImageUrl } = chatData;
  const truncatedName =
    displayName.length > 10 ? `${displayName.substring(0, 9)}` : displayName;
  return (
    <div className="flex items-center gap-2 shadow-md">
      <img
        src={profileImageUrl}
        alt="userIMG"
        className="w-5 h-5 object-cover rounded-md"
      />
      <span className="font-semibold pr-2">{truncatedName}</span>
      <span>{chatMessage}</span>
    </div>
  );
};

export default LiveChatMessages;
