import React from "react";
import Button from "./Button";
import { categories } from "../data/home";

const CategoryPills = () => {
  return (
    <div className="overflow-x-auto relative [scrollbar-width:none] [&::-webkit-scrollbar]:hidden z-1">
      <div className="whitespace-nowrap gap-3 flex transition-transform w-[max-content]">
        {categories.map((category) => {
          return (
            <Button
            key={category}
              variant="default"
              className="py-1 text-sm px-3 rounded-lg whitespace-nowrap"
            >
              {category}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPills;
