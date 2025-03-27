import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router";
const Buttonlist = () => {
  const btnList = ["All", "Live", "Gaming", "Development", "Tech"];

  const navigate = useNavigate();
  const handleClick = (btnName) => {
    if (btnName === "Live") {
      console.log("In Live page");
      navigate("/live");
    }
  };
  return (
    <div className="flex">
      {btnList.map((btn) => (
        <Button key={btn} btnName={btn} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Buttonlist;
