import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Registration = () => {

    const [success, setSucceess] = useState("")
    const [error, setError] = useState("")

    const {createUser} = useContext(AuthContext)
    // console.log(createUser)

    const handleRegister = event =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        const photoUrl = form.photoUrl.value;

        // console.log(name,email, pass, photoUrl)

        createUser(email, pass)
        .then(result => {
            const loggeduser = result.user;
            console.log('created user', loggeduser)
            setSucceess("User created successfully")
            updateUserData(result.user, name, photoUrl)
        })
        .catch(error =>{
            console.log(error)
            setError(error)
        })

        const updateUserData = (user, name, photoUrl) =>{
            updateProfile(user, {
                displayName: name, photoURL: photoUrl,
            })
            .then(()=>{
                console.log('user updated')
            })
            .catch(error => {
                console.log(error)
            })
        }
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
            </form>
            <p>{setSucceess}</p>
            <p>{setError}</p>
        </div>
    );
};

export default Registration;