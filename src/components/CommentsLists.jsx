import React, { useState } from "react";
import Comments from "./Comments";

const CommentsLists = ({ comments }) => {
  // State to track which comments are expanded
  const [expandedComments, setExpandedComments] = useState({});

  // Toggle visibility of replies for a specific comment
  const toggleReplies = (commentId) => {
    setExpandedComments((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  return comments.map((comment, index) => {
    const commentId = comment.id || index;

    // Replies are hidden by default until their parent is clicked
    const hasReplies = comment.replies && comment.replies.length > 0;

    return (
      <div key={commentId}>
        {/* Clickable comment container */}
        <div
          onClick={() => hasReplies && toggleReplies(commentId)}
          className={hasReplies ? "cursor-pointer" : ""}
        >
          <Comments data={comment} />
        </div>

        {/* Nested replies - only show when expanded */}
        {hasReplies && expandedComments[commentId] && (
          <div className={`pl-5 border-l-2 border-l-gray-300 rounded-md ml-5 `}>
            <CommentsLists comments={comment.replies} />
          </div>
        )}
      </div>
    );
  });
};

export default CommentsLists;
