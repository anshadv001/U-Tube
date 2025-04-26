import { Link } from "react-router";
import { useFetch } from "../custom_hooks/useFetch";
import { videos } from "../data/video";
import { POPULAR_VIDEOS_API } from "../utils/constants";
import VideoCard from "./videoCard";

const VideoGridItem = () => {
  const result = useFetch(POPULAR_VIDEOS_API);
  let itemCount = -1;
  console.log(result);
  const items = result?.data?.items;
  const showChannelIcon = true;

  if (result.loading) return <div>avvvvvvv</div>;
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 overflow-y-auto w-full pt-4">
      {items.map((item) => {
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
  );
};

export default VideoGridItem;
