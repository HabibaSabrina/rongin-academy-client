import React from 'react';

const PopularInstructorCard = ({popularIns}) => {
    const {name, photo} = popularIns
    return (
        <div className='w-60'>
            <img className='-mb-52' src="/orange.png" alt="" />
            <img className='rounded-full' src={photo} alt="" />
            <p className='text-xl font-bold text-[#4056A1] py-3'>{name}</p>
        </div>
    );
};

export default PopularInstructorCard;