import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PopularClassCard from './PopularClassCard';

const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes/popular')
        return res.data;
    })
    return (
        <div className='md:flex gap-10 md:px-32 py-10 bg-[#f9f9e3]'>
            {
                classes.map(popular => <PopularClassCard key={popular._id} popular={popular}></PopularClassCard>)
            }
        </div>
    );
};

export default PopularClasses;