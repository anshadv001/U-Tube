import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'
import Comment from "./comment";
import SecondLevelComment from './SecondLevelComment';


const ReplyComment = ({comment}) => {
    const [showReplies, setShowReplies] = useState(false);

    return (
        <>
          <div className='ml-3'>
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
          {showReplies &&
            comment.replies.map((reply) => {
              return (
                <div key={reply.id} className="border-l pl-3">
                  <Comment data={reply} isReply={true} />
                  <SecondLevelComment comments={reply.replies} />
                </div>
              );
            })}
        </>
      );
}

export default ReplyComment