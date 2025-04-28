import React, { useEffect, useRef } from "react";
import { useLocation, useSearchParams } from "react-router";
import SuggestionSection from "./suggestionSection";
import DescriptionSection from "./DescriptionSection";
import VideoActionBar from "./VideoActionBar";
import CommentSection from "./CommentSection";

const WatchPage = () => {
  const location = useLocation();
  const video = location.state || {};
  const [searchParams] = useSearchParams();
  const vid = searchParams.get("vid");
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
      <div className="grid lg:grid-cols-12 max-w-[1300px] gap-5  self-center overflow-y-auto place-items-start">
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
          <VideoActionBar video={video} />
          <DescriptionSection video={video} />
          <CommentSection />
        </div>
        <div className="grid lg:col-span-4 gap-2">
          <SuggestionSection />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
