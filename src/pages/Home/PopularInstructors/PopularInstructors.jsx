import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PopularInstructorCard from './PopularInstructorCard';

const PopularInstructors = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users/instructor/popular')
        return res.data;
    })
    return (
        <div className='md:grid grid-cols-3 gap-20 text-center md:py-20 px-20 md:px-52 bg-[#f9f9e3]'>
            {
                users.map(popularIns => <PopularInstructorCard key={popularIns._id} popularIns={popularIns}></PopularInstructorCard>)
            }
        </div>
    );
};

export default PopularInstructors;