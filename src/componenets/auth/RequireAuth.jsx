import React from 'react'
import { Navigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { login } from './Constans';
function RequireAuth({children}) 
{
    const state=useSelector((state)=>state.Auth_Slice);
    if(!(state.user?.access_token))
    {
     return <Navigate to={login}/>
    }
 return  children;
  

}

export default RequireAuth