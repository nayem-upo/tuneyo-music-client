import React, { useContext } from 'react';
import SelectedClassCard from './SelectedClassCard';
import useSelectedCard from '../Components/useSelectedCard';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Authenticate/AuthProvider';
import axios from 'axios';

const SelectedClasses = () => {
    const { user } = useContext(AuthContext);
    //axios fetch
    const { data: selectedClasses = [], refetch } = useQuery(['selectedClasses'], async () => {
        try {
            const response = await axios.get(`https://tuneyo-server.vercel.app/selectedclasses/student/${user?.email}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    });

    const onlySelected = selectedClasses.filter(selected => selected.type === "selected");

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tuneyo-server.vercel.app/selectedclasses/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full'>
            <div>
                <div className='text-center'>
                    <h1 className='font-semibold text-4xl'>MY SELECTED CLASSES</h1>
                    <div className='p-[2px] w-[450px] mx-auto mt-2 bg-[#EA4C24]'></div>
                </div>
                <section className="text-gray-600 body-font w-[800px] mb-10 bg-white rounded-sm p-5">
                    <div className='flex justify-between mx-7 uppercase my-5 items-center'>
                        <h1 className='text-2xl font-semibold'>Total Selected Classes: {onlySelected.length}</h1>
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
                                        onlySelected.map((selectedClass, index) => <SelectedClassCard refetch={refetch} index={index} handleDelete={handleDelete} key={selectedClass._id} selectedClass={selectedClass}></SelectedClassCard>)
                                    }
                                </tbody>
                            </table>
                            {
                                onlySelected.length === 0 &&
                                <p className='w-full text-center py-5 text-2xl font-semibold text-[#EA4C24]'>You have no selected class!</p>
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SelectedClasses;