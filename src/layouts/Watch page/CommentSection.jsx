import Comment from "./comment";
import { commentData } from "./../../data/comments";
import ReplyComment from "./ReplyComment";

const CommentSection = () => {
  return (
    <div>
      <p className="text-2xl font-bold mt-4">Comments</p>
      {commentData.map((comment) => {
        return (
          <div key={comment.id}>
            <Comment data={comment} />
            <div className="ml-4 p-3">
              <ReplyComment comment={comment}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentSection;
