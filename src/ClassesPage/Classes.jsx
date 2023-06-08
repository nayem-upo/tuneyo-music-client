import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Parallax } from 'react-parallax';
import ClassCard from './ClassCard';

const Classes = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch(`http://localhost:5000/classes`)
        return res.json();
    })

    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={('https://www.musicandmellc.com/photos/3/36/DMN_3641/image_vault/180209125506235_1.jpg')}
                bgImageAlt="the dog"
                strength={-100}
            >
                <div className="hero h-[350px]">
                    <div className="text-center mt-48">
                        <div className="max-w-4xl w-[500px] text-white px-10 py-8 bg-white">
                            <h1 className="mb-5 text-5xl font-semibold text-[#EA4C24]">All Classes</h1>
                            <p className='text-black text-3xl'>Available Music Class</p>
                        </div>
                    </div>
                </div>
            </Parallax>
            <div className='grid grid-cols-3 justify-items-center gap-y-10 my-20'>
                {
                    classes.map(clasS => <ClassCard clasS={clasS} key={clasS._id}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;