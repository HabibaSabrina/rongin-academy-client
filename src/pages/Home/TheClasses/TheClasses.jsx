import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClassCard from './ClassCard';

const TheClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    const approvedClasses = classes.filter(approve => approve.status === 'approved')
    return (
        <div className='grid grid-cols-3 bg-[#f9f9e3] px-32 p-20'>
            {
                approvedClasses.map(theClass => <ClassCard key={theClass._id} theClass={theClass}></ClassCard>)
            }
        </div>
    );
};

export default TheClasses;