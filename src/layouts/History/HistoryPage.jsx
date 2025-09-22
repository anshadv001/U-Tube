import { useWatchHistory } from "./useWatchHistory";
import VideoCard from "../../Components/videoCard";
import { Delete, Pause, Search, Settings, Trash } from "lucide-react";
import Button from "../../Components/Button";

const HistoryPage = () => {
  const watchHistory = useWatchHistory();

  return (
    <div className="overflow-auto relative h-full p-10 ">
      <div className="max-w-[1050px] mx-auto grid sm:grid-cols-[1.8fr_1fr] gap-10 h-full">
        <div className="flex flex-col gap-3 h-full">
          <p className="text-3xl font-bold mb-3">Watch history</p>
          {watchHistory.map((item) => {
            return (
              <VideoCard
                key={item.id}
                item={item}
                showChannelIcon={false}
                className="grid grid-cols-[1fr_2fr] sm:grid-cols-[1fr_2fr]"
              />
            );
          })}
        </div>
        <div className="">
          <div
            className={`flex items-center justify-center fixed inset-y-0 h-full `}
          >
            <div className="flex flex-col gap-2 text-sm font-semibold">
              <div className="flex items-center gap-1 border-b m-3">
                <Button variant="ghost" size="icon" className="-ml-2">
                  <Search size={20} className="font-blod " />
                </Button>

                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search watch history"
                  className="p-1 focus:outline-none"
                />
              </div>
              <Button
                variant="ghost"
                size="default"
                className="flex gap-2 rounded-full px-3"
              >
                <Trash size={20} className="font-blod" />
                <p className="">Clear all search history</p>
              </Button>
              <Button
                variant="ghost"
                size="default"
                className="flex gap-2 rounded-full px-3"
              >
                <Pause size={20} className="font-blod" />
                <p className="">Pause and watch history</p>
              </Button>
              <Button
                variant="ghost"
                size="default"
                className="flex gap-2 rounded-full px-3"
              >
                <Settings size={20} className="font-blod" />
                <p className="">Manage all history</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
