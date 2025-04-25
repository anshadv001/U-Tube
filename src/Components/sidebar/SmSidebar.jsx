import React, { useContext } from "react";
import Button from "../Button";
import { House, User } from "lucide-react";
import { SidebarContext } from "../../utils/sidebarContext/contexts";
import { sidebarData } from "./sidebarData";

const SmSidebar = () => {
  const { showLargeSidebar } = useContext(SidebarContext);
  const section = sidebarData[0];
  const { setSelected, selected } = useContext(SidebarContext);
  return (
    <div
      className={`${
        showLargeSidebar ? "flex lg:hidden" : "flex"
      } w-[60px] h-full  flex-col items-center justify-start`}
    >
      {section.items.map((item) => {
        return (
          <Button
            variant="ghost"
            size="default"
            className={`flex flex-col gap-1 items-center justify-center rounded-xl w-[60px] h-[75px] ${
              selected === item.id ? "bg-neutral-200" : null
            }`}
            key={item.id}
            onClick={() => setSelected(item.id)}
          >
            {item.icon.unfilled}
            <p className="text-[9px]">{item.itemName}</p>
          </Button>
        );
      })}

      <Button
        variant="ghost"
        size="default"
        className="flex flex-col gap-1 items-center justify-center  rounded-xl w-[60px] h-[75px]"
      >
        <User size={20} strokeWidth={1.75}/>
        <p className="text-[9px]">Profile</p>
      </Button>
    </div>
  );
};

export default SmSidebar;
