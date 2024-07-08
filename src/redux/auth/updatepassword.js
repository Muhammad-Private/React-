import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


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

    const updatepassword_Slice = createSlice({
        name: 'auth',
        initialState: {
            isLoading: false,
            user: null,
            error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(updatepasswordApi.pending, (state) => {
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
        }
    })
    
    export default updatepassword_Slice.reducer;