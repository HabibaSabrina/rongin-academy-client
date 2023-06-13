import React from 'react';
import { FaArrowRight, FaTwitter, FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-red-900'>
            
                <div className=' text-white md:flex gap-36 justify-center items-center py-5 max-sm:p-5'>
                <div>
                    <h1 className='text-2xl font-semibold my-5'>Contacts</h1>
                    <p><b>Email:</b> ronginacademy@gmail.com</p>
                    <p className='my-3'><b>Phone:</b> 01923333333</p>
                    <p className='mb-3'><b>Fax:</b> +1 (0) 000 0000 002</p>
                    <h1 className='my-5 text-2xl font-semibold'>Follow</h1>
                    <div className='flex gap-3'>
                        <Link to='https://www.facebook.com/'><button className='p-3 border-2 rounded-full text-white'><FaFacebook className='w-6 h-6'></FaFacebook></button></Link>
                        <Link to='https://www.instagram.com/'><button className=' border-2 text-white p-3 rounded-full bg-'><FaInstagram className='w-6 h-6'></FaInstagram></button></Link>
                        <Link to='https://www.google.com/'><button className='p-3  text-white rounded-full border-2'><FaGoogle className='w-6 h-6'></FaGoogle></button></Link>
                    </div>
                   
                </div>
                <div>
                    <h1 className='text-2xl font-semibold my-5'>About Us</h1>
                    <p className='leading-7 w-80'>This website is all about your creativity with our diverse range of online courses, step-by-step tutorials, and interactive resources, all designed to nurture your artistic talent and help you master the art of drawing. Join us today and embark on an inspiring journey of self-discovery and artistic growth.</p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold my-5'>Address</h1>
                    <p className='leading-7 w-80'>32, Justice SM Morshed Sharany Agargoan Sher-e-Bangla Nagar Dhaka-1207, Bangladesh</p>
                </div>
                </div>
                <div className='bg-slate-900 md:flex items-center justify-between text-white border-t-2 max-sm:p-5'>
                <div className='flex gap-2 pt-3 items-center justify-center'>
                    <img src="/logo.png" className='w-16' alt="" />
                    <h1 className='h-12 text-4xl font-bold '>RonginAcademy</h1>
                </div>
                <p className='font-semibold text-center p-3'>Copyright © 2014-2023. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;