// Example App.js
import React from "react";
import { BrowserRouter, Routes, Route,Redirect   } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./componenets/NavBar/NavBar.jsx";
import Login from "./componenets/auth/Login/Login.jsx";
import Code from "./componenets/auth/code/Code.jsx";
import Mail from "./componenets/auth/Email/Email.jsx";
import Updatepassword from "./componenets/auth/update_password/Updatepassword.jsx";
import Register from "./componenets/auth/Register/Register.jsx";
import './App.css';
import Cart from "./pages/cart/Cart.jsx"
import Profile from "./pages/profile/Profile.jsx";
import ShowProducts from "./pages/products_store/FetchProducts.jsx";
import {updatepassword,profile,cart,email,signUp,code} from '../src/componenets/varibles/Constans.jsx'
import { useDispatch } from "react-redux";
import { fetchProductsapi } from "./redux/Products/fetchProducts.js";
import { deleteproductApi } from "./redux/Products/deleteProduct.js";
function App() 
{

  const dispatch=useDispatch();
  const handleDeleteProduct = async (productId) => {
    try {
      await dispatch(deleteproductApi(productId));
      dispatch(fetchProductsapi()); // Refetch products after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path={signUp} element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path={updatepassword} element={<Updatepassword />} />
        <Route path={code} element={<Code />} />
        <Route path={email} element={<Mail />} />
        <Route path={profile} element={<Profile /> } />
        <Route path="store" element={<ShowProducts  handleDeleteProduct={handleDeleteProduct} /> }/>
        <Route path={cart} element={<Cart  handleDeleteProduct={handleDeleteProduct} />} />
      </Routes>
      

    </>

  );
}

export default App;
