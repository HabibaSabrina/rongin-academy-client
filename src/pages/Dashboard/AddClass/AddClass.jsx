import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext)
    const handleAddClass = event => {
        event.preventDefault()
        const form = event.target;
        const clsName = form.clsName.value;
        const clsImg = form.clsImg.value;
        const insEmail = form.insEmail.value;
        const insName = form.insName.value;
        const price = form.price.value;
        const seat = form.seat.value;
        const status = 'pending';
        const enrolled = 0;
        const theClass = { clsName, clsImg, insEmail, insName, price, seat, status, enrolled }
        console.log(theClass)
        axiosSecure.post('/classes', theClass)
                .then(data => {
                    if(data.data.insertedId){
                        form.reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })

    }


    return (
        <div className=' p-20 login-bg bg-[#f9f9e3]'>
            <div className='bg-[#f9f9e3] border-4 border-blue-800 p-10 md:mx-64 rounded-xl'>
                <h1 className='text-center text-3xl font-bold text-[#673c0b]'>Add a class</h1>
                <form onSubmit={handleAddClass}>
                    <div className='text-center mt-10'>
                        <div className='flex justify-between'>
                            <div>
                                <p className='font-bold text-[#673c0b]'>Class Name</p>
                                <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="clsName" required />
                            </div>
                            <div>
                                <p className='font-bold text-[#673c0b] '>Class Image</p>
                                <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="clsImg" required />
                            </div>
                        </div>
                        <div className='flex justify-between mt-10'>
                            <div>
                                <p className='font-bold text-[#673c0b]'>Instructor Name</p>
                                <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" defaultValue={user?.displayName} name="insName" required />
                            </div>
                            <div>
                                <p className='font-bold text-[#673c0b] '>Instructor Email</p>
                                <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="email" defaultValue={user?.email} name="insEmail" required />
                            </div>
                        </div>
                        <div className='flex justify-between mt-10'>
                            <div>
                                <p className='font-bold text-[#673c0b]'>Available Seats</p>
                                <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="number" name="seat" required />
                            </div>
                            <div>
                                <p className='font-bold text-[#673c0b] '>Price</p>
                                <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="price" required />
                            </div>
                        </div>
                        <button className='bg-[#673c0b] w-64 rounded-full p-3 text-xl text-white font-semibold hover:bg-[#aa7411] mt-10'>Add Class</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddClass;