import React, { useState } from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { mailApi,updatepasswordApi } from '../../../redux/auth/updatepassword';
import { login } from '../../varibles/Constans';
import { useForm, SubmitHandler } from "react-hook-form"
import "./style.css"
export default function Updatepassword() {

    
    const dispatch = useDispatch();
    const state = useSelector((state)=>state.updatepassword_Slice);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const UpdatePassword = async (data) =>
    {
       try {
        if(data.password!=data.confirmPassword)
        {
            alert(`password not match`);
            return;
        }
       const response= await dispatch(updatepasswordApi({...data,email:state.user?.email}));
       if (response.error) {
        alert(response.error.message)
         return;
     }
       reset();
       navigate(login) 
       } 
       catch (error) 
       {
        console.log("error:",error)
       }
   };


    return (<>
        <div className="container">

    <form onSubmit={handleSubmit(UpdatePassword)} className='form' >
            
    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            {...register('password', 
                            {
                                required: 'Password is required',
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters long',
                                },
                                pattern: 
                                {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                    message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
                                },
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">
                            ConfirmPassword
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            {...register('confirmPassword', { required: 'Confirm Password is required' })}
                        />
                        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                    </div>


        <div className='submit'>
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
        </div>

    </>

    )
}
