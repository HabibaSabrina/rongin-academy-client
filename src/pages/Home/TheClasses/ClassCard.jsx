import React, { useContext } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ClassCard = ({ theClass, user }) => {
    const [axiosSecure] = useAxiosSecure()

    const { clsName, clsImg, insName, seat, price } = theClass
    const handleBookmark = (theClass) =>{
        console.log(user)
        const bookedCls = {studentName: user.displayName, studentEmail: user.email, className: theClass.clsName, classImg: theClass.clsImg, instructorName: theClass.insName, price: parseFloat(theClass.price), clsStatus: 'booked'}
                axiosSecure.post(`/student/${user.email}`, bookedCls)
                .then(data => {
                    if(data.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'The class booked successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
    }
    return (
        <div className='w-80 border-2 rounded-xl bg-white shadow-xl justify-center'>
            <img src={clsImg} className='mx-auto w-full border-b-2 rounded-t-xl' alt="" />
            <p className='text-center text-2xl text-[#F13C20] font-semibold mt-4'>{clsName}</p>
            <p className='text-center my-3'><span className='font-semibold text-[#4056A1]'>Instructor:</span> {insName}</p>
            <div className='border-t-2 flex justify-between items-center p-5'>
            <div>
                <p className='text-[#4056A1]'>Price:</p>
                <p className='text-slate-400'>{price}$</p>
                <p className='text-[#4056A1]'>Available Seats:</p>
                <p className='text-slate-400 '>{seat}</p>
            </div>
            <button onClick={() => handleBookmark(theClass)} className='text-xl text-white bg-[#F13C20] hover:bg-orange-700 p-4 rounded-full'><FaRegBookmark></FaRegBookmark> </button>
            </div>
        </div>
    );
};

export default ClassCard;