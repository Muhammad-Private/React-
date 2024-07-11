import React from 'react';
import { NavLink } from 'react-router-dom';
import { cart, login, profile, ShowProductsRoute } from '../varibles/Constans';
import "./NavNar.css"
const NavBar = () => {

  return (
    <div className="Nav_Bar">
      <div className='icons'>
        <NavLink to={profile} className="profile"><span className="material-symbols-outlined">person</span> </NavLink>
        <NavLink to={cart} ><span className="material-symbols-outlined">shopping_cart</span></NavLink>
        <NavLink to={ShowProductsRoute} className="store"><span className="material-symbols-outlined">shopping_bag </span></NavLink>
      </div>
      <div className='AuthNav'>
        <NavLink to={login} className="Login">Login</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
