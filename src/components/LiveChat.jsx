import React, { useEffect, useRef, useState } from "react";
import LiveChatMessages from "./LiveChatMessages";
import { MY_PROFILE_IMG, YOUTUBE_KEY } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

const LiveChat = ({ videoID }) => {
  const [liveChatId, setLiveChatId] = useState(null);
  const myLiveMessage = useRef(null);

  const chatMessages = useSelector((store) => store.chat.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    getLiveChatId(); // getting Live Chat ID

    const interval = setInterval(() => {
      if (liveChatId) {
        // Start fetching messages
        // fetchChatMessages();
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [liveChatId]);

  const getLiveChatId = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=${videoID}&key=${YOUTUBE_KEY}`
    );
    const data = await response.json();
    console.log(data);
    const Id = data?.items[0]?.liveStreamingDetails?.activeLiveChatId;
    Id && setLiveChatId(Id);
  };

  const fetchChatMessages = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${liveChatId}&part=snippet,authorDetails&key=${YOUTUBE_KEY}&maxResults=50`
    );
    const json = await response.json();

    const data = json.items[json.items.length - 1];
    console.log(data);

    dispatch(
      addMessage({
        chatID: data?.id,
        chatMessage: data?.snippet?.displayMessage,
        displayName: data?.authorDetails?.displayName,
        profileImageUrl: data?.authorDetails?.profileImageUrl,
      })
    );
  };

  const handleMessageSubmit = () => {
    const message = myLiveMessage.current.value; // Get the input value
    if (message.trim()) {
      // Only proceed if message isn't empty
      const uniqueChatID = `${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)}`; // Unique ID
      dispatch(
        addMessage({
          chatID: uniqueChatID,
          chatMessage: message,
          displayName: "Bikash",
          profileImageUrl: MY_PROFILE_IMG,
        })
      );
      myLiveMessage.current.value = ""; // Clear the input
    }
  };

  return (
    <>
      {liveChatId ? (
        <div className="w-full h-[380px] p-2 border border-black rounded-md overflow-y-scroll flex flex-col-reverse">
          {chatMessages?.length > 0 ? (
            chatMessages.map((msg) => (
              <LiveChatMessages key={msg.chatID} chatData={msg} />
            ))
          ) : (
            <p>No messages yet...</p>
          )}
        </div>
      ) : null}

      <form
        onSubmit={(e) => {
          e.preventDefault();

          handleMessageSubmit();
        }}
        className="w-full my-1 flex gap-1"
      >
        <input
          type="text"
          ref={myLiveMessage}
          placeholder="Chat... "
          className="w-10/12 p-1 border border-black"
        />
        <button
          onSubmit={handleMessageSubmit}
          className="w-2/12 pl-1 bg-emerald-300 rounded-md cursor-pointer"
        >
          Send
        </button>
      </form>
    </>
  );
};
export default LiveChat;
