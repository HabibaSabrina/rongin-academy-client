import React from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const ClassCard = ({ theClass }) => {
    const { clsName, clsImg, insName, seat, price } = theClass

    return (
        <div className='w-80 border-2 rounded-xl bg-white shadow-xl justify-center'>
            <img src={clsImg} className='mx-auto rounded-t-xl' alt="" />
            <p className='text-center text-2xl text-[#F13C20] font-semibold mt-4'>{clsName}</p>
            <p className='text-center my-3'><span className='font-semibold text-[#4056A1]'>Instructor:</span> {insName}</p>
            <div className='border-t-2 flex justify-between items-center p-5'>
            <div>
                <p className='text-[#4056A1]'>Price:</p>
                <p className='text-slate-400'>{price}$</p>
                <p className='text-[#4056A1]'>Available Seats:</p>
                <p className='text-slate-400 '>{seat}</p>
            </div>
            <button className='text-xl text-white bg-[#F13C20] hover:bg-orange-700 p-4 rounded-full'><FaRegBookmark></FaRegBookmark> </button>
            </div>
        </div>
    );
};

export default ClassCard;