import Comment from "./comment";
import { commentData } from "./../../data/comments";
import ReplyComment from "./ReplyComment";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { infiniteScroll } from "../../utils/infiniteScroll";

const CommentSection = () => {
  const [commentsToRender, setCommentsToRender] = useState([]);
  const { ref, inView } = useInView({ threshold: 0.2 });
  const currentPage = useRef(0);
  const fullRendered = useRef(false);
  useEffect(() => {
    if (inView) {
      let { paginatedData, listCompleted } = infiniteScroll({
        fullData: commentData,
        currentPage: ++currentPage.current,
        itemsPerPage: 10,
      });
      setTimeout(() => {
        setCommentsToRender((prev) => [...prev, ...paginatedData]);
      }, 300);
      fullRendered.current = listCompleted;
    }
  }, [inView]);
  console.log({ commentsToRender: commentsToRender });

  return (
    <div>
      <p className="text-2xl font-bold mt-4">Comments</p>
      {commentsToRender.map((comment) => {
        return (
          <div key={comment.id}>
            <Comment data={comment} />
            <div className="ml-4 p-3">
              <ReplyComment comment={comment} />
            </div>
          </div>
        );
      })}
      <div
        class={`${
          fullRendered.current ? "hidden" : "flex"
        } items-center justify-center h-14`}
        ref={ref}
      >
        <div class="w-8 h-8 border-4 border-neutral-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default CommentSection;
