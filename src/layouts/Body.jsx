import React from "react";
import CategoryPills from "../Components/CategoryPills";
import VideoGridItem from "../Components/VideoGridItem";
import { categories } from "../data/home";

const Body = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="grow w-full pl-5 ">
        <div className="sticky top-0 bg-white pb-4 z-1">
          <CategoryPills categories={categories} />
        </div>
        <VideoGridItem />
      </div>
    </div>
  );
};

export default Body;
