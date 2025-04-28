import { User } from "lucide-react";
import React from "react";

const Comment = ({ data, isReply = false, isSecondLevelComment }) => {
  return (
    <div className="flex mt-3 gap-4">
      <div className={`rounded-full border shrink-0 ${isReply ? "w-6 h-6" : "w-9 h-9"}`}>
        {isReply ? (
          <User className="m-auto mt-1" size={20} strokeWidth={1.25} />
        ) : (
          <User className="m-auto mt-1" />
        )}
      </div>
      <div className="flex flex-col">
        <p className="text-xs font-semibold">{data.name}</p>
        <p className="inline">
          <span className="text-blue-800 mr-2">
            {isSecondLevelComment ? data?.replyingTo : null}
          </span>
          <span className="text-md">{data.comment}</span>
        </p>
      </div>
    </div>
  );
};

export default Comment;
