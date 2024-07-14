import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form"
import {  useNavigate } from 'react-router-dom';
import { updatepassword } from '../../varibles/Constans';
import { useDispatch } from 'react-redux';
import {mailApi} from '../../../redux/auth/mailapi';
export default function Code() 
{

  const state=useSelector((state)=>state.mailApi_slice)
  const {  register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch();

  const Navigate=useNavigate();
  useEffect(()=>{
   const email= localStorage.getItem("email")
   console.log(email);
    const x=async()=>{
     const response= await dispatch(mailApi(email));
      if (response.error) 
        {
        alert(response.error.message);
        return;
        }
    }
  },[])
  const submit = (data) =>
   {
    if(data.code!=state.user.randomCode)
    {
      alert(`code not match`);
      return;
    }
    reset()
    Navigate(`/${updatepassword}`)
   }
   




  return (
    <div className="container">

    <form onSubmit={handleSubmit(submit)} className='from' >

                    <div className="mb-3">
                        <label htmlFor="code" className="form-label">
                          Enter Code
                        </label>
                        <input
                        placeholder='code'
                        id='code'
                            type="text"
                            className="form-control"
                            {...register('code')}
                            required
                        />
                    </div>

        <div className='mt-3 submit'>
          <button  className="btn btn-primary">Submit</button>
        </div>
        
    </form>
    </div>

  )
}
