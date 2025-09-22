// import React, { useEffect } from "react";
import { videos } from "../../data/video";
import { categories } from "../../data/home";
import { POPULAR_VIDEOS_API } from "../../utils/constants";
import { useFetch } from "../../custom_hooks/useFetch";
import { shuffleArray } from "./../../utils/shuffleArray";
import CategoryPills from "./../../Components/CategoryPills";
import VideoCard from "../../Components/videoCard";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { infiniteScroll } from "../../utils/infiniteScroll";

const SuggestionSection = () => {
  const [itemsToRender, setItemsToRender] = useState([]);
  const result = useFetch(POPULAR_VIDEOS_API);
  const fullData = result?.data?.items;
  const shuffledItems = shuffleArray(fullData || []);
  const { ref, inView } = useInView({ threshold: 0.2 });
  let currentPage = useRef(0);
  let fullRendered = useRef(false);

  let itemCount = useRef(-1);
  useEffect(() => {
    if (inView) {
      const { paginatedData, listCompleted } = infiniteScroll({
        fullData: shuffledItems,
        currentPage: ++currentPage.current,
        itemsPerPage: 12,
      });
      setTimeout(() => {
        setItemsToRender((prev) => [...prev, ...paginatedData]);
      }, 300);
      fullRendered.current = listCompleted;
    }
  }, [inView, shuffledItems]);

  if (result.loading) return <div>avvvvvvv</div>;

  return (
    <>
      <div className="w-full">
        <CategoryPills categories={categories} />
      </div>
{/*  */}
      {itemsToRender.map((item) => {
        if (itemCount.current !== 9) itemCount.current++;
        else itemCount.current = 0;
        item.missingData = {
          duration: videos[itemCount.current]?.duration,
          videoUrl: videos[itemCount.current].videoUrl,
          profileUrl: videos[itemCount.current].profileUrl,
        };
        return (
          <>
            <VideoCard
              key={item.id}
              item={item}
              className="grid grid-cols-[1fr_3fr] lg:grid-cols-[1fr_1.5fr]"
              showChannelIcon={false}
            />
          </>
        );
      })}
      <div
        className={`${
          fullRendered.current ? "hidden" : "flex"
        } items-center justify-center h-14`}
        ref={ref}
      >
        <div className="w-8 h-8 border-4 border-neutral-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </>
  );
};

export default SuggestionSection;
