import React from 'react';
import useSelectedCard from '../Components/useSelectedCard';
import SelectedClassCard from './SelectedClassCard';

const EnrolledClasses = () => {
    const [selectedClasses, refetch] = useSelectedCard();
    const onlyPaidItem = selectedClasses.filter(selected => selected.type === "paid");
    return (
        <div className='w-full'>
            <div>
                <div className='text-center'>
                    <h1 className='font-semibold text-4xl'>MY SELECTED CLASSES</h1>
                    <div className='p-[2px] w-[450px] mx-auto mt-2 bg-[#EA4C24]'></div>
                </div>
                <section className="text-gray-600 body-font w-[700px] mb-10 bg-white rounded-sm p-5">
                    <div className='flex justify-between mx-7 uppercase my-5 items-center'>
                        <h1 className='text-2xl font-semibold'>Total Selected Classes: </h1>
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
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#EA4C24]">PRICE</th>
                                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#EA4C24] rounded-tr-lg">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody className='text-[#EA4C24] font-semibold'>
                                    {
                                        onlyPaidItem.map((selectedClass, index) => <SelectedClassCard refetch={refetch} index={index} key={selectedClass._id} selectedClass={selectedClass}></SelectedClassCard>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EnrolledClasses;