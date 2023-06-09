import React from 'react';
import { Link } from 'react-router-dom';

const UserRow = ({user}) => {
    const {name, email, photo } = user
    return (
        <tr className='font-semibold text-center border-b-2 border-[#C5CBE3]  bg-[#f9f9e3]'>
        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                    {photo && <img src={photo} className='p-2 rounded-xl' alt={name} />}
                </div>
            </div>
        </td>
        <td className='border-x-2 border-[#C5CBE3]'>
            {name && name}
        </td>
        <td className='border-x-2 border-[#C5CBE3]'>{email}</td>
        <td><Link to=''><button className='p-3 px-6 mr-4 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Admin</button></Link>
        <Link to=''><button className='p-3 px-6 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Instructor</button></Link></td>
    </tr>
    );
};

export default UserRow;