import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';


const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleGoogleSignIn = () => {
        googleSignIn(provider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL }
                fetch('https://rongin-academy-server-habibasabrina.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleUserRegister = event => {
        event.preventDefault();
        // getting data from registration form
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password !== confirmPassword) {
            setError('Please confirm with your correct password')
            return;
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }
        else if (email.length == 0 || password.length == 0) {
            setError('Please fill up both email and password field')
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please add a special character in your password');
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add a capital letter in your password');
            return
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                setError('')
                event.target.reset()
                setSuccess('user has created successfully')
                updateUserData(result.user, photo, name)
            })
            .catch(error => {
                setError('Please fill up both email and password field')
                setSuccess('')
            })
        // setting user info data
        const updateUserData = (user, photo, name) => {
            updateProfile(user, {
                photoURL: photo,
                displayName: name
            })
                .then(() => {
                    const saveUser = { name, email, photo }
                    fetch('https://rongin-academy-server-habibasabrina.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                form.reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'The User has been created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');

                            }
                        })
                })
                .catch((error) => {
                    setError(error.message)
                });

        }
    }
    return (
        <div>
            <Helmet><title>Rongin Academy | Register</title></Helmet>
            <div className='login-bg md:p-20 p-5 bg-[#f9f9e3]'>
                <div className='bg-[#f9f9e3] border-4 border-blue-800 p-10 md:mx-96 rounded-xl'>
                    <h1 className='text-center text-3xl font-bold text-[#673c0b]'>Register</h1>
                    <form onSubmit={handleUserRegister}>
                        <div className='text-center mt-10'>
                            <p className='font-bold text-[#673c0b]'>Name</p>
                            <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="name" required />
                            <br />
                            <p className='font-bold mt-10 text-[#673c0b]'>Email</p>
                            <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="email" name="email" required />
                            <br />
                            <p className='font-bold mt-10 text-[#673c0b] '>Password</p>
                            <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="password" name="password" required />
                            <br />
                            <p className='font-bold mt-10 text-[#673c0b] '>Confirm Password</p>
                            <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="password" name="confirmPassword" required />
                            <br />
                            <p className='font-bold mt-10 text-[#673c0b]'>Photo URL</p>
                            <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="photo" required />
                            <br />
                            <button className='bg-[#673c0b] w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg-green-900 mt-10'>Register</button>
                            <button onClick={handleGoogleSignIn} className='mx-auto bg-[#673c0b] w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg-green-900 mt-10 flex items-center gap-3 justify-center'><FaGoogle></FaGoogle><span>Google Sign in</span></button>
                            <p className='my-5 text-green-950 font-semibold'>Already have an account? <Link to="/login"><span className='text-red-800 font-semibold'>Login</span></Link></p>
                        </div>
                    </form>
                    <p className='text-center text-red-500 font-semibold'>{error}</p>
                    <p className='text-center text-blue-800 font-semibold'>{success}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;