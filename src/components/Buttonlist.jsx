import React from "react";
import Button from "./Button";
const Buttonlist = () => {

  const btnList=["All", "Live", "Gaming", "Development", "Tech"]
  return <div className="flex">
  {
    btnList.map(btn=><Button key={btn} btnMame={btn}/>)
  }
  </div>;
};

export default Buttonlist;
