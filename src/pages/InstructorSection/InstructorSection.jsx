import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import InstructorCard from './InstructorCard';
import Title from '../components/Title/Title';
import { Helmet } from 'react-helmet';

const InstructorSection = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users/instructor')
        return res.data;
    })
    return (
        <div className='bg-[#f9f9e3] pt-5'>
            <Helmet><title>Rongin Academy | Instructor</title></Helmet>
            <Title heading="Instructors" subHeading="Our Instructors are very good at their works"></Title>
            <div className='grid grid-cols-3 gap-20 py-20 px-44 bg-[#f9f9e3]'>
            {
                users.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
            }
        </div>
        </div>
    );
};

export default InstructorSection;