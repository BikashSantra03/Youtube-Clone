import React, { useEffect } from "react";
import SideContainer from "./SideContainer";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router";
import { closeSideContainer, openSideContainer } from "../utils/appSlice";

const Body = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const isSideContainerOpen = useSelector(
    (store) => store.app.isSideContainerOpen
  );

  useEffect(() => {
    if (location.pathname === "/watch") {
      dispatch(closeSideContainer());
    } else {
      dispatch(openSideContainer());
    }
  }, [location.pathname, dispatch]);

  const isSidebarOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className="flex">
      {isSidebarOpen && <Sidebar />}
      {isSideContainerOpen && <SideContainer />}
      <Outlet />
    </div>
  );
};

export default Body;
