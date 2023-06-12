import React from 'react';

const InstructorCard = ({instructor}) => {
    const {name, email, photo} = instructor
    return (
        <div className='w-72'>
            <img src="/insbg.png" className='-mb-56' alt="" />
            <img src={photo} className='bg-[#e9edff] rounded-full border-2 border-[#F13C20]' alt="" />
            <p className='text-center text-[#F13C20] my-2 font-semibold text-xl'>{name}</p>
            <p className='text-center text-[#4056A1]'>{email}</p>
        </div>
    );
};

export default InstructorCard;