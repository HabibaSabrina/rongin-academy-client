import React, { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../providers/AuthProvider';

const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: payments = [], refetch } = useQuery(['payments'], async () => {
        const res = await axiosSecure.get(`/payments?email=${user?.email}`)
        return res.data;
    })
    return (
        <div className='table-bg p-20 bg-[#f9f9e3]'>
        <div className="">
            <table className=" my-5 w-full border-4 border-[#4056A1]">
                <thead className='bg-[#4056A1]  text-white'>
                    <tr>
                        <th className='py-5'>Transaction ID</th>
                        <th className='py-5 border-x-2 border-[#C5CBE3]'>Class Name</th>
                        <th className='py-5 border-x-2 border-[#C5CBE3]'>Instructor Name</th>
                        <th className='py-5 border-x-2 border-[#C5CBE3]'>Payment</th>
                        <th className='py-5 border-x-2 border-[#C5CBE3]'>Payment Date</th>
                        <th className='py-5'>Payment Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        payments.map(pay => <tr key={pay._id} className='font-semibold text-center border-b-2 border-[#C5CBE3]  bg-[#f9f9e3]'>
                            <td className=' p-3'>
                                {pay.transactionId}
                            </td>
                            <td className=' p-3 border-x-2 border-[#C5CBE3]'>
                                {pay.className}
                            </td>
                            <td className=' p-3 border-x-2 border-[#C5CBE3]'>{pay.instructorName}</td>
                            <td className=' p-3 border-x-2 border-[#C5CBE3]'>{pay.price}</td>
                            <td className=' p-3 border-x-2 border-[#C5CBE3]'>{new Date(pay.date).toISOString().split('T')[0]} </td>
                            <td className=' p-3 border-x-2 border-[#C5CBE3]'>{pay.payStatus}</td>
                            
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default PaymentHistory;