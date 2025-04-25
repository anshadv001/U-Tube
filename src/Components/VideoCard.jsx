import { useRef, useState } from "react";
import { formatDuration } from "../utils/formatDuration";
import { videos } from "../data/video";
import { formatViewCount } from "../utils/formatViewCount";
import { getTimeAgo } from "../utils/getTimeAgo";

const VideoCard = ({ item, itemCount }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleMouseEnter = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // optional: always play from start
      videoRef.current.play().catch((err) => {
        console.error("Play error:", err);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`relative aspect-video  overflow-hidden transition-[border-radius] duration-400 ${
          isVideoPlaying ? "rounded-0 transition-bo" : "rounded-xl"
        }`}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <img
          src={item?.snippet?.thumbnails?.medium?.url}
          alt="thumbnail"
          className="w-full h-full object-cover "
        />
        <p className="absolute bottom-1 right-1 px-1.5 py-0.25 bg-black text-white text-xs rounded-md">
          {formatDuration(videos[itemCount]?.duration)}
        </p>
        <video
          src={videos[itemCount]?.videoUrl}
          className={`block absolute inset-0 object-cover object-center duraion-500 transition-opacity ${
            isVideoPlaying ? "opacity-100  delay-100 ease-in" : "opacity-0"
          }`}
          ref={videoRef}
          playsInline
          muted
        />
      </div>
      <div className="flex mt-2 gap-2 items-start">
        <div className="flex items-start justify-center  shrink-0 ">
          <img
            src={videos[itemCount]?.profileUrl}
            alt="Profile Photo"
            className="rounded-full w-8.5 h-8.5"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="">
            <p className="text-sm  font-semibold">
              {item?.snippet?.localized?.title}
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm"> {item?.snippet?.channelTitle}</p>
            <p className="text-gray-500 text-sm">{`${formatViewCount(item?.statistics?.viewCount)} • ${getTimeAgo(item?.snippet?.publishedAt)}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
