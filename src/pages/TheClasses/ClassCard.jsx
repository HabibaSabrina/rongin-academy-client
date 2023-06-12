import React, { useContext } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import useAxiosSecure from '../hooks/useAxiosSecure';


const ClassCard = ({ theClass, user }) => {
    const [axiosSecure] = useAxiosSecure()
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    const { clsName, clsImg, insName, seat, price } = theClass
    const handleBookmark = (theClass) =>{
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to Login first.',
              })
              return;
        }
        const bookedCls = {studentName: user.displayName, studentEmail: user.email, classId:theClass._id ,className: theClass.clsName, classImg: theClass.clsImg, instructorName: theClass.insName, price: parseFloat(theClass.price), clsStatus: 'booked'}
                axiosSecure.post(`/student/${user.email}`, bookedCls)
                .then(data => {
                    if(data.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'This class is booked successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                    else{
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'You have already booked this class',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
    }
    return (
        <div className={`md:w-80 max-sm:mb-5 border-2  rounded-xl ${seat===0 ? 'bg-[#d61111] ' : 'bg-white'} shadow-xl justify-center`}>
            <img src={clsImg} className='mx-auto w-full border-b-2 rounded-t-xl' alt="" />
            <p className={`text-center text-2xl ${seat===0 ? 'text-slate-400' : 'text-[#F13C20]'} font-semibold mt-4`}>{clsName}</p>
            <p className='text-center my-3'><span className='font-semibold text-[#4056A1]'>Instructor:</span> {insName}</p>
            <div className='border-t-2 flex justify-between items-center p-5'>
            <div>
                <p className='text-[#4056A1]'>Price:</p>
                <p className='text-slate-400'>{price}$</p>
                <p className='text-[#4056A1]'>Available Seats:</p>
                <p className='text-slate-400 '>{seat}</p>
            </div>
            <button disabled={isAdmin || isInstructor || seat===0} onClick={() => handleBookmark(theClass)} className=' border-2 disabled:bg-opacity-30 text-xl text-white bg-[#F13C20] hover:bg-orange-700 p-4 rounded-full'><FaRegBookmark></FaRegBookmark> </button>
            </div>
        </div>
    );
};

export default ClassCard;