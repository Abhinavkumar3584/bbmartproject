import React from "react";
import { IoMdTime } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogItem = ({ post }) => {
  // Default data if no post is provided
  const defaultPost = {
    id: 1,
    title: "Nullam ullamcorper ornare molestie",
    excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text.",
    date: "March 3, 2025",
    image: "https://elastic-path.transforms.svdcdn.com/production/images/Card-Images/1280x792_2025-Graphic.png?w=520&h=322&q=90&fm=webp&fit=crop&dm=1728503130&s=a6e86de50b9d013f257ba5e455c64251"
  };

  // Use provided post data or defaults
  const {
    id,
    title,
    excerpt,
    date,
    image
  } = post || defaultPost;

  // Format date into more readable format if needed
  const formattedDate = date?.toUpperCase() || "03 MARCH, 2025";

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/600x400?text=Blog+Post';
          }}
        />

        <span className="absolute bottom-3 right-3 flex items-center gap-1 bg-blue-600 text-white text-xs px-2 py-1 rounded shadow-sm">
          <IoMdTime className="text-white" /> {formattedDate}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          <Link to={`/blog/${id}`} className="focus:outline-none">
            {title}
          </Link>
        </h2>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
          {excerpt}
        </p>
        
        <Link 
          to={`/blog/${id}`} 
          className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors group mt-auto"
          aria-label={`Read more about ${title}`}
        >
          Read More
          <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
