import React, { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../providers/AuthProvider';

const SelectedClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { data: student = [], refetch } = useQuery(['student'], async () => {
        const res = await axiosSecure.get(`/student/${user.email}`)
        return res.data;
    })
    console.log(student)
    return (
        <div className='table-bg p-20 bg-[#f9f9e3]'>
        <div className="">
            <table className=" my-5 w-full border-4 border-[#4056A1]">
                <thead className='bg-[#4056A1]  text-white'>
                    <tr>
                        <th className='py-5'>Class Image</th>
                        <th className='py-5 border-x-2 border-[#C5CBE3]'>Class Name</th>
                        <th className='py-5 border-x-2 border-[#C5CBE3]'>Instructor Name</th>
                        <th className='py-5 border-x-2 border-[#C5CBE3]'>Price</th>
                        <th className='py-5'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map(stu => <tr key={stu._id} className='font-semibold text-center border-b-2 border-[#C5CBE3]  bg-[#f9f9e3]'>
                            <td>
                                <div className="avatar">
                                    <div className="rounded w-24 h-24">
                                        {stu.classImg && <img src={stu.classImg} className='p-2 rounded-xl' alt={stu.claName} />}
                                    </div>
                                </div>
                            </td>
                            <td className='border-x-2 border-[#C5CBE3]'>
                                {stu.className && stu.className}
                            </td>
                            <td className='border-x-2 border-[#C5CBE3]'>{stu.instructorName}</td>
                            <td className='border-x-2 border-[#C5CBE3]'>{stu.price}</td>
                            <td>
                            <button className='p-3 px-6 mr-4 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Delete</button>
                            <button className='p-3 px-6 mr-4 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Pay</button>
                                
                            </td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default SelectedClass;