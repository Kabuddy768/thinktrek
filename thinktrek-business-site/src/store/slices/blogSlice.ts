import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit";
import { blogsAPI } from "../../services/api"; // ✅ Correct import path for blogsAPI

// =======================
// Blog Interface
// =======================
export interface Blog {
  id: number;
  title: string;
  content: string;
  image_url?: string;
  author_id: number;
  created_at: string;
  updated_at: string;
  author?: {
    author_id: number;
    first_name: string;
    last_name: string;
    email: string;
    image_url?: string | null;
  };
}

// =======================
// State Interface
// =======================
interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
  selectedBlog: Blog | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
  selectedBlog: null,
};

// =======================
// Async Thunks
// =======================

// Fetch all blogs
export const fetchBlogs = createAsyncThunk(
  "blogs/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await blogsAPI.getAll();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch blogs");
    }
  }
);

// Fetch blog by ID
export const fetchBlogById = createAsyncThunk(
  "blogs/fetchById",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await blogsAPI.getById(id);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch blog");
    }
  }
);

// Fetch blogs by author
export const fetchBlogsByAuthor = createAsyncThunk(
  "blogs/fetchByAuthor",
  async (authorId: number, { rejectWithValue }) => {
    try {
      const response = await blogsAPI.getByAuthor(authorId);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch author blogs");
    }
  }
);

// Create blog
export const createBlog = createAsyncThunk(
  "blogs/create",
  async (blogData: { title: string; content: string }, { rejectWithValue }) => {
    try {
      const response = await blogsAPI.create(blogData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to create blog");
    }
  }
);

// Update blog
export const updateBlog = createAsyncThunk(
  "blogs/update",
  async (
    { id, data }: { id: number; data: Partial<Pick<Blog, "title" | "content">> },
    { rejectWithValue }
  ) => {
    try {
      const response = await blogsAPI.update(id, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to update blog");
    }
  }
);

// Delete blog
export const deleteBlog = createAsyncThunk(
  "blogs/delete",
  async (id: number, { rejectWithValue }) => {
    try {
      await blogsAPI.delete(id);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to delete blog");
    }
  }
);

// =======================
// Slice Definition
// =======================
const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSelectedBlog: (state) => {
      state.selectedBlog = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch blog by ID
      .addCase(fetchBlogById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBlog = action.payload;
      })
      .addCase(fetchBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Fetch blogs by author
      .addCase(fetchBlogsByAuthor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogsByAuthor.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogsByAuthor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Create blog
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs.unshift(action.payload); // Newest first
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Update blog
      .addCase(updateBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;
        const index = state.blogs.findIndex((b) => b.id === updated.id);
        if (index !== -1) {
          state.blogs[index] = updated;
        }
        if (state.selectedBlog?.id === updated.id) {
          state.selectedBlog = updated;
        }
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // Delete blog
      .addCase(deleteBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = state.blogs.filter((b) => b.id !== action.payload);
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

// =======================
// Exports
// =======================
export const { clearError, clearSelectedBlog, setLoading } = blogSlice.actions;
export default blogSlice.reducer;
