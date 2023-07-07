import React from "react";
import Navber from "../Shared/Navber/Navber";
import { Outlet } from "react-router-dom";


const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      {/* <div className="max-w-[1440px] mx-auto">
        <Outlet></Outlet>
      </div> */}
    </div>
  );
};

export default Main;
