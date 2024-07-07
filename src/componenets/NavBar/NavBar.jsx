import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutApi } from '../../redux/auth/Auth';
import { cart, login, profile, signUp, ShowProductsRoute } from '../auth/Constans';

const NavBar = () => {
  const { user } = useSelector((state) => state.Auth_Slice);
  const dispatch = useDispatch();
  let value="";

  // const handleLogout = async () => {
  //   try {
  //     await dispatch(logoutApi());
  //   }
  //   catch (error) {
  //     console.error('Failed to logout', error);
  //   }
  // };

  // const handleNavBarRoutes = (a) => {
  //   if (user?.access_token) {
  //     return a
  //   }
  // }
  // const handle_login=()=>{
  //   if (user?.access_token) {
  //     value="logout"
  //     return value;
  //   }
  //   value="login"
  //   return value
  // }



  return (
    <div className="Nav_Bar">
      <div className='icons'>
        <NavLink to={profile} className="profile"><span className="material-symbols-outlined">person</span> </NavLink>
        <NavLink to={cart} ><span className="material-symbols-outlined">shopping_cart</span></NavLink>
        <NavLink to={ShowProductsRoute} className="store"><span className="material-symbols-outlined">shopping_bag </span></NavLink>
      </div>
      <div className='AuthNav'>
        <NavLink to={login} className="Login">Login</NavLink>
        <NavLink to={signUp} className="signup">SignUp</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
