import React, { useContext } from 'react';
import useSelectedCard from '../Components/useSelectedCard';
import EnrolledClassesCard from './EnrolledClassesCard';
import { AuthContext } from '../Authenticate/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const EnrolledClasses = () => {
    const { user } = useContext(AuthContext);
    const { data: selectedClasses = [], refetch } = useQuery(['selectedClasses'], async () => {
        const res = await fetch(`https://tuneyo-server.vercel.app/selectedclasses/student/${user?.email}`)
        return res.json();
    })
    const onlyPaidItem = selectedClasses.filter(selected => selected.type === "paid");
    return (
        <div className='w-full'>
            <div className='my-10'>
                <div className='text-center'>
                    <h1 className='font-semibold text-4xl uppercase'>MY Enrolled CLASSES</h1>
                    <div className='p-[2px] w-[450px] mx-auto mt-2 bg-[#EA4C24]'></div>
                </div>
                <section className="text-gray-600 body-font w-[800px] mb-10 bg-white rounded-sm p-5">
                    <div className='flex justify-between mx-7 uppercase my-5 items-center'>
                        <h1 className='text-2xl font-semibold'>Total ENROLLED  Classes: {onlyPaidItem.length}</h1>
                    </div>
                    <div className="container px-5 mx-auto">
                        <div className="w-full mx-auto overflow-auto">
                            <table className="table-auto w-full text-left whitespace-no-wrap">
                                <thead>
                                    <tr>
                                        <th className="w-10 title-font tracking-wider font-medium text-white text-sm text-center bg-[#EA4C24] rounded-tl-lg">#</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#EA4C24] uppercase">IMAGE</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#EA4C24] uppercase">Class Name</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#EA4C24] uppercase">Instructor name</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#EA4C24] rounded-tr-lg">PRICE</th>
                                    </tr>
                                </thead>
                                <tbody className='text-[#EA4C24] font-semibold'>
                                    {
                                        onlyPaidItem.map((selectedClass, index) => <EnrolledClassesCard refetch={refetch} index={index} key={selectedClass._id} selectedClass={selectedClass}></EnrolledClassesCard>)
                                    }
                                </tbody>
                            </table>
                            {
                                onlyPaidItem.length === 0 &&
                                <p className='w-full text-center py-5 text-2xl font-semibold text-[#EA4C24]'>You have not enrolled any class yet!</p>
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EnrolledClasses;