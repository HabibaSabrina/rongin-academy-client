import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UserRow from './UserRow';
import '../../components/styles/table.css'
const AllUsers = () => {
    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
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
                            users.map(user => <UserRow key={user._id} user={user}></UserRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;