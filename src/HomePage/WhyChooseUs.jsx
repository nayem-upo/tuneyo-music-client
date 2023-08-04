import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    const [chooseUs, setChooseUs] = useState([])
    fetch('chooseUs.json')
        .then(res => res.json())
        .then(data => setChooseUs(data))
    return (
        <div className='md:mb-20'>
            <div className="hero xero h-[350px] mt-10 z-0" style={{ backgroundImage: 'url(https://www.master-and-more.eu/fileadmin/user_upload/Music-School.jpg)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="md:flex justify-between md:p-20 text-center md:text-left py-10 md:py-0">
                    <div>
                        <h1 className='text-[#f16232] font-semibold text-2xl'>Why Choose Us</h1>
                        <h1 className='text-white md:text-4xl text-3xl font-semibold'>We Give You The Best <br />Facilities to Learning</h1>
                    </div>
                    <div className='flex md:flex-row flex-col items-center md:gap-7 gap-3 md:mt-0 mt-4'>
                        <Link to="/classes">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className='bg-[#EA4C24] w[150px] hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] py-3 px-6 rounded-lg text-white font-semibold'
                            >
                                Booking a Class Now
                            </motion.button>
                        </Link>
                        <h1 className='text-white font-semibold'>Free Consultation <span className='text-2xl'>→</span></h1>
                    </div>
                </div>
            </div>
            <div className='flex md:flex-row flex-col items-center justify-center gap-6 md:-mt-20 -mt-10 z-40 text-center mb-10 w-[93%] rounded-md mx-auto'>
                {
                    chooseUs.map(achievement =>
                        <div className='flex bg-white shadow-lg rounded-md py-12 w-[270px] flex-col justify-center items-center gap-2' key={achievement.id}>
                            <img className='w-[55px]' src={achievement.imageLink} alt="" />
                            <h1 className='text-2xl font-semibold'>{achievement.number}</h1>
                            <p className='text-[#9D9D9D]'>{achievement.text}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;