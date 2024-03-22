// src/redux/authSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const loginApi = createAsyncThunk('auth/login', async (loginData) => 
{
  try {
    const response = await axios.post(`${process.env.REACT_APP_Url}/auth/login`, loginData);
    return  response.data; 
  } 
  catch (error) 
  {
    throw (error.response.data)  
  }
});

export const logoutApi = createAsyncThunk('auth/logout', async () => 
{
  try {
    const response = await axios.post(`${process.env.REACT_APP_Url}/auth/logout`, );
    return  response.data; 
  } 
  catch (error) 
  {
    throw (error.response.data)  
  }
});

export const updatepasswordApi = createAsyncThunk('auth/updatepassword', async (updatepassword) => 
{
  try {
    const response = await axios.post(`${process.env.REACT_APP_Url}/auth/updatepassword`, updatepassword);
    return response.data;
  } 
  catch (error) 
  {
    throw (error.response.data)  
  }
});

export const mailApi = createAsyncThunk('auth/forgotpassword', async (form) => 
{
  try {
    const response = await axios.post(`${process.env.REACT_APP_Url}/auth/forgotpassword`, form);
    return  response.data; 
  } 
  catch (error) 
  {
    throw (error.response.data)  
  }
});

export const SignUpApi = createAsyncThunk('auth/register', async (SignUp) => 
{
  try {
    const response = await axios.post(`${process.env.REACT_APP_Url}/auth/register`, SignUp);
    return response.data;
  } 
  catch (error) 
  {
    throw (error.response.data)  
  }
});


const Auth_Slice = createSlice({
  name: 'auth',
  initialState: {
    isLoading:false,
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginApi.pending, (state) => {
        state.isLoading=true
        state.user = null;
        state.error = null;
      })
      .addCase(loginApi.fulfilled, (state, action) => 
      {
        state.isLoading=false
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginApi.rejected, (state, action) => {
        state.isLoading=false
        state.user = null;
        state.error = action.error.message;
      })
      .addCase(updatepasswordApi.pending, (state) => {
        state.isLoading=true
        state.error = null;
      })
      .addCase(updatepasswordApi.fulfilled, (state, action) => 
      {
        state.isLoading=false
        state.user = action.payload;
        state.error = null;
      })
      .addCase(updatepasswordApi.rejected, (state, action) => {
        state.isLoading=false
        state.error = action.error.message || 'An error occurred while processing your request.';
      })
      .addCase(mailApi.pending, (state) => {
        state.isLoading=true
        state.user = null;
        state.error = null;
      })
      .addCase(mailApi.fulfilled, (state, action) => 
      {
        state.isLoading=false
        state.user = action.payload;
        state.error = null;
      })
      .addCase(mailApi.rejected, (state, action) => {
        state.isLoading=false
        state.user = null;
        state.error = action.error.message || 'An error occurred while processing your request.';
      })
      .addCase(SignUpApi.pending, (state) => {
        state.isLoading=true
        state.user = null;
        state.error = null;
      })
      .addCase(SignUpApi.fulfilled, (state, action) => 
      {
        state.isLoading=false
        state.user = action.payload;
        state.error = null;
      })
      .addCase(SignUpApi.rejected, (state, action) => {
        state.isLoading=false
        state.user = null;
        state.error = action.error.message || 'failed to register';
      })
      .addCase(logoutApi.pending, (state) => {
        state.isLoading=true
        state.user = null;
        state.error = null;
      })
      .addCase(logoutApi.fulfilled, (state, action) => 
      {
        state.isLoading=false
        state.user = null;
        state.error = null;
      })
      .addCase(logoutApi.rejected, (state, action) => {
        state.isLoading=false
        state.user = null;
        state.error = action.error.message || 'failed to logout';
      });

  },
});



export default  Auth_Slice.reducer;