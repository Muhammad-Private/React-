import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_Url}/getproducts`);
    return response.data; 
  } 
  catch (error) {
    throw error.response.data;  
  }
});

const fetchProductsSlice = createSlice({
    name: 'products',
    initialState: {
        products: null,
        error: ""
    },
    reducers: { 
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.products = null;
            state.error = '';
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.error = null;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.products = null;
            state.error = action.error ? action.error.message : 'Unknown error';
          })
        }
});

export default fetchProductsSlice.reducer;
