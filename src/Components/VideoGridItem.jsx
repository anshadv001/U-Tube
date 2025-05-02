import { Link } from "react-router";
import { useFetch } from "../custom_hooks/useFetch";
import { videos } from "../data/video";
import { POPULAR_VIDEOS_API } from "../utils/constants";
import VideoCard from "./videoCard";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { infiniteScroll } from "../utils/infiniteScroll";

const VideoGridItem = () => {
  const result = useFetch(POPULAR_VIDEOS_API);
  let itemCount = -1;
  console.log(result);
  const items = result?.data?.items;
  const showChannelIcon = true;

  const [itemsToRender, setItemsToRender] = useState([]);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const currentPage = useRef(0);
  const fullRendered = useRef(false);
  useEffect(() => {
    if (inView) {
      const { paginatedData, listCompleted } = infiniteScroll({
        fullData: items,
        currentPage: ++currentPage.current,
        itemsPerPage: 12,
      });
      setTimeout(() => {
        setItemsToRender((prev) => [...prev, ...paginatedData]);
      }, 300);
      fullRendered.current = listCompleted;
    }
  }, [inView, items]);

  if (result.loading) return <div>avvvvvvv</div>;
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 overflow-y-auto w-full pt-4">
        {itemsToRender.map((item) => {
          if (itemCount !== 9) itemCount++;
          else itemCount = 0;
          item.missingData = {
            duration: videos[itemCount]?.duration,
            videoUrl: videos[itemCount].videoUrl,
            profileUrl: videos[itemCount].profileUrl,
          };
          return (
            <Link to={"/watch?vid=" + item.id} key={item.id} state={item}>
              <VideoCard item={item} showChannelIcon={showChannelIcon} />
            </Link>
          );
        })}
      </div>
      <div
        className={`${
          fullRendered.current ? "hidden" : "flex"
        } items-center justify-center h-14 mx-auto`}
        ref={ref}
      >
        <div className="w-8 h-8 border-4 border-neutral-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </>
  );
};

export default VideoGridItem;
