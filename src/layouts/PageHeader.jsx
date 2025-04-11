import {
  ArrowLeft,
  BellIcon,
  Menu,
  Mic,
  Search,
  Upload,
  User,
} from "lucide-react";
import React, { useState } from "react";
import Button from "./../Components/Button";

const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={`gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <img src="/src/assets/YouTube_2024.png" alt="logo" className="h-5" />
      </div>
      <form
        className={`${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        } gap-4 justify-center flex-grow`}
      >
        {showFullWidthSearch && (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setShowFullWidthSearch(false)}
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px] justify-center">
          <input
            type="search"
            placeholder="Search"
            className="border border-neutral-400 w-full rounded-l-full pl-4 shadow-inner shadow-neutral-200 outline-none"
          />
          <Button
            variant="default"
            className="border border-neutral-400 rounded-r-full px-5 border-l-0"
          >
            <Search />
          </Button>
        </div>
        <Button size="icon" variant="default">
          <Mic />
        </Button>
      </form>
      <div
        className={` flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setShowFullWidthSearch(true)}
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <BellIcon />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
