import { useQuery } from '@tanstack/react-query';
import React from 'react';
import '../../components/styles/table.css'
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
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
    const handleSelectInstructor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
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
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    
    return (
        <div className='table-bg p-20 bg-[#f9f9e3]'>
            <div className=" mx-32">
                <table className=" my-5 w-full border-4 border-[#4056A1]">
                    <thead className='bg-[#4056A1]  text-white'>
                        <tr>
                            <th className='py-5'>Image</th>
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Name</th>
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Email</th>
                            <th className='py-5'>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id} className='font-semibold text-center border-b-2 border-[#C5CBE3]  bg-[#f9f9e3]'>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded w-24 h-24">
                                            {user.photo && <img src={user.photo} className='p-2 rounded-xl' alt={user.name} />}
                                        </div>
                                    </div>
                                </td>
                                <td className='border-x-2 border-[#C5CBE3]'>
                                    {user.name && user.name}
                                </td>
                                <td className='border-x-2 border-[#C5CBE3]'>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? <button disabled className='p-3 px-6 mr-4 bg-[#F13C20] bg-opacity-30 font-semibold text-white rounded-full'>Admin</button> : <button onClick={() => handleSelectAdmin(user)} className='p-3 px-6 mr-4 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Make Admin</button>
                                    }
                                    {
                                        user.role === 'instructor' ? <button disabled className='p-3 px-6 mr-4 bg-[#F13C20] bg-opacity-30 font-semibold text-white rounded-full'>Instructor</button> : <button onClick={() => handleSelectInstructor(user)} className='p-3 px-6 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Make Instructor</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;