import React from 'react';
import { Link } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';

const DashboardHeader = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    const navbarOpt =
        <>
        
            {
                isAdmin &&
                <>
                    <li className='border-b-2 md:mx-2 border-white'><Link to="/">Home</Link></li>
                    <li className='border-b-2 md:mx-2 border-white'><Link to="/dashboard/manageClasses">Manage Classes</Link></li>
                    <li className='border-b-2 md:mx-2 border-white'><Link to="/dashboard/allusers">Manage Users</Link></li>

                </> || isInstructor &&
                <>
                    <li className='border-b-2 md:mx-2 border-white'><Link to="/dashboard/addclass">Add a class</Link></li>
                    <li className='border-b-2 md:mx-2 border-white'><Link to="/dashboard/myclasses">My Classes</Link></li>

                </> || <>
                    <li className='border-b-2 md:mx-2 border-white'><Link to="/dashboard/selectedcls">Selected Classes</Link></li>
                    <li className='border-b-2 md:mx-2 border-white'><Link to="/dashboard/enrolledcls">Enrolled Classes</Link></li>
                    <li className='border-b-2 md:mx-2 border-white'><Link to="/dashboard/paymenthistory">Payment History</Link></li>

                </>
            }
        </>
    return (
        <div>
            <div className="navbar md:px-20 bg-[#F13C20] font-semibold text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#F13C20] rounded-box w-52">
                            {navbarOpt}
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <p className=" normal-case text-2xl font-bold text-white">RonGin Academy</p>
                        <img src="/logo.png" className='w-12' alt="" />
                    </div>
                </div>
                <div className="navbar-end  hidden lg:flex">
                    <ul className=" menu menu-horizontal px-1">
                        {navbarOpt}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default DashboardHeader;