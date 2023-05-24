import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';


const Registration = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const {createUser} = useContext(AuthContext);

    
    const handleRegister = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        // console.log(name, email, password, photoUrl)

        setError('')
        createUser( email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser)
            handleUpdateUser(result.user, name, photoUrl)
            form.reset()
            setSuccess("User has been created successfully")
        })
        .catch(error =>{
            // console.log(error)
        })

        if(password.length <6){
            setError('Password should be at least 6 characters')
            return;
        }
    }

    const handleUpdateUser=(user, name, photoUrl)=>{
        updateProfile(user, {
            displayName: name, photoURL: photoUrl
        })
        .then(()=>{
            console.log('user name and photo updated')
        })
        .catch(error=>{
            setError(error.message)
        })
    }


    return (
        <div>
             <form onSubmit={handleRegister} className='w-full md:w-1/2 mx-auto bg-slate-100 my-10 py-12 rounded'>
                <div className='ml-4 '>
                    <label htmlFor="name">Name:</label> <br />
                    <input className='py-2 mt-2 px-3 width-res rounded shadow'
                        type="text"
                        id="name"

                        name='name'
                        required
                    /><br /><br />
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
                    <label htmlFor="photoUrl">Photo Url:</label> <br />
                    <input
                        className='py-2 mt-2 px-3 width-res shadow'
                        type="text"
                        id="photoUrl"
                        name='photoUrl'
                        required
                    /><br /><br />
                    <input className='border login-btn bg-sky-700 text-white py-2 px-4 text-xl rounded' type="submit" value="Register" />
                </div>
                
                <p className='text-green-700 text-center'>{success}</p>
                <p className='text-red-700 text-center'>{error}</p>

                <p className='text-center mt-3'>Already Registered? Please <Link className='border-2 px-2' to="/login">Login</Link> here </p>
            </form>
           
        </div>
    );
};

export default Registration;