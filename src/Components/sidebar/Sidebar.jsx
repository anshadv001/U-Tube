import React, { useContext } from "react";
import SidebarSection from "./SidebarSection";
import { sidebarData } from "./sidebarData";
import { SidebarContext } from "../../utils/sidebarContext/contexts";
import Button from "../Button";
import { Menu } from "lucide-react";

const Sidebar = ({ withLogo, display }) => {
  console.log(sidebarData[0]?.items[0]?.icon?.unfilled);

  const { showLargeSidebar, setShowLargeSidebar } = useContext(SidebarContext);
  console.log(showLargeSidebar);

  return (
    <div
      className={`${display} flex-col max-h-full z-10  w-[240px] overflow-y-auto  bg-white`}
    >
      <div
        className={`gap-4 items-center flex-shrink-0 mt-2 ${
          withLogo ? "flex" : "hidden"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowLargeSidebar(!showLargeSidebar)}
        >
          <Menu />
        </Button>
        <img src="/src/assets/YouTube_2024.png" alt="logo" className="h-5" />
      </div>

      {sidebarData.map((item) => {
        return <SidebarSection key={item.id} section={item} />;
      })}
    </div>
  );
};

export default Sidebar;
