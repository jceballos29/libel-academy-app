/** @format */

import { configureStore } from '@reduxjs/toolkit';

import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';
import coursesReducer from './features/courses/courseSlice';
import categoriesReducer from './features/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    courses: coursesReducer,
    categories: categoriesReducer,
  },
});

export default store;
