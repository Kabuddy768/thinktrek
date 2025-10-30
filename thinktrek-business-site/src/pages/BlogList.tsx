import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../store/store'
import { fetchBlogs } from '../store/slices/blogSlice'
import BlogCard from '../components/blog/BlogCard'
import toast from 'react-hot-toast'

const BlogListPage = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { blogs, loading, error } = useSelector((state: RootState) => state.blog)

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  useEffect(() => {
    if (error) toast.error(error)
  }, [error])

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Blog</h1>
        <p className="text-gray-600">Read the latest insights and stories</p>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <span className="text-gray-600 font-medium">Loading blogs...</span>
          </div>
        </div>
      )}

      {!loading && error && (
        <p className="text-red-500 text-center py-8">{error}</p>
      )}

      {!loading && !error && blogs.length === 0 && (
        <p className="text-gray-500 text-center py-8">No blogs available yet.</p>
      )}

      {!loading && !error && blogs.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogListPage
