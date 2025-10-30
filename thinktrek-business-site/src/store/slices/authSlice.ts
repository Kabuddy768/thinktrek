
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import { authorsAPI } from '../../services/api';

interface Author {
  author_id: number;
  first_name: string;
  last_name: string;
  email: string;
  image_url?: string;
  is_verified: boolean;
}

interface AuthState {
  user: Author | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  registrationEmail: string | null; // ✅ ADDED for verification flow
}

const initialState: AuthState = {
  user: JSON.parse(localStorage.getItem('user') || 'null'),
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  isLoading: false,
  error: null,
  registrationEmail: null,
};

// Async thunks
export const registerAuthor = createAsyncThunk(
  'auth/register',
  async (data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }, { rejectWithValue }) => {
    try {
      const response = await authorsAPI.register(data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Registration failed');
    }
  }
);

export const verifyEmail = createAsyncThunk(
  'auth/verify',
  async (data: { email: string; verificationCode: string }, { rejectWithValue }) => {
    try {
      const response = await authorsAPI.verify(data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Verification failed');
    }
  }
);

export const loginAuthor = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await authorsAPI.login(credentials);
      const { token, author } = response.data;
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(author));
      
      return { token, user: author };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Login failed');
    }
  }
);

export const updateAuthorProfile = createAsyncThunk(
  'auth/updateProfile',
  async ({ id, data }: { id: number; data: Partial<Author> }, { rejectWithValue }) => {
    try {
      const response = await authorsAPI.update(id, data);
      const updatedUser = response.data.author;
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.error || 'Update failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.registrationEmail = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    clearError: (state) => {
      state.error = null;
    },
    setRegistrationEmail: (state, action: PayloadAction<string>) => {
      state.registrationEmail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerAuthor.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerAuthor.fulfilled, (state, action) => {
        state.isLoading = false;
        // Store email for verification step
        if (action.payload.author?.email) {
          state.registrationEmail = action.payload.author.email;
        }
      })
      .addCase(registerAuthor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Verify Email
      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.isLoading = false;
        state.registrationEmail = null; // Clear after successful verification
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Login
      .addCase(loginAuthor.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAuthor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginAuthor.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isAuthenticated = false;
      })
      // Update Profile
      .addCase(updateAuthorProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      });
  },
});

export const { logout, clearError, setRegistrationEmail } = authSlice.actions;
export default authSlice.reducer;