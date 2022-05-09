import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import authService from '../../services/auth'


const initialState = {
  
  isAuthenticated: false,
  isLoading: false,
  isRegistered: false,
  error: null,
  message: null,
}

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
  try {
    const response = await authService.register(user)
    return response
  } catch (error) {
    thunkAPI.rejectWithValue(error?.response?.data || error)
  }
}
)


export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const response = await authService.login(user)
    return response
  } catch (error) {
    thunkAPI.rejectWithValue(error?.response?.data || error)
  }
})


export const logout = createAsyncThunk('auth/logout', async (user, thunkAPI) => {
  try {
    const response = await authService.logout()
    return response
  } catch (error) {
    throw thunkAPI.rejectWithValue(error?.response?.data || error)
  }
})


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isAuthenticated = false
      state.isLoading = false;
      state.isRegistered = false;
      state.error = null;
      state.message = null;
    }
  },
  extraReducers: (builder) => {
    builder
    // REGISTER
    .addCase(register.pending, (state, action) => {
      state.isLoading = true
    })
    .addCase(register.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload.success) {
        state.isRegistered = true
        toast.success(action.payload.message)
      } else {
        toast.error(action.payload.message)
      }
    })
    .addCase(register.rejected, (state, action) => {
      state.isLoading = false
      state.isRegistered = false
      state.error = action.payload
    })
    // LOGIN
    .addCase(login.pending, (state, action) => {
      state.isLoading = true
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false
      if (action.payload.success) {
        state.isAuthenticated = true
        toast.success(action.payload.message)
      } else {
        state.isAuthenticated = false
        toast.error(action.payload.message)
      }
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    // LOGOUT
    .addCase(logout.pending, (state, action) => {
      state.isLoading = true
    })
    .addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false
      state.isAuthenticated = false
      state.isRegistered = true
      toast.success(action.payload.message)
    })
    .addCase(logout.rejected, (state, action) => {
      state.isLoading = false
      state.isRegistered = false
      state.error = action.payload
      toast.error(action.payload.message)
    })
  }
})

export const { reset } = authSlice.actions

export default authSlice.reducer