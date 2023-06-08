import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


const Header = () => {
    const navbarOpt = <>
    <li className='border-b-2 md:mx-2 border-[#F13C20]'><Link to="/">Home</Link></li>
        <li className='border-b-2 md:mx-2 border-[#4056A1]'><Link to="/">Instructors</Link></li>
        <li className='border-b-2 md:mx-2 border-[#D79922]'><Link to="/">Classes</Link></li>
        <li className='border-b-2 md:mx-2 border-[#C5CBE3]'><Link to="/">Dashboard</Link></li>
        {/* <li>
            <Link to="/">
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li> */}
        {/* {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        } */}
    </>
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | All users</title>
            </Helmet>
            <div className="navbar bg-[#f9f9e3] font-semibold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#f9f9e3] rounded-box w-52">
                            {navbarOpt}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                    <p className=" normal-case text-2xl"><span className='text-3xl font-bold text-[#F13C20]'>R</span><span className='text-[#D79922]'>on<span className='font-bold text-3xl text-[#F13C20]'>G</span>in</span><span className='text-[#4056A1]'> Academy</span></p>
                    <img src="/logo.png" className='w-12' alt="" />
                    </div>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className=" menu menu-horizontal px-1">
                        {navbarOpt}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'><button className="p-3 rounded-xl px-4 bg-[#F13C20] text-white">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;