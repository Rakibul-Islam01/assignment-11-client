import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <form className='md:w-1/2 mx-auto bg-slate-100 my-10 py-12 rounded'>
                <div className='ml-4 '>
                    <label htmlFor="email">Email:</label> <br />
                    <input className='py-2 mt-2 px-3 width-res rounded shadow'
                        type="email"
                        id="email"

                        name='email'
                        required
                    /><br /><br />

                    <label htmlFor="password">Password:</label> <br />
                    <input
                        className='py-2 mt-2 px-3 width-res shadow'
                        type="password"
                        id="password"

                        name='password'
                        required
                    /><br /><br />
                    <input className='border login-btn bg-sky-700 text-white py-2 px-4 text-xl rounded' type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};

export default Login;