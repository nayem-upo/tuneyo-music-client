import { faClock, faCompactDisc, faDrum, faGuitar, faMicrophoneLines, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { AuthContext } from '../Authenticate/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import PopularClassCard from './PopularClassCard';

const PopularClasses = () => {
    const { theme, user } = useContext(AuthContext)

    const { data: allClass = [], refetch } = useQuery(['allClass'], async () => {
        try {
            const response = await axios.get('https://tuneyo-server.vercel.app/classes');
            return response.data;
        } catch (error) {
            console.error(error);
        }
    });
    
    const approvedClasses = allClass.filter(a => a.status === "approved")
    const sortedData = approvedClasses.sort((a, b) => b.enrolled - a.enrolled);

    return (
        <div className={`${theme ? "dark" : ""}`}>
            <div className='text-center py-10 dark:bg-[#333333]'>
                <h1 className='text-[#EA4C24] text-3xl font-semibold'>Our Class</h1>
                <h1 className='md:text-4xl text-2xl font-semibold dark:text-white'>Our Popular Music Class</h1>
                <p className='my-3 hidden md:block font-semibold dark:text-white'>Unlock Your Child's Musical Potential with Our Popular Music Classes!</p>
            </div>
            <div className='grid md:grid-cols-3 gap-10 justify-items-center md:px-10 dark:text-white dark:bg-[#333333]'>
                {
                    sortedData.slice(0, 6).map(data => <PopularClassCard data={data} key={data._id}></PopularClassCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;