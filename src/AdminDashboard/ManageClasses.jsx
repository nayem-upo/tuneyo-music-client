import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ManageClassCard from './ManageClassCard';

const ManageClasses = () => {
    const { data: allclasses = [], refetch } = useQuery(['allclasses'], async () => {
        const res = await fetch(`http://localhost:5000/classes`)
        return res.json();
    })
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='font-semibold text-4xl'>MANAGE CLASSES</h1>
                <div className='p-[2px] w-[450px] mx-auto mt-2 bg-[#EA4C24]'></div>
            </div>
            <div className="container px-5 mx-auto w-[1000px]">
                <div className="w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="w-10 title-font tracking-wider font-medium text-white text-sm text-center bg-[#EA4C24] rounded-tl-lg">#</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] uppercase">IMAGE</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] uppercase">Class Name</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] uppercase">Instructor</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] uppercase">Instructor email</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] uppercase">Available seats</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24]">PRICE</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] uppercase">Status</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-xs bg-[#EA4C24] rounded-tr-lg">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className='text-[#EA4C24] font-semibold'>
                            {
                                allclasses.map((clasS, index) => <ManageClassCard refetch={refetch} index={index} key={clasS._id} clasS={clasS}></ManageClassCard>)
                            }
                        </tbody>
                    </table>
                    {
                        allclasses.length === 0 &&
                        <p className='w-full text-center py-5 text-2xl font-semibold text-[#EA4C24]'>There have no class</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageClasses;