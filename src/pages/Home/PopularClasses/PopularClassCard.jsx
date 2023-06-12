import React from 'react';

const PopularClassCard = ({popular}) => {
    const {clsImg, clsName, enrolled} = popular
    return (
        <div className='text-center max-sm:p-5'>
            <img className='md:w-64 w-full bg-[#4056A1] animate-pulse hover:animate-none hover:bg-[#253466] p-5 rounded' src={clsImg} alt="" />
            <p className='text-xl font-semibold my-5 text-[#F13C20]'>{clsName}</p>
        </div>
    );
};

export default PopularClassCard;