import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../../../redux/auth/Auth';
import { email, signUp, ShowProductsRoute } from '../varibles/Constans';
import { useForm, SubmitHandler } from "react-hook-form"
import "./login.css"

const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.Auth_Slice)

    const Login = async (data) => {
        // event.preventDefault();
        const response = await dispatch(loginApi(data));
        if (response.error) {
            console.log(response.error)
            return;
        }
        reset()
        navigate(ShowProductsRoute)
    }



    const forgotPasswordBtn = () => {
        navigate(email);
    }
    const SignUp = () => {
        navigate(signUp);
    }


    return (
        <div className="container" >
            <form onSubmit={handleSubmit(Login)} className="loginform">
                <h3>Login</h3>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        {...register('password',
                            {
                                required: 'password is required'
                            }
                        )}
                    />
                </div>


                <div className="Authbtns">
                    <div className="forgotpassword" onClick={forgotPasswordBtn}>
                        forgotPassword?
                    </div>

                    <div className="SignUp" onClick={SignUp} >
                        Sign Up
                    </div>

                    <div className='submit'>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
           
            </form>
        </div>


    );
}

export default Login;
