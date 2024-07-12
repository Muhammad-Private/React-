import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form"
import {  useNavigate } from 'react-router-dom';
import { updatepassword } from '../../varibles/Constans';
export default function Code() 
{

  const state=useSelector((state)=>state.mailApi_slice)
  const {  register, handleSubmit, formState: { errors }, reset } = useForm();
  const Navigate=useNavigate();
  const submit = (data) =>
   {
    if(data.code!=state.randomCode)
    {
      console.log(`code not match`);
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
