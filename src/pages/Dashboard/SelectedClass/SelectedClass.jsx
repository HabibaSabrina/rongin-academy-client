import React, { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SelectedClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const { data: student = [], refetch } = useQuery(['student'], async () => {
        const res = await axiosSecure.get(`/student/${user.email}`)
       
        return res.data;
    })
    const bookedClasses = student.filter(booked => booked.clsStatus === 'booked')
        
    const handleClsDelete = theClass => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/student/${theClass._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
        
    }
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
                        bookedClasses.map(stu => <tr key={stu._id} className='font-semibold text-center border-b-2 border-[#C5CBE3]  bg-[#f9f9e3]'>
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
                            <button onClick={() => handleClsDelete(stu)} className='p-3 px-6 mr-4 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Delete</button>
                            <Link to={`/dashboard/payment/${stu._id}`}><button className='p-3 px-6 mr-4 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Pay</button></Link>
                                
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