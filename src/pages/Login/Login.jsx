import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import './Login.css'
const Login = () => {
    const {signIn, googleSignIn} = useContext(AuthContext)
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
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error);
            })

    }
    const handleUserLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        setSuccess('')
        if (password.length < 6) {
            setError('Password must be 6 characters');
            return
        }
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                setSuccess('Login is successful')
                setError('')
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError('Email or Password is incorrect')
            })
    }
    return (
        <div className=' p-20 login-bg bg-[#f9f9e3]'>
            <div className='bg-[#f9f9e3] border-4 border-blue-800 p-10 md:mx-96 rounded-xl'>
                <h1 className='text-center text-3xl font-bold text-[#673c0b]'>Login</h1>
                <form onSubmit={handleUserLogin}>
                    <div className='text-center mt-10'>
                        <p className='font-bold text-[#673c0b]'>Email</p>
                        <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="email" name="email" required />
                        <br />
                        <p className='font-bold mt-10 text-[#673c0b] '>Password</p>
                        <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="password" name="password" required />
                        <br />
                        <button className='bg-[#673c0b] w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg-[#aa7411] mt-10'>Login</button>
                    </div>
                    <button onClick={handleGoogleSignIn} className='mx-auto bg-[#673c0b] w-64 rounded-xl p-3 text-xl text-white font-semibold hover:bg-green-900 mt-10 flex items-center gap-3 justify-center'><FaGoogle></FaGoogle><span>Google Sign in</span></button>
                        <p className='my-5 text-center text-green-950 font-semibold'>Don't Have an Account? Please <Link to="/register"><span className='text-red-800 font-semibold'>Register</span></Link></p>
                </form>
                <p className='text-center text-red-500 font-semibold'>{error}</p>
                <p className='text-center text-blue-800 font-semibold'>{success}</p>
            </div>
        </div>
    );
};

export default Login;