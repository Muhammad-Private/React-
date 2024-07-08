import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const logoutApi = createAsyncThunk('auth/logout', async () => 
    {
      try {
        const response = await axios.post(`${process.env.REACT_APP_Url}/auth/logout` );
        return  response.data; 
      } 
      catch (error) 
      {
        throw (error.response.data)  
      }
    });

const logout_Slice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        user: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logoutApi.pending, (state) => {
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
    }
})

export default logout_Slice.reducer;

