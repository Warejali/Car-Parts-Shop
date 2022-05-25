import React, { useEffect } from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    let signInError;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || user1)

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        signInError = <p className='text-red-500'>{error.message || error1.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <div className='flex justify-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Type Email" className="input input-bordered w-full max-w-xs" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is require'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please type valid email address'
                                }
                            })} />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Type Password" className="input input-bordered w-full max-w-xs" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is require'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters'
                                }
                            })} />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value='Login' />
                    </form>

                    <div>
                        <p className='text-center'>New to doctors portal? <Link to='/register'><span className='text-primary'>Register now</span></Link></p>
                    </div>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;