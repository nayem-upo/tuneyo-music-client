import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PK);

const Payment = () => {
    const selectedClass = useLoaderData();
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOut selectedClass={selectedClass} price={10} />
            </Elements>
        </div>
    );
};

export default Payment;