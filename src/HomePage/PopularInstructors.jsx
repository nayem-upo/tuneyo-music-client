import React, { useContext } from 'react';
import { AuthContext } from '../Authenticate/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PopularInstructors = () => {
    const { theme } = useContext(AuthContext);
    const { data: allusers = [], refetch } = useQuery(['allusers'], async () => {
        const res = await fetch(`https://tuneyo-server.vercel.app/users`)
        return res.json();
    })
    const instructors = allusers.filter(b => b.role === "instructor");
    return (
        <div className={`${theme ? "dark" : ""}`}>
            <div className='text-center dark:bg-[#333333] dark:text-white pt-10 md:pt-20'>
                <h1 className='text-[#EA4C24] text-3xl font-semibold'>Our Instructors</h1>
                <h1 className='md:text-4xl text-2xl font-semibold'>Our Popular Instructors</h1>
                <p className='py-3 hidden md:block font-semibold'>Meet Our Esteemed Instructors: Passionate Experts Ready to Guide Your Musical Journey!</p>
            </div>
            <div className='grid md:grid-cols-3 justify-items-center gap-10 md:px-20 py-14  dark:bg-[#333333]'>
                {
                    instructors.slice(0, 6).map(instructor =>
                        <div key={instructor?._id} className="hero w-[80%] md:w-[240px] md:h-[300px] rounded-md" style={{ backgroundImage: `url(${instructor?.image})` }}>
                            <div className="hero-overlay bg-opacity-0 hover:bg-opacity-40"></div>
                            <div className="text-center text-neutral-content text-transparent duration-500 hover:text-white hero-overlay bg-opacity-0 hover:bg-opacity-60 rounded-md">
                                <div className="max-w-md">
                                    <h1 className='text-right text-2xl ms-52 mt-14 font-semibold md:ms-32 rotate-90'>{instructor.role}</h1>
                                    <h1 className='text-left mt-[160px] font-semibold px-3 text-3xl'>{instructor.name}</h1>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default PopularInstructors;