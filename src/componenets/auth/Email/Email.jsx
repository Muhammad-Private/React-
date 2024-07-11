import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mailApi } from '../../../redux/auth/mailapi';
import { useForm } from "react-hook-form";
import "./style.css";

function Mail() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.mailApi_slice);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const response = await dispatch(mailApi(data));
    if (response.error) {
      alert(response.error.message);
      return;
    }
    reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)} className='Email'>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            placeholder='email'
            type="email"
            className="form-control"
            {...register('email', { required: "Email is required" })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Mail;
