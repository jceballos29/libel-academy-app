import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import userService from '../../services/user'


const initialState = {
  user: null,
  isLoading: false,
  changed: false,
  updated: false,
}


export const fetchUser = createAsyncThunk('user/fetchUser', async (thunkAPI) => {
  try {
    const response = await userService.fetchUser()
    return response
  } catch (error) {
    throw thunkAPI.rejectWithValue(error?.response?.data || error)
  }
})


export const updateUser = createAsyncThunk('user/updateUser', async (editedUser, thunkAPI) => {
  try {
    const response = await userService.updateUser(editedUser)
    return response
  } catch (error) {
    throw thunkAPI.rejectWithValue(error?.response?.data || error)
  }
})


export const changePassword = createAsyncThunk('user/changePassword', async (passwords, thunkAPI) => {
  try {
    const { oldPassword, newPassword } = passwords
    const response = await userService.changePassword(oldPassword, newPassword)
    return response
  } catch (error) {
    throw thunkAPI.rejectWithValue(error?.response?.data || error)
  }
})


export const deleteUser = createAsyncThunk('user/deleteUser', async (thunkAPI) => {
  try {
    const response = await userService.deleteUser()
    return response
  } catch (error) {
    throw thunkAPI.rejectWithValue(error?.response?.data || error)
  }
})


export const addCourseToWishlist = createAsyncThunk('user/addCourseToWishlist', async (courseId, thunkAPI) => {
  try {
    const response = await userService.addCourseToWishlist(courseId)
    return response
  } catch (error) {
    throw thunkAPI.rejectWithValue(error?.response?.data || error)
  }
})


export const removeCourseFromWishlist = createAsyncThunk('user/removeCourseFromWishlist', async (courseId, thunkAPI) => {
  try {
    const response = await userService.removeCourseFromWishlist(courseId)
    return response
  } catch (error) {
    throw thunkAPI.rejectWithValue(error?.response?.data || error)
  }
})


export const enrollCourse = createAsyncThunk('user/enrollCourse', async (courseId, thunkAPI) => {
  try {
    const response = await userService.enrollCourse(courseId)
    return response
  } catch (error) {
    throw thunkAPI.rejectWithValue(error?.response?.data || error)
  }
})


export const dropCourse = createAsyncThunk('user/dropCourse', async (courseId, thunkAPI) => {
  try {
    const response = await userService.dropCourse(courseId)
    return response
  } catch (error) {
    throw thunkAPI.rejectWithValue(error?.response?.data || error)
  }
})


export const completeLesson = createAsyncThunk('user/completeLesson', async (payload, thunkAPI) => {
  try {
    console.log('slice: ', payload.courseId, payload.lessonId )
    const response = await userService.completeLesson(payload.courseId, payload.lessonId)
    return response
  } catch (error) {
    throw thunkAPI.rejectWithValue(error?.response?.data || error)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.user = null
      state.isLoading = false
      state.changed = false
      state.updated = false
    }
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.isLoading = true
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.isLoading = false
      state.user = action.payload.data
    },
    [fetchUser.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [updateUser.pending]: (state, action) => {
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, action) => {
      state.isLoading = false
      if(action.payload.success) {
        state.user = action.payload.data
        state.updated = true
        toast.success(action.payload.message)
      } else {
        toast.error(action.payload.message)
      }
    },
    [updateUser.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [changePassword.pending]: (state, action) => {
      state.isLoading = true
    },
    [changePassword.fulfilled]: (state, action) => {
      state.isLoading = false
      if(action.payload.success) {
        state.changed = true
        toast.success(action.payload.message)
      } else {
        toast.error(action.payload.message)
      }
    },
    [changePassword.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [deleteUser.pending]: (state, action) => {
      state.isLoading = true
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.isLoading = false
      if(action.payload.success) {
        toast.success(action.payload.message)
        state.user = null
      } else {
        toast.error(action.payload.message)
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [addCourseToWishlist.pending]: (state, action) => {
      state.isLoading = true
    },
    [addCourseToWishlist.fulfilled]: (state, action) => {
      state.isLoading = false
      if(action.payload.success) {
        toast.success(action.payload.message)
        state.user = action.payload.data
      } else {
        toast.error(action.payload.message)
      }
    },
    [addCourseToWishlist.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [removeCourseFromWishlist.pending]: (state, action) => {
      state.isLoading = true
    },
    [removeCourseFromWishlist.fulfilled]: (state, action) => {
      state.isLoading = false
      if(action.payload.success) {
        toast.success(action.payload.message)
        state.user = action.payload.data
      } else {
        toast.error(action.payload.message)
      }
    },
    [removeCourseFromWishlist.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [enrollCourse.pending]: (state, action) => {
      state.isLoading = true
    },
    [enrollCourse.fulfilled]: (state, action) => {
      state.isLoading = false
      if(action.payload.success) {
        toast.success(action.payload.message)
        state.user = action.payload.data
      } else {
        toast.error(action.payload.message)
      }
    },
    [enrollCourse.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [dropCourse.pending]: (state, action) => {
      state.isLoading = true
    },
    [dropCourse.fulfilled]: (state, action) => {
      state.isLoading = false
      if(action.payload.success) {
        toast.success(action.payload.message)
        state.user = action.payload.data
      } else {
        toast.error(action.payload.message)
      }
    },
    [dropCourse.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    [completeLesson.pending]: (state, action) => {
      state.isLoading = true
    },
    [completeLesson.fulfilled]: (state, action) => {
      state.isLoading = false
      if(action.payload.success) {
        toast.success(action.payload.message)
        state.user = action.payload.data
      } else {
        toast.error(action.payload.message)
      }
    },
  }
})


export const { resetUser } = userSlice.actions

export default userSlice.reducer