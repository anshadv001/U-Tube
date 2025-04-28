import React from "react";
import Comment from "./comment";


const SecondLevelComment = ({ comments }) => {
    return comments.map((reply) => {
      return (
        <React.Fragment key={reply.id}>
          <Comment
            data={reply}
            isReply={true}
            isSecondLevelComment={true}
          />
          {/* Recursive call */}
          {reply.replies.length > 0 && (
            <SecondLevelComment comments={reply.replies} />
          )}
        </React.Fragment>
      );
    });
  };
  

export default SecondLevelComment;
