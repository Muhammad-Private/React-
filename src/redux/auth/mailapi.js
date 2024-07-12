import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const mailApi = createAsyncThunk('mail/forgotpassword', async (form) => 
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


    const mailApi_slice = createSlice({
        name:'mail',
        initialState: {
            isLoading: false,
            randomCode: "",
            error: null,
        },
        reducers: {},
        extraReducers: (builder) => {
            builder.addCase(mailApi.pending, (state) => {
                state.isLoading=true
                state.randomCode = "";
                state.error = null;
              })
              .addCase(mailApi.fulfilled, (state, action) => 
              {
                state.isLoading=false
                state.randomCode = action.payload.randomCode;
                state.error = null;
              })
              .addCase(mailApi.rejected, (state, action) => {
                state.isLoading=false
                state.randomCode = "";
                state.error = action.error.message || 'An error occurred while processing your request.';
              })
        }
    })
    
    export default mailApi_slice.reducer;