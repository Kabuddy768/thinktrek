import type { Blog } from "../../store/slices/blogSlice";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock, Image as ImageIcon } from "lucide-react";

export default function BlogCard({ blog }: { blog: Blog }) {
  const formattedDate = new Date(blog.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const authorName = blog.author
    ? `${blog.author.first_name} ${blog.author.last_name}`
    : "Unknown Author";

  const readingTime = Math.ceil(blog.content.replace(/<[^>]*>/g, "").split(" ").length / 200);
  const previewText = blog.content.replace(/<[^>]*>/g, "").substring(0, 150) + "...";

  return (
    <article className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Image Header - Show blog image if available, otherwise author image */}
      <div className="relative h-48 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
        {blog.image_url ? (
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : blog.author?.image_url ? (
          <img
            src={blog.author.image_url}
            alt={authorName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon size={64} className="text-white opacity-30" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold text-gray-700">
          <Clock size={12} />
          {readingTime} min read
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
          {blog.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
          {previewText}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium">
              <User size={14} className="text-blue-500" />
              {authorName}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-gray-400" />
              {formattedDate}
            </span>
          </div>
        </div>

        <Link
          to={`/blog/${blog.id}`}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all duration-300 group/link"
        >
          <span>Read Full Article</span>
          <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}