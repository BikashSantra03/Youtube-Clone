import React from "react";

const Button = ({ btnName, handleClick }) => {
  return (
    <div>
      <button
        onClick={() => handleClick(btnName)}
        className="px-5 m-5 bg-gray-200 border rounded-md cursor-pointer"
      >
        {btnName}
      </button>
    </div>
  );
};

export default Button;
