import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PopularInstructorCard from './PopularInstructorCard';
import Title from '../../components/Title/Title';

const PopularInstructors = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users/instructor/popular')
        return res.data;
    })
    return (
        <div>
            <Title heading="Popular Instructors" subHeading="Some of our popular instructors whose are best at their classes"></Title>
            <div className='md:grid grid-cols-3 gap-20 text-center md:py-20 py-10 px-20 md:px-52'>
            {
                users.map(popularIns => <PopularInstructorCard key={popularIns._id} popularIns={popularIns}></PopularInstructorCard>)
            }
        </div>
        </div>
    );
};

export default PopularInstructors;