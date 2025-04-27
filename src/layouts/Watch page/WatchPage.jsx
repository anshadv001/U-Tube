import React, { useEffect, useRef, useState } from "react";
import CategoryPills from "../../Components/CategoryPills";
import VideoCard from "../../Components/videoCard";
import { Link, useLocation, useSearchParams } from "react-router";
import Button from "../../Components/Button";
import { Download, Ellipsis, Share, ThumbsDown, ThumbsUp } from "lucide-react";
import { formatCount } from "../../utils/formatCount";
import { formatDate } from "../../utils/formatDate";
import SuggestionSection from "./suggestionSection";

const WatchPage = () => {
  const location = useLocation();
  const video = location.state || {};
  const [searchParams] = useSearchParams();
  const vid = searchParams.get("vid");
  const [expanded, setExpanded] = useState(false);

  const divRef = useRef(null);
  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = 0;
    }
  }, [vid]);

  console.log({
    fromWatchpage: "",
    video: vid,
    watchReredered: divRef.current,
  });

  return (
    <div className="w-auto  overflow-auto shrink-0" ref={divRef}>
      <div className="grid lg:grid-cols-12 max-w-[1300px] gap-5  self-center overflow-y-auto">
        <div className="lg:col-span-8 w-full">
          <iframe
            width="100%"
            height=""
            className="rounded-xl aspect-video"
            src={`https://www.youtube.com/embed/${vid}?si=bV5M8NUVdWCngSal`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            autoplay
          ></iframe>
          <p className="text-[19px] flex-wrap font-semibold leading-snug mt-3 tracking-tight">
            {video.snippet.title}
          </p>
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
                  <ThumbsDown
                    size={20}
                    strokeWidth={1.25}
                    className="align-middle"
                  />
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
                <Ellipsis
                  size={20}
                  strokeWidth={1.25}
                  className="align-middle"
                />
              </Button>
            </div>
          </div>
          <div className="w-auto p-2 bg-neutral-100 mt-3 rounded-xl">
            <div className="flex">
              <p className="text-sm font-bold leading-relaxed">
                {video.statistics.viewCount} views{" "}
              </p>
              <p className="text-sm font-bold pl-3">
                {formatDate(video.snippet.publishedAt)}
              </p>
            </div>
            <div
              className={`whitespace-pre-wrap text-sm font-sans leading-relaxed relative overflow-hidden ${
                expanded ? "line-clamp-none" : "line-clamp-3"
              }`}
            >
              {video.snippet.description}
            </div>
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            >
              {" "}
              {expanded ? "show less" : "...more"}
            </span>
          </div>
        </div>
        <div className="grid lg:col-span-4 gap-2">
          <SuggestionSection />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
// H8aHkIBQ9dM
