import React, { useContext, useEffect } from "react";
import Sidebar from "../Components/sidebar/sidebar";
import SmSidebar from "../Components/sidebar/SmSidebar";
import Body from "./Body";
import SidebarModal from "../Components/sidebar/SidebarModal";
import { SidebarContext } from "./../utils/sidebarContext/contexts";
import { Outlet } from "react-router";

const MainBody = () => {
  const { showLargeSidebar, setShowLargeSidebar } = useContext(SidebarContext);
  console.log({ shwL: showLargeSidebar });
  useEffect(() => {
    setShowLargeSidebar(true);
    return () => setShowLargeSidebar(false);
  }, []);

  return (
    <div className="grid grid-cols-[auto_1fr] grow overflow-auto h-full">
      {showLargeSidebar && (
        <>
          <Sidebar withLogo={false} display="hidden lg:flex" />
          <SidebarModal display="flex lg:hidden" />
        </>
      )}
      <SmSidebar />
      {/* <div className="overflow-x-hidden pb-4"> */}
        <Outlet/>
      {/* </div> */}
    </div>
  );
};

export default MainBody;
