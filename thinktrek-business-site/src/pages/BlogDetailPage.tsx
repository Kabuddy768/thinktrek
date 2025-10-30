import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { type AppDispatch, type RootState } from '../store/store';
import { fetchBlogById, clearSelectedBlog } from '../store/slices/blogSlice';
import { Calendar, User, Clock, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { selectedBlog, loading, error } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    if (id) {
      dispatch(fetchBlogById(Number(id)));
    }

    return () => {
      dispatch(clearSelectedBlog());
    };
  }, [id, dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <span className="text-gray-600 font-medium text-lg">Loading article...</span>
        </div>
      </div>
    );
  }

  if (!selectedBlog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-6xl mb-4">📄</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Article Not Found</h2>
          <p className="text-gray-600 mb-6">
            The article you're looking for might have been removed or doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const authorName = selectedBlog.author
    ? `${selectedBlog.author.first_name} ${selectedBlog.author.last_name}`
    : 'Unknown Author';

  const formattedDate = new Date(selectedBlog.created_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const readingTime = Math.ceil(selectedBlog.content.replace(/<[^>]*>/g, "").split(" ").length / 200);

  // ✅ Determine which image to show: blog image first, then author image
  const heroImage = selectedBlog.image_url || selectedBlog.author?.image_url;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to All Articles
        </Link>

        {/* Article Card */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Hero Image - Show blog image if available, otherwise author image */}
          {heroImage ? (
            <div className="h-96 overflow-hidden relative">
              <img
                src={heroImage}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
            </div>
          ) : (
            // Fallback if no image
            <div className="h-96 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <ImageIcon size={120} className="text-white opacity-30" />
            </div>
          )}

          <div className="p-8 md:p-12">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {selectedBlog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                {selectedBlog.author?.image_url ? (
                  <img
                    src={selectedBlog.author.image_url}
                    alt={authorName}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                    onError={(e) => {
                      // Fallback to initials if author image fails
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {authorName.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-gray-800">
                    <User size={16} className="text-blue-500" />
                    {authorName}
                  </div>
                  {selectedBlog.author?.email && (
                    <div className="text-xs text-gray-500">{selectedBlog.author.email}</div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <Calendar size={16} className="text-gray-400" />
                <span>{formattedDate}</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-gray-400" />
                <span>{readingTime} min read</span>
              </div>
            </div>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />

            {/* Updated timestamp if different from created */}
            {selectedBlog.updated_at && selectedBlog.updated_at !== selectedBlog.created_at && (
              <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
                Last updated: {new Date(selectedBlog.updated_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            )}
          </div>
        </article>

        {/* Back to Blog Footer */}
        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ArrowLeft size={18} />
            Explore More Articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;