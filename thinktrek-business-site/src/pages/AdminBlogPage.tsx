import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type AppDispatch, type RootState } from '../store/store';
import { fetchBlogs, createBlog, updateBlog, deleteBlog } from '../store/slices/blogSlice';
import { updateAuthorProfile } from '../store/slices/authSlice';
import BlogForm from '../components/blog/BlogForm';
import ImageUpload from '../components/imageUpload/ImageUpload';
import toast from 'react-hot-toast';
import { FaUser, FaEdit, FaTrash, FaSave, FaTimes, FaPlusCircle, FaBlog, FaImage } from 'react-icons/fa';

const AdminBlogPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { blogs, loading, error } = useSelector((state: RootState) => state.blog);
  const { user } = useSelector((state: RootState) => state.auth);
  
  const [editing, setEditing] = useState<number | null>(null);
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [profileData, setProfileData] = useState({
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    email: user?.email || '',
    image_url: user?.image_url || '',
  });

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setProfileData({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        image_url: user.image_url || '',
      });
    }
  }, [user]);

  const handleUpdate = async (id: number, data: { title: string; content: string; image_url?: string }) => {
    console.log('🔍 Updating blog with data:', data);
    
    const result = await dispatch(updateBlog({ id, data }));
    if (updateBlog.fulfilled.match(result)) {
      toast.success('Blog updated successfully!');
      setEditing(null);
    } else {
      toast.error('Failed to update blog.');
    }
  };

  const handleCreate = async (data: { title: string; content: string; image_url?: string }) => {
    console.log('🔍 Creating blog with data:', data);
    
    const result = await dispatch(createBlog(data));
    if (createBlog.fulfilled.match(result)) {
      toast.success('Blog created successfully!');
      setShowCreateForm(false);
    } else {
      toast.error('Failed to create blog.');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post? This action cannot be undone.')) return;
    const result = await dispatch(deleteBlog(id));
    if (deleteBlog.fulfilled.match(result)) {
      toast.success('Blog deleted successfully!');
    } else {
      toast.error('Failed to delete blog.');
    }
  };

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const result = await dispatch(
      updateAuthorProfile({ id: user.author_id, data: profileData })
    );

    if (updateAuthorProfile.fulfilled.match(result)) {
      toast.success('Profile updated successfully!');
      setShowProfileEdit(false);
    } else {
      toast.error('Failed to update profile.');
    }
  };

  // Filter user's blogs
  const myBlogs = blogs.filter(blog => blog.author_id === user?.author_id);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Blog Dashboard</h1>
              <p className="text-blue-100">Manage your blog posts and profile</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <p className="text-sm text-blue-100">Total Posts</p>
                <p className="text-3xl font-bold">{myBlogs.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaUser className="text-blue-600" />
              Profile
            </h2>
            <button
              onClick={() => setShowProfileEdit(!showProfileEdit)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {showProfileEdit ? <FaTimes /> : <FaEdit />}
              {showProfileEdit ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {showProfileEdit ? (
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={profileData.first_name}
                    onChange={(e) => setProfileData({ ...profileData, first_name: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={profileData.last_name}
                    onChange={(e) => setProfileData({ ...profileData, last_name: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all"
                  required
                />
              </div>

              <ImageUpload
                currentImage={profileData.image_url}
                onImageUploaded={(url) => setProfileData({ ...profileData, image_url: url })}
              />

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                <FaSave />
                Save Changes
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-6">
              {user?.image_url ? (
                <img
                  src={user.image_url}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold">
                  {user?.first_name.charAt(0)}
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {user?.first_name} {user?.last_name}
                </h3>
                <p className="text-gray-600">{user?.email}</p>
                <p className="text-sm text-green-600 mt-1">✓ Verified Account</p>
              </div>
            </div>
          )}
        </div>

        {/* Create Blog Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <FaBlog className="text-blue-600" />
              Create New Post
            </h2>
            <button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              {showCreateForm ? <FaTimes /> : <FaPlusCircle />}
              {showCreateForm ? 'Cancel' : 'New Post'}
            </button>
          </div>

          {showCreateForm && (
            <BlogForm onSubmit={handleCreate} submitLabel="Publish Post" />
          )}
        </div>

        {/* My Blogs Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Blog Posts</h2>

          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
          )}

          {error && <p className="text-red-500 text-center py-8">{error}</p>}

          {!loading && myBlogs.length === 0 && (
            <div className="text-center py-12">
              <FaBlog className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No blog posts yet. Create your first post!</p>
            </div>
          )}

          <div className="space-y-6">
            {myBlogs.map((blog) => (
              <div
                key={blog.id}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                {editing === blog.id ? (
                  // ✅ EDIT MODE - Show edit form with header
                  <div>
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <FaEdit className="text-blue-600" />
                        Edit Blog Post
                      </h3>
                      <button
                        onClick={() => setEditing(null)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        <FaTimes />
                        Cancel
                      </button>
                    </div>
                    <BlogForm
                      initial={blog}
                      submitLabel="Update Post"
                      onSubmit={(data) => handleUpdate(blog.id, data)}
                    />
                  </div>
                ) : (
                  // ✅ VIEW MODE - Show blog preview
                  <>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        {/* Blog Image Preview */}
                        {blog.image_url && (
                          <div className="mb-4">
                            <img
                              src={blog.image_url}
                              alt={blog.title}
                              className="w-full max-w-md h-48 object-cover rounded-lg border-2 border-gray-200"
                            />
                          </div>
                        )}
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                        <p className="text-sm text-gray-500 mb-3">
                          Published {new Date(blog.created_at).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                        <p className="text-gray-600 line-clamp-2">
                          {blog.content.replace(/<[^>]*>/g, '')}
                        </p>
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => setEditing(blog.id)}
                          className="flex items-center gap-2 px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors font-medium"
                          title="Edit Blog"
                        >
                          <FaEdit size={18} />
                          <span className="hidden sm:inline">Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="flex items-center gap-2 px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors font-medium"
                          title="Delete"
                        >
                          <FaTrash size={18} />
                          <span className="hidden sm:inline">Delete</span>
                        </button>
                      </div>
                    </div>

                    {/* Show image badge if blog has image */}
                    {blog.image_url && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <span className="inline-flex items-center gap-2 text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          <FaImage className="text-blue-500" />
                          Featured image attached
                        </span>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogPage;