import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import categoriesService from '../../services/categories';


const initialState = {
  categories: [],
  currentCategory: {},
  loading: false,
  error: null,
};


export const fetchCategories = createAsyncThunk('categories/fetchCategories', async (thunkAPI) => {
  try {
    const categories = await categoriesService.fetchCategories();
    return categories;
  } catch (error) {
    throw thunkAPI.rejectWithValue(error?.response?.data || error);
  }
});


const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.loading = true
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.loading = false
      if (action.payload.success) {
        state.categories = action.payload.data
      } else {
        state.error = action.payload.message
      }
    },
    [fetchCategories.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
});


export default categoriesSlice.reducer;