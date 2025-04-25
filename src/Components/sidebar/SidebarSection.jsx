import React, { useContext } from "react";
import Button from "../Button";
import { ChevronRight } from "lucide-react";
import { SidebarContext } from "../../utils/sidebarContext/contexts";
// import { sidebarData } from "./sidebarData";

const SidebarSection = ({ section }) => {
  const {setSelected,selected} = useContext(SidebarContext);
  return (
    <div className={`flex flex-col  border-b border-gray-200 ${section.id===1 ? "pb-3" : "py-3"}`}>
      {section.sectionName ? (
        section.sectionName === "You" ? (
          <Button
            variant="ghost"
            size="default"
            className="flex gap-2 items-center rounded-xl pl-3"
          >
            <p className="font-semibold">You</p>
            <ChevronRight size={20} />
          </Button>
        ) : (
          <div className="pl-3 pb-2 font-semibold">{section.sectionName}</div>
        )
      ) : null}
      {section.items.map((item) => {
        return (
          <Button
            variant="ghost"
            size="default"
            className={`flex gap-6 items-center rounded-xl pl-3 ${item.id === selected? "bg-neutral-200" : null}`}
            onClick={()=>setSelected(item.id)}
            key={item.id}
          >
            {item?.icon?.unfilled}
            {item?.itemName}
          </Button>
        );
      })}
    </div>

    // <Button variant="ghost" size="default" className="flex gap-3 rounded-xl">
    //     {sidebarData[0]?.items[0]?.icon?.unfilled}
    //     {sidebarData[0]?.items[0]?.itemName}
    // </Button>
    // if(sidebarData[0]?.items[0]?.sectionName){
    //   return sidebarData[0]?.items[0]?.sectionName==="You" ?   :  "some jsx"
    // }
  );
};

export default SidebarSection;
