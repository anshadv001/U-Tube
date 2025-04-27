import React, { useState } from "react";
import Comment from "./comment";
import { commentData } from "./../../data/comments";
import Button from "../../Components/Button";
import { ChevronDown, ChevronUp } from "lucide-react";

const CommentSection = () => {
  const [showReplies, setShowReplies] = useState(false);
  return (
    <div>
      <p className="text-2xl font-bold mt-4">Comments</p>
      {commentData.map((comment) => {
        return (
          <div key={comment.id}>
            {/* Render the first comment */}
            <Comment data={comment} />

            <div className="ml-4 p-3">
              {/* Button always visible */}
              <div>
                <button
                  className="flex gap-1 rounded-full px-2 py-1 text-sm text-blue-500 hover:bg-blue-100 pr-3"
                  onClick={() => setShowReplies(!showReplies)}
                >
                  <div>
                    {!showReplies ? (
                      <ChevronDown size={20} strokeWidth={1.25} />
                    ) : (
                      <ChevronUp size={20} strokeWidth={1.25} />
                    )}
                  </div>
                  {comment.replies.length} replies
                </button>
              </div>

              {/* Render replies */}
              {showReplies &&
                comment.replies.map((reply) => {
                  return (
                    <div key={reply.id} className="border-l pl-3">
                      <Comment data={reply} isReply={true} />
                      {reply.replies.map((sreply) => {
                        return (
                          <Comment
                            key={sreply.id}
                            data={sreply}
                            isReply={true}
                            isSecondLevelComment={true}
                          />
                        );
                      })}
                    </div>
                  );
                })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
