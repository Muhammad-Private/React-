import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsapi = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_Url}/getproducts`);
    return response.data; 
  } 
  catch (error) 
  {
    throw error.response;  
  }
});

const fetchProductsSlice = createSlice({
    name: 'products',
    initialState: {
        status:"",
        products:null,
        error: null
    },
    reducers: { 
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProductsapi.pending, (state) => {
            state.status = "pending";
            state.products = null;
            state.error = null;
          })
          .addCase(fetchProductsapi.fulfilled, (state, action) => {
            state.status="fulfilled"
            state.products=action.payload;
            state.error = null;
          })
          .addCase(fetchProductsapi.rejected, (state, action) => {
            state.status="rejected"
            state.products = null;
            state.error = action.error ? action.error.message : ' error';
          })
        }
});

export default fetchProductsSlice.reducer;
