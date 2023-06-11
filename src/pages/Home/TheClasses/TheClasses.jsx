import React, { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClassCard from './ClassCard';
import { AuthContext } from '../../../providers/AuthProvider';

const TheClasses = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    const approvedClasses = classes.filter(approve => approve.status === 'approved')
    return (
        <div className='grid grid-cols-3 bg-[#f9f9e3] px-32 p-20 gap-10'>
            {
                approvedClasses.map(theClass => <ClassCard key={theClass._id} user={user} theClass={theClass}></ClassCard>)
            }
        </div>
    );
};

export default TheClasses;