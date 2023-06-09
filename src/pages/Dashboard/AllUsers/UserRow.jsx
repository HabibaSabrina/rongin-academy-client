import React from 'react';
import { Link } from 'react-router-dom';

const UserRow = ({user}) => {
    const {name, email, photo } = user
    const handleSelectAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
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
        <td>
            {
                user.role === 'admin' ? 'admin': <button onClick={() => handleSelectAdmin(user)} className='p-3 px-6 mr-4 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Admin</button>
            }
        {
            user.role === 'instructor' ? 'instructor' : <button className='p-3 px-6 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Instructor</button>
        }
        </td>
    </tr>
    );
};

export default UserRow;