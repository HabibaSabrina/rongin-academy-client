import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [disable, setDisable] = useState(false)
    const [axiosSecure] = useAxiosSecure()
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    const updateData = (newValue, id) => {
        const feedback = { feedback: newValue };
      
        axiosSecure.patch(`/classes/feedback/${id}`, feedback)
          .then(response => {
            Swal.fire('Success', 'Feedback has been sent successfully!', 'success');
          })
          .catch(error => {
            // Handle any errors
            console.error('Error:', error);
            Swal.fire('Error', 'Failed to send the feedback!', 'error');
          });
      };
    const handleFeedback = (theClass) => {
        Swal.fire({
            title: 'Feedback',
            input: 'text',
            showCancelButton: true,
            confirmButtonText: 'Send',
          }).then((result) => {
            if (result.isConfirmed) {
              const newValue = result.value;
              updateData(newValue, theClass._id);
            }
          });
    }
    const handleStatus = (theStatus, id) =>{
        const status = { status: theStatus };
      
        axiosSecure.patch(`/classes/status/${id}`, status)
          .then(response => {
            refetch()
            Swal.fire('Status', `You have ${theStatus} the class`, 'success');
          })
          .catch(error => {
            // Handle any errors
            console.error('Error:', error);
            Swal.fire('Error', 'Failed to confirm!', 'error');
          });

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
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Instructor Email</th>
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Available Seats</th>
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Price</th>
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Status</th>
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(theClass => <tr key={theClass._id} className='font-semibold text-center border-b-2 border-[#C5CBE3]  bg-[#f9f9e3]'>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded w-24 h-24">
                                            {theClass.clsImg && <img src={theClass.clsImg} className='p-2 rounded-xl' alt={theClass.claName} />}
                                        </div>
                                    </div>
                                </td>
                                <td className='border-x-2 border-[#C5CBE3]'>
                                    {theClass.clsName && theClass.clsName}
                                </td>
                                <td className='border-x-2 border-[#C5CBE3]'>{theClass.insName}</td>
                                <td className='border-x-2 border-[#C5CBE3]'>{theClass.insEmail}</td>
                                <td className='border-x-2 border-[#C5CBE3]'>{theClass.seat}</td>
                                <td className='border-x-2 border-[#C5CBE3]'>{theClass.price}</td>
                                <td className='border-x-2 border-[#C5CBE3]'>{theClass.status}</td>
                                <td>
                                    {
                                        (theClass.status === 'approved' || theClass.status === 'denied') ? <button disabled className='p-3 px-6 mr-4 bg-[#F13C20] bg-opacity-30  font-semibold text-white rounded-full'>Approve</button> : <button onClick={() => handleStatus('approved', theClass._id)} className='p-3 px-6 mr-4 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Approve</button>
                                    }
                                    {
                                         (theClass.status === 'approved' || theClass.status === 'denied') ? <button disabled className='p-3 px-6 mr-4 bg-[#F13C20] bg-opacity-30  font-semibold text-white rounded-full'>Deny</button> : <button onClick={() => handleStatus('denied', theClass._id)} className='p-3 px-6 mr-4 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Deny</button>
                                    }
                                    <button onClick={() => handleFeedback(theClass)} className='p-3 px-6 mr-4 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Feedback</button>


                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClasses;