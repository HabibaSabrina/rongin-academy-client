import React, { useContext, useState } from 'react';
import CheckOutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';
// import useAxiosSecure from '../../hooks/useAxiosSecure';
// import { AuthContext } from '../../../providers/AuthProvider';
// import { AuthContext } from '../../../providers/AuthProvider';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const classData = useLoaderData()
    // const {user, loading} =useContext(AuthContext)
    // const [axiosSecure] = useAxiosSecure()
    // const totalEnrolled = classes.filter(enroll => enroll._id === classData.classId)
    
    return (
        <div>
            <Elements stripe={stripePromise}>
            <CheckOutForm  classData={classData}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;