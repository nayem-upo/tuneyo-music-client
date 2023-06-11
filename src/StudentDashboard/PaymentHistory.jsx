import React, { useContext } from 'react';
import { AuthContext } from '../Authenticate/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
    const { user } = useContext(AuthContext);
    const { data: history = [], refetch } = useQuery(['history'], async () => {
        const res = await fetch(`https://tuneyo-server.vercel.app/payments/${user?.email}`)
        return res.json();
    })
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className='text-center my-5'>
                        <h1 className='font-semibold text-4xl'>PAYMENT HISTORY</h1>
                        <h1 className="sm:text-xl pt-2 text-2xl uppercase font-medium text-center title-font text-gray-900 mb-4">your successful payments</h1>
                        <div className='p-[2px] w-[450px] mx-auto bg-[#EA4C24]'></div>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        {
                            history.map(singleHistory =>
                                <div key={singleHistory._id} className="p-2 w-full">
                                    <div className="bg-gray-100 rounded justify-between flex p-4 h-full items-center">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} className="text-[#EA4C24] w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                            <path d="M22 4L12 14.01l-3-3" />
                                        </svg>
                                        <span className="title-font font-medium">{singleHistory.className}</span>
                                        <span className='font-semibold'>${singleHistory.price}</span>
                                        <img className='w-12 rounded-md h-9' src={singleHistory.classImage} alt="" />
                                    </div>
                                </div>
                            )
                        }
                        {
                            history.length === 0 &&
                            <p className='w-full text-center py-5 text-2xl font-semibold text-[#EA4C24]'>You have no payment history!</p>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PaymentHistory;