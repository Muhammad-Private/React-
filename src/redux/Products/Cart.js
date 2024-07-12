import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers: {
    addtocart: (state, action) => {
      const productId = action.payload._id;
      const productExists = state.products.some(product => product._id === productId);
      if (!productExists) 
        {
        state.products.push(action.payload);
      }
    },
  },
});

export const { addtocart } = cartSlice.actions;
export default cartSlice.reducer;
