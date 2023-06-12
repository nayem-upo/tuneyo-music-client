import React from 'react';
import UserCard from './UserCard';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`https://tuneyo-server.vercel.app/users`)
        return res.json();
    })
    return (
        <div>
            <div className='text-center my-10'>
                <h1 className='font-semibold text-4xl'>MANAGE USERS</h1>
                <div className='p-[2px] w-[450px] mx-auto mt-2 bg-[#EA4C24]'></div>
            </div>
            <section className="text-gray-600 w-[850px] body-font mb-10 bg-white rounded-sm p-5">
                <div className='flex justify-between mx-7 uppercase my-5 items-center'>
                    <h1 className='text-2xl font-semibold'>Total Users: {users.length}</h1>
                </div>
                <div className="container px-5 mx-auto">
                    <div className="w-full mx-auto overflow-auto">
                        <table className="table-auto w-full text-left whitespace-no-wrap overflow-hidden">
                            <thead>
                                <tr>
                                    <th className="w-10 title-font tracking-wider font-medium text-white text-sm text-center bg-[#EA4C24] rounded-tl-lg">#</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#EA4C24] uppercase">USER Name</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#EA4C24] uppercase">User Email</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#EA4C24]">ROLE</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-[#EA4C24] rounded-tr-lg">ACTION</th>
                                </tr>
                            </thead>
                            <tbody className='text-[#EA4C24] font-semibold'>
                                {
                                    users.map((user, index) => <UserCard refetch={refetch} index={index} key={user._id} user={user}></UserCard>)
                                }
                            </tbody>
                        </table>
                        {
                            users.length === 0 &&
                            <p className='w-full text-center py-5 text-2xl font-semibold text-[#EA4C24]'>No user registerd yet!</p>
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageUsers;