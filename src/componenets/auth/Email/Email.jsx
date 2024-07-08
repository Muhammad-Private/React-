import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mailApi } from '../../../redux/auth/mailapi';
import { signUp } from '../../varibles/Constans';
import { useForm, SubmitHandler } from "react-hook-form"
import "./style.css"
function Mail() {


  const navigate = useNavigate();
  const dispatch=useDispatch();
  const state = useSelector((state)=>state.mailApi_slice);
  const {  register, handleSubmit, formState: { errors }, reset } = useForm();

  const submit = async (data) => 
  {
    //event.preventDefault();
    const response=await dispatch(mailApi(data));
    if(response.error)
    {
      console.log(response.error);
      return;
    }
    reset()
      navigate(signUp)
  }



  return (
    <div className="container">
    
    <form onSubmit={handleSubmit(submit)} className='Email' >
    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input placeholder='email'
                            type="email"
                            className="form-control"
                            {...register('email')}
                            required
                        /> 
                    </div>
        <div style={{textAlign:"center"}}>
          <button  className="btn btn-primary">Submit</button>
      </div>
      
    </form>
    </div>

  )
}

export default Mail