import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteproductApi = createAsyncThunk('DeleteProduct/deleteProduct', async (_id) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_Url}/deleteProduct`,{ data: { _id } });
    return response.data; 
  } 
  catch (error) 
  {
    throw error.response.data;  
  }
});

const deleteProductSlice = createSlice({
    name: 'deleteProduct',
    initialState: {
        status:"",
        error: ""
    },
    reducers: {  },
    extraReducers: (builder) => {
        builder
          .addCase(deleteproductApi.pending, (state) => {
            state.status = null;
            state.error = '';
          })
          .addCase(deleteproductApi.fulfilled, (state, action) => {
            state.status = action.payload;
            state.error = null;
          })
          .addCase(deleteproductApi.rejected, (state, action) => {
            state.status = null;
            // Use the error message from the action payload if available, otherwise provide a default error message
            state.error = action.payload ? action.payload.message : 'An error occurred while deleteing the product';
          })
    }
});

export default deleteProductSlice.reducer;
