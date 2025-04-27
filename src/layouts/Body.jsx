import React from "react";
import CategoryPills from "../Components/CategoryPills";
import VideoGridItem from "../Components/VideoGridItem";
import { categories } from "../data/home";


const Body = () => {
  return (
    <div className="grow w-full pl-5">
      <div className="sticky top-0 bg-white z-9 pb-4">
        <CategoryPills categories={categories}/>
      </div>
      <VideoGridItem />
    </div>
  );
};

export default Body;
