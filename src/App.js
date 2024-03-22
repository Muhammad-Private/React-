// Example App.js
import React from "react";
import { BrowserRouter, Routes, Route,Redirect   } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./componenets/NavBar/NavBar";
import Login from "./componenets/auth/Login";
import Code from "./componenets/auth/Code";
import Mail from "./componenets/auth/Email";
import Updatepassword from "./componenets/auth/Updatepassword";
import Register from "./componenets/auth/Register";
import './App.css';
import RequireAuth from "./componenets/auth/RequireAuth";
import Cart from "./pages/Cart.jsx"
import Profile from "./pages/Profile.jsx";
import ShowProducts from "./pages/FetchProducts.jsx";
import {updatepassword,profile,cart,email,login,signUp,code,ShowProductsRoute, showcard, show_card} from './componenets/auth/Constans.jsx'
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
