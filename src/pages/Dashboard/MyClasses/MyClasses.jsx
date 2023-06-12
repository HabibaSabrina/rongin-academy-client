import React, { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes?insEmail=${user?.email}`)
            return res.data;
        },
    })
    const updateData = (newValue, id) => {
        const seat = { seat: newValue };
      
        axiosSecure.patch(`/classes/update/${id}`, seat)
          .then(response => {
            refetch()
            Swal.fire('Success', 'Seat has been sent successfully!', 'success');
          })
          .catch(error => {
            // Handle any errors
            console.error('Error:', error);
            Swal.fire('Error', 'Failed to update!', 'error');
          });
      };
    const handleUpdate = (theCls) =>{
        Swal.fire({
            title: 'Update Seat Number',
            input: 'number',
            showCancelButton: true,
            confirmButtonText: 'Send',
          }).then((result) => {
            if (result.isConfirmed) {
              const newValue = result.value;
              updateData(newValue, theCls._id);
            }
          });
    }
    return (
        <div className='table-bg p-20 bg-[#f9f9e3]'>
            <div className="">
                <table className=" my-5 w-full border-4 border-[#4056A1]">
                    <thead className='bg-[#4056A1]  text-white'>
                        <tr>
                            <th className='py-5'>Image</th>
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Class Name</th>
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Price</th>
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Available Seat</th>
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Status</th>
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Total Enrolled</th>
                            <th className='py-5 border-x-2 border-[#C5CBE3]'>Feedback</th>
                            <th className='py-5'>Update Action</th>
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
                                <td className='border-x-2 border-[#C5CBE3]'>{theClass.price}</td>
                                <td className='border-x-2 border-[#C5CBE3]'>{theClass.seat}</td>
                                <td className='border-x-2 border-[#C5CBE3]'>{theClass.status}</td>
                                <td className='border-x-2 border-[#C5CBE3]'>{theClass.enrolled}</td>
                                <td className='border-x-2 border-[#C5CBE3]'>{(theClass.status === 'approved' || theClass.status === 'pending') ? "No Feedback" : theClass?.feedback}</td>
                                <td>
                                    <button onClick={() => handleUpdate(theClass)} className='p-3 px-6 mr-4 bg-[#F13C20] hover:bg-blue-800  font-semibold text-white rounded-full'>Update</button>


                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyClasses;