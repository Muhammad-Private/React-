// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import Auth_Slice from '../auth/Auth';
import fetchProductsSlice from '../Products/fetchProducts';
import addproductSlice from '../Products/AddProduct';
import deleteProductSlice from '../Products/deleteProduct';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = configureStore({
  reducer: {
    Auth_Slice,
    fetchProductsSlice,
    addproductSlice,
    deleteProductSlice,
    enhancers: [composeWithDevTools()],
  },
 
});

export default store;
