import React from "react";
import Sidebar from "../Components/sidebar/sidebar";
import SmSidebar from "../Components/sidebar/SmSidebar";
import Body from "./Body";

const MainBody = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] grow overflow-auto max-h-full">
      <Sidebar />
      <SmSidebar />
      <div className="overflow-x-hidden pb-4">
        <Body />
      </div>
    </div>
  );
};

export default MainBody;
