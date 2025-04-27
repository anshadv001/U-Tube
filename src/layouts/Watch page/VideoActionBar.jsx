import React from "react";
import Button from "../../Components/Button";
import { Download, Ellipsis, Share, ThumbsDown, ThumbsUp } from "lucide-react";
import { formatCount } from "../../utils/formatCount";

const VideoActionBar = ({ video }) => {
  return (
    <div className="flex justify-between mt-2 items-center max-w-full">
      <div className="flex shrink-0 gap-3 items-center">
        <div className="flex">
          <img
            src={video?.missingData?.profileUrl}
            alt="Profile Photo"
            className="rounded-full w-8.5 h-8.5"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-md font-semibold tracking-tight">
            {video.snippet?.channelTitle}
          </p>
          <p className="text-xs ">1.7M subscribers</p>
        </div>
        <Button
          variant="dark"
          size="default"
          className="ml-4 rounded-full text-sm px-4 py-2 font-semibold"
        >
          Subscribe
        </Button>
      </div>
      <div className="flex gap-2">
        <div className="flex ">
          <Button
            variant="default"
            size="default"
            className="rounded-full rounded-r-none text-sm px-4 py-2 border-r border-r-gray-300 flex gap-3 justify-center"
          >
            <ThumbsUp size={20} strokeWidth={1.25} />
            <p className="text-sm font-semibold">
              {formatCount(video.statistics.likeCount)}
            </p>
          </Button>
          <Button
            variant="default"
            size="default"
            className="rounded-full rounded-l-none text-sm px-3.5 py-2"
          >
            <ThumbsDown size={20} strokeWidth={1.25} className="align-middle" />
          </Button>
        </div>
        <Button
          variant="default"
          size="default"
          className="rounded-full text-sm px-3.5 py-2 flex gap-3 justify-center"
        >
          <Share size={20} strokeWidth={1.25} />
          <p className="text-sm font-semibold">Share</p>
        </Button>
        <Button
          variant="default"
          size="default"
          className="hidden rounded-full text-sm  px-3.5 py-2 gap-3 justify-center md:flex"
        >
          <Download size={20} strokeWidth={1.25} />
          <p className="text-sm font-semibold">Download</p>
        </Button>
        <Button
          variant="default"
          size="default"
          className="rounded-full text-sm p-2"
        >
          <Ellipsis size={20} strokeWidth={1.25} className="align-middle" />
        </Button>
      </div>
    </div>
  );
};

export default VideoActionBar;
