import React, { useContext, useState } from 'react';
import './Login.css'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const {signIn} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email, pass)

        setError('')
        signIn(email, pass)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                // setUser(loggedUser)
                form.reset()
                setSuccess('Login successful')

            })
            .catch(error => {
                setError(error)
                return;
            })
    }

    return (
        <div>
            <form onSubmit={handleLogin} className='w-full md:w-1/2 mx-auto bg-slate-100 my-10 py-12 rounded'>
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
                <p className='text-green-700 text-center'>{success}</p>
                <p className='text-red-700 text-center'>{error}</p>
                <p className='text-center mt-3'>Haven't an account? Please <Link className='border-2 px-2 underline' to="/register">Register</Link> here </p>
            </form>
        </div>
    );
};

export default Login;