import React, { useContext, useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import InstructorCard from './InstructorCard';
import { AuthContext } from '../Authenticate/AuthProvider';

const Instructors = () => {
    const { theme } = useContext(AuthContext);
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('https://tuneyo-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])
    const filteredinstructor = instructors.filter(filtered => filtered.role === "instructor");
    return (
        <div className={`${theme ? "dark" : ""}`}>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={('https://join.biglobe.ne.jp/mobile/sim/gurashi/wp-content/uploads/2017/10/aa_music_top.jpg')}
                bgImageAlt="the dog"
                strength={-100}
            >
                <div className="hero h-[200px] md:h-[350px]">
                    <div className="text-center md:mt-48 mt-28">
                        <div className="max-w-4xl md:w-[500px] text-white px-10 md:py-8 py-2 bg-white dark:bg-[#333333] dark:text-white">
                            <h1 className="mb-5 md:text-5xl text-3xl font-semibold text-[#EA4C24]">Instructors</h1>
                            <p className='text-black md:text-3xl dark:bg-[#333333] dark:text-white'>Meet Our All Instructors</p>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className='py-20 dark:bg-[#333333] dark:text-white'>
                <div className='grid md:grid-cols-3 justify-items-center gap-y-10'>
                    {
                        filteredinstructor.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;