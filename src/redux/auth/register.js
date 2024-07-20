import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const SignUpApi = createAsyncThunk('auth/Register', async (signUpData) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_Url}/auth/Register`, signUpData);
    return response.data;
  } catch (error) {
    throw error.response.data || 'Failed to register';
  }
});

const registerSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    token: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SignUpApi.pending, (state) => {
        state.isLoading = true;
        state.token = null;
        state.error = null;
      })
      .addCase(SignUpApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(SignUpApi.rejected, (state, action) => {
        state.isLoading = false;
        state.token = null;
        state.error = action.error.message || 'Failed to register';
      });
  },
});

export default registerSlice.reducer;
