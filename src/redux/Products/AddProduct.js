import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const addproductApi = createAsyncThunk('AddProduct/AddProduct', async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_Url}/AddProduct`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } 
  catch (error) {
    // Use rejectWithValue to pass the error to the thunk
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});



const addproductSlice = createSlice({
    name: 'AddProduct',
    initialState: {
        status:"",
        error: ""
    },
    reducers: {  },
    extraReducers: (builder) =>
       {
        builder
          .addCase(addproductApi.pending, (state) => {
            state.status = null;
            state.error = '';
          })
          .addCase(addproductApi.fulfilled, (state, action) => {
            state.status = action.payload;
            state.error = null;
          })
          .addCase(addproductApi.rejected, (state, action) => {
            state.status = null;
            // Use the error message from the action payload if available, otherwise provide a default error message
            state.error = action.payload ? action.payload.message : 'An error occurred while adding the product';
          })
    }
});

export default addproductSlice.reducer;
