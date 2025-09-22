import React, { useContext } from "react";
import Button from "../Button";
import { ChevronRight } from "lucide-react";
import { SidebarContext } from "../../utils/sidebarContext/contexts";
import { Link, useNavigate } from "react-router";
// import { sidebarData } from "./sidebarData";

const SidebarSection = ({ section }) => {
  const { setSelected, selected } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleClick = (item,e)=>{
    setSelected(item.id)
    item.navigateTo ? navigate(item.navigateTo) : e.preventDefault()
  }
  return (
    <div
      className={`flex flex-col  border-b border-gray-200 ${
        section.id === 1 ? "pb-3" : "py-3"
      }`}
    >
      {section.sectionName ? (
        section.sectionName === "You" ? (
          <Button
            variant="ghost"
            size="default"
            className={`flex gap-2 items-center rounded-xl pl-3 ${
              selected === section.id ? "bg-neutral-200" : null
            }`}
            onClick={() => setSelected(section.id)}
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
          // <Link to={item.navigateTo} key={item.id}>
            <Button
              variant="ghost"
              size="default"
              className={`w-full flex gap-6 items-center rounded-xl pl-3 ${
                item.id === selected ? "bg-neutral-200" : null
              }`}
              onClick={(e) => handleClick(item,e)}
              
            >
              {item?.icon?.unfilled}
              {item?.itemName}
            </Button>
          // </Link>
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
