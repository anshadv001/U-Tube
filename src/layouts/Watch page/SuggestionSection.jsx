import React from "react";
import { videos } from "../../data/video";
import { categories } from "../../data/home";
import { POPULAR_VIDEOS_API } from "../../utils/constants";
import { useFetch } from "../../custom_hooks/useFetch";
import { shuffleArray } from "./../../utils/shuffleArray";
import CategoryPills from "./../../Components/CategoryPills";
import { Link } from "react-router";
import VideoCard from "../../Components/videoCard";

const SuggestionSection = () => {
  const result = useFetch(POPULAR_VIDEOS_API);
  const items = result?.data?.items;
  const shuffledItems = shuffleArray(items || []);
  const showChannelIcon = false;

  let itemCount = -1;

  if (result.loading) return <div>avvvvvvv</div>;

  return (
    <>
      <CategoryPills categories={categories} />
      {shuffledItems.map((item) => {
        if (itemCount !== 9) itemCount++;
        else itemCount = 0;
        item.missingData = {
          duration: videos[itemCount]?.duration,
          videoUrl: videos[itemCount].videoUrl,
          profileUrl: videos[itemCount].profileUrl,
        };
        return (
          <Link to={"/watch?vid=" + item.id} key={item.id} state={item}>
            <VideoCard
              item={item}
              className="grid grid-cols-[1fr_3fr] lg:grid-cols-[1fr_1.5fr]"
              showChannelIcon={showChannelIcon}
            />
          </Link>
        );
      })}
    </>
  );
};

export default SuggestionSection;
