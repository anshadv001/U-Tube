import React, { useContext, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router";
import SuggestionSection from "./suggestionSection";
import DescriptionSection from "./DescriptionSection";
import VideoActionBar from "./VideoActionBar";
import CommentSection from "./CommentSection";
import SidebarModal from "../../Components/sidebar/SidebarModal";
import { SidebarContext } from "../../utils/sidebarContext/contexts";
import { addToWatchHistory } from "../History/addToWatchHistory";

const WatchPage = () => {
  const location = useLocation();
  const item = location.state?.item || {};
  const [searchParams] = useSearchParams();
  const vid = searchParams.get("vid");
  useEffect(() => {
    addToWatchHistory(item);
    window.scrollTo(0, 0);
  }, [vid]);

  const { showLargeSidebar, setShowLargeSidebar } = useContext(SidebarContext);
  useEffect(() => {
    setShowLargeSidebar(false);
  }, []);

  return (
    <div className="w-full shrink-0 max-w-[1300px] mx-auto">
      {showLargeSidebar && <SidebarModal />}
      <div className="lg:grid lg:grid-cols-12 gap-5 overflow-y-auto place-items-start">
        <div className="lg:col-span-8 w-full">
          <iframe
            width="100%"
            height=""
            className="rounded-xl aspect-video"
            src={`https://www.youtube.com/embed/${vid}?si=bV5M8NUVdWCngSal&autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            autoplay
          ></iframe>
          <p className="text-[19px] flex-wrap font-semibold leading-snug mt-3 tracking-tight">
            {item?.snippet?.title}
          </p>
          <VideoActionBar video={item} />
          <DescriptionSection video={item} />
          <CommentSection />
        </div>
        <div className="flex flex-col lg:col-span-4 w-full gap-2 pb-4">
          <SuggestionSection />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
