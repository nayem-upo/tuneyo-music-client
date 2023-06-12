import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ManageClassCard from './ManageClassCard';

const ManageClasses = () => {
    const { data: allclasses = [], refetch } = useQuery(['allclasses'], async () => {
        const res = await fetch(`https://tuneyo-server.vercel.app/classes`)
        return res.json();
    })
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='font-semibold md:text-4xl text-xl'>MANAGE CLASSES</h1>
                <div className='p-[2px] w-[300px] md:w-[450px] text-white font-semibold mx-auto mt-2 bg-[#EA4C24]'>Total Classes: {allclasses.length}</div>
            </div>
            <div className="container px-5 mx-auto my-10 md:w-[1000px]">
                <div className="md:w-full mx-auto">
                    <div className="shadow sm:rounded-lg">
                        <table className="table-auto md:w-full text-left whitespace-no-wrap">
                            <thead>
                                <tr>
                                    <th className="w-10 title-font tracking-wider font-medium text-white text-sm text-center bg-[#EA4C24] rounded-tl-lg">#</th>
                                    <th className="px-2 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] uppercase">IMAGE</th>
                                    <th className="px-2 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] uppercase">Class Name</th>
                                    <th className="px-2 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] uppercase">Instructor</th>
                                    <th className="px-2 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] uppercase">Instructor email</th>
                                    <th className="px-2 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] uppercase">Available seats</th>
                                    <th className="px-2 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24]">PRICE</th>
                                    <th className="px-2 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] uppercase">Status</th>
                                    <th className="px-2 w-32 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] rounded-tr-lg">ACTION</th>
                                </tr>
                            </thead>
                            <tbody className="text-[#EA4C24] font-semibold">
                                {allclasses.map((clasS, index) => (
                                    <ManageClassCard refetch={refetch} index={index} key={clasS._id} clasS={clasS}></ManageClassCard>
                                ))}
                            </tbody>
                        </table>
                        {allclasses.length === 0 && (
                            <p className="w-full text-center py-5 text-2xl font-semibold text-[#EA4C24]">There are no classes</p>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageClasses;