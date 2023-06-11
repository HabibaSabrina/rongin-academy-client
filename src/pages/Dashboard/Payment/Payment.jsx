import React from 'react';
import CheckOutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const classData = useLoaderData()
    
    
    return (
        <div>
            <Elements stripe={stripePromise}>
            <CheckOutForm classData={classData}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;