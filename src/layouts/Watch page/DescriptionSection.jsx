import React, { useState } from 'react'
import { formatDate } from '../../utils/formatDate'

const DescriptionSection = ({video}) => {
    const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-auto p-2 bg-neutral-100 mt-3 rounded-xl">
            <div className="flex">
              <p className="text-sm font-bold leading-relaxed">
                {video?.statistics?.viewCount} views{" "}
              </p>
              <p className="text-sm font-bold pl-3">
                {formatDate(video?.snippet?.publishedAt)}
              </p>
            </div>
            <div
              className={`whitespace-pre-wrap text-sm font-sans leading-relaxed relative overflow-hidden ${
                expanded ? "line-clamp-none" : "line-clamp-3"
              }`}
            >
              {video?.snippet?.description}
            </div>
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            >
              {" "}
              {expanded ? "show less" : "...more"}
            </span>
          </div>
  )
}

export default DescriptionSection