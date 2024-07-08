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
import ShowProducts from "./pages/fetchProducts/FetchProducts.jsx";
import {updatepassword,profile,cart,email,signUp,code} from '../src/componenets/varibles/Constans.jsx'
function App() 
{
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
        <Route path="store" element={<ShowProducts /> }/>
        <Route path={cart} element={<Cart />} />
      </Routes>
    </>

  );
}

export default App;
