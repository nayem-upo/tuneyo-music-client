import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Parallax } from 'react-parallax';
import ClassCard from './ClassCard';
import axios from 'axios';
import { AuthContext } from '../Authenticate/AuthProvider';

const Classes = () => {
    const { theme } = useContext(AuthContext);
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        try {
            //Axios fetch here
            const response = await axios.get('https://tuneyo-server.vercel.app/classes');
            return response.data;
        } catch (error) {
            console.error(error);
        }
    });

    const approvedClasses = classes.filter(aproveclass => aproveclass.status === "approved")
    return (
        <div className={`${theme? "dark": ""}`}>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={('https://www.musicandmellc.com/photos/3/36/DMN_3641/image_vault/180209125506235_1.jpg')}
                bgImageAlt="the dog"
                strength={-100}
            >
                <div className="hero h-[200px] md:h-[350px]">
                    <div className="text-center md:mt-48 mt-28">
                        <div className="max-w-4xl md:w-[500px] text-white px-10 md:py-8 py-2 bg-white dark:bg-[#333333] dark:text-white">
                            <h1 className="mb-5 md:text-5xl text-3xl font-semibold text-[#EA4C24]">Classes</h1>
                            <p className='text-black md:text-3xl dark:bg-[#333333] dark:text-white'>All Available Music Class</p>
                        </div>
                    </div>
                </div>
            </Parallax>
            <div className='grid md:grid-cols-3 justify-items-center px-5 gap-y-10 py-20 dark:bg-[#333333] dark:text-white'>
                {
                    approvedClasses.map(clasS => <ClassCard theme={theme} clasS={clasS} key={clasS._id}></ClassCard>)
                }
                <div></div>
                {
                    approvedClasses.length < 1 &&
                    <div className='text-4xl font-semibold text-center'>No Music Class Are Available</div>
                }
            </div>
        </div>
    );
};

export default Classes;