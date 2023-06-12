import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import InstructorCard from './InstructorCard';

const InstructorSection = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users/instructor')
        return res.data;
    })
    return (
        <div className='grid grid-cols-3 py-40 px-44 bg-[#f9f9e3]'>
            {
                users.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
            }
        </div>
    );
};

export default InstructorSection;