import { useDispatch, useSelector } from 'react-redux';
import { SignUpApi } from '../../../redux/auth/register';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import "./register.css";
import { ShowProductsRoute } from '../../varibles/Constans';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();
    const state = useSelector(state => state.register_Slice);
    const navigate = useNavigate();

    const signUpMethod = async (data) => {
        const response = await dispatch(SignUpApi(data));
            console.log(response);
            return;
        reset();
        navigate(`/${ShowProductsRoute}`);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(signUpMethod)} className="register">
                <h3>SignUp</h3>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        UserName
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        {...register('username', {
                            required: 'Username is required',
                            pattern: {
                                value: /^[a-zA-Z0-9_]+$/,
                                message: 'Username must contain only letters, numbers, and underscores',
                            },
                        })}
                    />
                    {errors.username && <p className='error'>{errors.username.message}</p>}
                </div>

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
                    {errors.email && <p className='error'>{errors.email.message}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters long',
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
                            },
                        })}
                    />
                    {errors.password && <p className='error'>{errors.password.message}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        {...register('confirmPassword', { required: 'Confirm Password is required' })}
                    />
                    {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
                </div>

                <div className="mt-2 Authbtns">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
