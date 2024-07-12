import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchProducts } from "./fetchProducts";  // Assuming fetchProducts is an async thunk

export const deleteproductApi = createAsyncThunk(
  'deleteProduct/deleteProduct',
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_Url}/deleteProduct`, { data: { _id } });
      return response.data; 
    } catch (error) 
    {
      return rejectWithValue(error.response.data);  
    }
  }
);

const deleteProductSlice = createSlice({
  name: 'deleteProduct',
  initialState: {
    status: "",
    message:null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteproductApi.pending, (state) => 
        {
        state.status = "pending";
        state.message=null
      })
      .addCase(deleteproductApi.fulfilled, (state, action) => {
        state.message="product has deleted"
        state.status ="fulfilled";
      })
      .addCase(deleteproductApi.rejected, (state, action) => {
        state.status = "rejected";
        state.message = action.payload ? action.payload.message : 'An error occurred while deleting the product';
      });
  }
});

export default deleteProductSlice.reducer;
