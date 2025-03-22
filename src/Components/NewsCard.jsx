import { useState } from "react";
import { FaRegBookmark, FaRegShareSquare, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="card bg-base-100 shadow-md border border-gray-200 p-4 mb-8">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="text-sm font-semibold">{news.author.name}</h3>
            <p className="text-xs text-gray-500">
              {news.author.published_date}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-600">
          <FaRegBookmark className="cursor-pointer" />
          <FaRegShareSquare className="cursor-pointer" />
        </div>
      </div>
      <h2 className="font-bold text-lg">{news.title}</h2>
      <img
        src={news.image_url}
        alt={news.title}
        className="w-full h-56 object-cover rounded-md my-3"
      />
      <p className="text-sm text-gray-600">
        {isExpanded ? news.details : `${news.details.substring(0, 500)}...`}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-red-500 font-semibold cursor-pointer ml-1"
        >
          {isExpanded ? " Show Less" : " Read More"}
        </button>
      </p>
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar />
          <span className="font-semibold">{news.rating.number}</span>
        </div>
        <span className="text-gray-600 text-sm">👁️ {news.total_view}</span>
      </div>
    </div>
  );
};

export default NewsCard;
