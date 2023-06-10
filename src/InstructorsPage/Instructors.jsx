import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import InstructorCard from './InstructorCard';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
    }, [])
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={('https://join.biglobe.ne.jp/mobile/sim/gurashi/wp-content/uploads/2017/10/aa_music_top.jpg')}
                bgImageAlt="the dog"
                strength={-100}
            >
                <div className="hero h-[350px]">
                    <div className="text-center mt-48">
                        <div className="max-w-4xl w-[500px] text-white px-10 py-8 bg-white">
                            <h1 className="mb-5 text-5xl font-semibold text-[#EA4C24]">Instructors</h1>
                            <p className='text-black text-3xl'>Meet Our All Instructors</p>
                        </div>
                    </div>
                </div>
            </Parallax>

            <div className='my-20'>
                <div className='grid grid-cols-3 justify-items-center gap-y-10'>
                    {
                        instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;