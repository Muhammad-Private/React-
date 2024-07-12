// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import login_Slice from '../auth/login';
import regiser_Slice from '../auth/register';
import logout_Slice from '../auth/logout';
import mailApi_slice from '../auth/mailapi';
import updatepassword_Slice from '../auth/updatepassword';
import fetchProductsSlice from '../Products/fetchProducts';
import addproductSlice from '../Products/AddProduct';
import deleteProductSlice from '../Products/deleteProduct';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartslice from '../Products/Cart'


const store = configureStore({
  reducer: {
    login_Slice,
    regiser_Slice,
    logout_Slice,
    mailApi_slice,
    updatepassword_Slice,
    fetchProductsSlice,
    addproductSlice,
    deleteProductSlice,
    addtocartslice: cartslice,
    enhancers: [composeWithDevTools()],
  },
 
});

export default store;
