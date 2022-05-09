/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import coursesService from '../../services/courses';

const initialState = {
  courses: [],
  currentCourse: null,
  loading: false,
  error: null,
};

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async (thunkAPI) => {
    try {
      const courses = await coursesService.fetchCourses();
      return courses;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error?.response?.data || error);
    }
  }
);

export const fetchCourseBySlug = createAsyncThunk(
  'courses/fetchCourseBySlug',
  async (slug, thunkAPI) => {
    try {
      const course = await coursesService.fetchCourseBySlug(slug);
      return course;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error?.response?.data || error);
    }
  }
);

export const addReview = createAsyncThunk(
  'courses/addReview',
  async (payload, thunkAPI) => {
    try {
      const review = await coursesService.addReview(
        payload.courseId,
        payload.reviewId
      );
      return review;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error?.response?.data || error);
    }
  }
);

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    resetCurrentCourse: (state, action) => {
      state.currentCourse = null;
    },
  },
  extraReducers: {
    [fetchCourses.pending]: (state) => {
      state.loading = true;
    },
    [fetchCourses.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.success) {
        state.courses = action.payload.data;
      } else {
        state.error = action.payload.message;
      }
    },
    [fetchCourses.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchCourseBySlug.pending]: (state) => {
      state.loading = true;
    },
    [fetchCourseBySlug.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.success) {
        state.currentCourse = action.payload.data;
      } else {
        state.error = action.payload.message;
      }
    },
    [fetchCourseBySlug.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [addReview.pending]: (state) => {
      state.loading = true;
    },
    [addReview.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.success) {
        state.currentCourse.reviews = action.payload.data.reviews;
        toast.success(action.payload.message);
      } else {
        state.error = action.payload.message; 
        toast.success(action.payload.message);
      }
    },  
    [addReview.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default coursesSlice.reducer;
