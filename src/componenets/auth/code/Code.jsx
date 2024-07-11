import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form"
export default function Code() 
{

  const state=useSelector((state)=>state.Auth_Slice)
  const {  register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const submit = (data) =>
   {
    if(data.code!=state.user?.randomCode)
    {
      console.log(`code not match`);
      return;
    }
    reset()
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
