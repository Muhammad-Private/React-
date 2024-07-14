import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { updatepassword } from '../../varibles/Constans';
import { mailApi } from '../../../redux/auth/mailapi';

export default function Code() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const state = useSelector((state) => state.mailApi_slice);
  const navigate = useNavigate();

const onSubmit = (data) => {
  if (data.code != state.user.randomCode) {
    alert('Code does not match');
    return;
  }
  reset();
  navigate(`/${updatepassword}`);
};

return (
  <div className="container">
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
      <div className="mb-3">
        <label htmlFor="code" className="form-label">
          Enter Code
        </label>
        <input
          placeholder='Code'
          id='code'
          type="text"
          className="form-control"
          {...register('code', { required: true })}
        />
        {errors.code && <span>This field is required.</span>}
      </div>

      <div className='mt-3 submit'>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
);
}
