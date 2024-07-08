import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const SignUpApi = createAsyncThunk('auth/Register', async (SignUp) => 
    {
      try {
        const response = await axios.post(`${process.env.REACT_APP_Url}/auth/Register`, SignUp);
        return response.data;
      } 
      catch (error) 
      {
        throw (error.response.data)  
      }
    });



    const regiser_Slice = createSlice({
        name: 'auth',
        initialState: {
            isLoading: false,
            user: null,
            error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(SignUpApi.pending, (state) => {
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
        }
    })
    
    export default regiser_Slice.reducer;
