import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from 'swiper';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

SwiperCore.use([Pagination, Autoplay]);

const Banner = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full z-0 object-cover md:h-[650px] h-[250px]' src="https://cdn.shopify.com/s/files/1/0244/1771/articles/Blog.Parents.Child.Violin.1600x900.jpg?v=1630536661" alt="" />
                    <div className='absolute top-0 md:py-56  py-20 bg-black bg-opacity-60 w-full md:h-[650px] h-[250px] z-40 '>
                        <h1 className='md:text-6xl text-xl font-semibold md:w-[500px] mx-4 md:mx-20 text-white'>Learn The <span className='text-[#EA4C24]'>Music</span> From The Masters</h1>
                        <p className='md:mx-20 mx-5 md:text-xl text-xs text-white my-4 md:my-6 md:w-[600px]'>Unleash Your Child's Musical Potential at Our Fun and Engaging Kids Music School!</p>
                        <Link to="/classes">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className='bg-[#EA4C24] md:mx-20 mx-5 hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] text-sm md:text-md py-2 md:py-3 px-3 md:px-6 rounded-lg text-white font-semibold'>
                                Learn More
                            </motion.button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full z-0 object-cover md:h-[650px] h-[250px]' src="https://images.unsplash.com/photo-1575314113965-c6672a42b99c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className='absolute top-0 md:py-56  py-20 bg-black bg-opacity-60 w-full md:h-[650px] h-[250px] z-40 '>
                        <h1 className='md:text-6xl text-xl font-semibold md:w-[500px] mx-4 md:mx-20 text-white'>Learn The <span className='text-[#EA4C24]'>Music</span> From The Masters</h1>
                        <p className='md:mx-20 mx-5 md:text-xl text-xs text-white my-4 md:my-6 md:w-[600px]'>Unleash Your Child's Musical Potential at Our Fun and Engaging Kids Music School!</p>
                        <Link to="/classes"><button className='bg-[#EA4C24] md:mx-20 mx-5 hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] text-sm md:text-md py-2 md:py-3 px-3 md:px-6 rounded-lg text-white font-semibold'>Learn More</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full z-0 object-cover md:h-[650px] h-[250px]' src="https://images.unsplash.com/photo-1516718638842-81bf2dcd7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className='absolute top-0 md:py-56  py-20 bg-black bg-opacity-60 w-full md:h-[650px] h-[250px] z-40 '>
                        <h1 className='md:text-6xl text-xl font-semibold md:w-[500px] mx-4 md:mx-20 text-white'>Learn The <span className='text-[#EA4C24]'>Music</span> From The Masters</h1>
                        <p className='md:mx-20 mx-5 md:text-xl text-xs text-white my-4 md:my-6 md:w-[600px]'>Unleash Your Child's Musical Potential at Our Fun and Engaging Kids Music School!</p>
                        <Link to="/classes"><button className='bg-[#EA4C24] md:mx-20 mx-5 hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] text-sm md:text-md py-2 md:py-3 px-3 md:px-6 rounded-lg text-white font-semibold'>Learn More</button></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full z-0 object-cover md:h-[650px] h-[250px]' src="https://cms-tc.pbskids.org/parents/articles/The-Benefits-of-Music-Education.jpg" alt="" />
                    <div className='absolute top-0 md:py-56  py-20 bg-black bg-opacity-60 w-full md:h-[650px] h-[250px] z-40 '>
                        <h1 className='md:text-6xl text-xl font-semibold md:w-[500px] mx-4 md:mx-20 text-white'>Learn The <span className='text-[#EA4C24]'>Music</span> From The Masters</h1>
                        <p className='md:mx-20 mx-5 md:text-xl text-xs text-white my-4 md:my-6 md:w-[600px]'>Unleash Your Child's Musical Potential at Our Fun and Engaging Kids Music School!</p>
                        <Link to="/classes"><button className='bg-[#EA4C24] md:mx-20 mx-5 hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] text-sm md:text-md py-2 md:py-3 px-3 md:px-6 rounded-lg text-white font-semibold'>Learn More</button></Link>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;