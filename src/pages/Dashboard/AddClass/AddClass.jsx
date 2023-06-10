import React from 'react';

const AddClass = () => {
    return (
        <div className=' p-20 login-bg bg-[#f9f9e3]'>
            <div className='bg-[#f9f9e3] border-4 border-blue-800 p-10 md:mx-64 rounded-xl'>
                <h1 className='text-center text-3xl font-bold text-[#673c0b]'>Add a class</h1>
                <form>
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
                                <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="text" name="InsName" required />
                            </div>
                            <div>
                                <p className='font-bold text-[#673c0b] '>Instructor Email</p>
                                <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="email" name="InsEmail" required />
                            </div>
                        </div>
                        <div className='flex justify-between mt-10'>
                            <div>
                                <p className='font-bold text-[#673c0b]'>Available Seats</p>
                                <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="number" name="seat" required />
                            </div>
                            <div>
                                <p className='font-bold text-[#673c0b] '>Price</p>
                                <input className='text-center  focus:outline-0 focus:text-center mt-5 w-64 md:w-80 p-2 border-2 border-red-800 rounded-xl' type="email" name="price" required />
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