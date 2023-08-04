import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../Authenticate/AuthProvider';

const JoinClassSectoin = () => {
    const { theme } = useContext(AuthContext);
    return (
        <div className={`${theme ? "dark" : ""}`}>
            <div className='md:flex items-center dark:text-white px-10 gap-10 justify-between py-16 dark:bg-[#333333]'>
                <div className='flex flex-col md:w-[540px] pb-12 md:pb-0'>
                    <h1 className='text-[#EA4C24] font-semibold text-3xl py-4'>Join Our Class</h1>
                    <h1 className='text-4xl font-semibold'>Learn The Music From The Core & Become Mastery</h1>
                    <p className='py-6 md:block hidden'>Join our music class and unlock your musical potential! Whether you're a beginner or an experienced musician, our classes cater to all skill levels and offer a supportive learning environment.
                        Discover the joy of music in our inclusive and engaging music class. Our experienced instructors will guide you through comprehensive lessons that cover technique, theory, and repertoire, ensuring a well-rounded musical education.
                    </p>
                    <label className='text-xl font-semibold py-4 md:pb-2' htmlFor="ability">Teaching Ability</label>
                    <progress className="progress progress-error md:w-[530px] mb-7" value="90" max="100"></progress>
                    <label className='text-xl font-semibold pb-2' htmlFor="ability">Student Satisfaction</label>
                    <progress className="progress progress-error md:w-[530px]" value="80" max="100"></progress>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className='bg-[#EA4C24] w-[150px] mt-7 hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] py-3 px-6 rounded-lg text-white font-semibold'
                    >
                        <Link to="/classes">
                            Learn More
                        </Link>
                    </motion.button>

                </div>
                <div className='flex md:w-1/2 gap-7 items-center'>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        className='w-[360px] h-[560px] object-cover rounded-md'
                        src='https://ssww-blog.s3.amazonaws.com/blog/wp-content/uploads/music-crafts-for-kids.jpg'
                        alt=''
                    />
                    <div className='flex flex-col gap-7'>
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            className='w-[220px] rounded-md'
                            src='https://img.freepik.com/premium-photo/little-girl-plays-electric-piano_432165-1731.jpg?w=360'
                            alt=''
                        />
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            className='w-[220px] rounded-md'
                            src='https://img.freepik.com/free-photo/young-girl-learning-how-play-electronic-keyboard-home_23-2148843782.jpg?w=360'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinClassSectoin;