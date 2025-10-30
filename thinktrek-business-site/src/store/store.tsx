import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "../store/slices/blogSlice";


import authReducer from '../store/slices/authSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    auth:authReducer
    // other reducers...
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
