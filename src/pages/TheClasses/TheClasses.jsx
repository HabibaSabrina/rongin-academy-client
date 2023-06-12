import React, { useContext } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClassCard from './ClassCard';
import { AuthContext } from '../../providers/AuthProvider';
import Title from '../components/Title/Title';

const TheClasses = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    const approvedClasses = classes.filter(approve => approve.status === 'approved')
    return (
        <div className='bg-[#f9f9e3] pt-5'>
            <Title heading="Our Classes" subHeading="You can learn a lot of things from our classes"></Title>
            <div className='md:grid md:grid-cols-3 bg-[#f9f9e3] md:px-32 md:p-20 p-8 md:gap-10'>
            {
                approvedClasses.map(theClass => <ClassCard key={theClass._id} user={user} theClass={theClass}></ClassCard>)
            }
        </div>
        </div>
    );
};

export default TheClasses;