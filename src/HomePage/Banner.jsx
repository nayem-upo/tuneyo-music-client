import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from 'swiper';

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
                    <img className='w-full z-0 object-cover h-[650px]' src="https://cdn.shopify.com/s/files/1/0244/1771/articles/Blog.Parents.Child.Violin.1600x900.jpg?v=1630536661" alt="" />
                    <div className='absolute top-0 py-56 bg-black bg-opacity-60 w-full h-[650px] z-40 '>
                        <h1 className='text-6xl font-semibold w-[500px] mx-20 text-white'>Learn The <span className='text-[#EA4C24]'>Music</span> From The Masters</h1>
                        <p className='mx-20 text-xl text-white my-6 w-[600px]'>Unleash Your Child's Musical Potential at Our Fun and Engaging Kids Music School!</p>
                        <button className='bg-[#EA4C24] mx-20 hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] py-3 px-6 rounded-lg text-white font-semibold'>Learn More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full z-0 object-cover h-[650px]' src="https://images.unsplash.com/photo-1575314113965-c6672a42b99c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className='absolute top-0 py-56 bg-black bg-opacity-60 w-full h-[650px] z-40 '>
                        <h1 className='text-6xl font-semibold w-[500px] mx-20 text-white'>Learn The <span className='text-[#EA4C24]'>Music</span> From The Masters</h1>
                        <p className='mx-20 text-xl text-white my-6 w-[600px]'>Unleash Your Child's Musical Potential at Our Fun and Engaging Kids Music School!</p>
                        <button className='bg-[#EA4C24] mx-20 hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] py-3 px-6 rounded-lg text-white font-semibold'>Learn More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full z-0 object-cover h-[650px]' src="https://images.unsplash.com/photo-1516718638842-81bf2dcd7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                    <div className='absolute top-0 py-56 bg-black bg-opacity-60 w-full h-[650px] z-40 '>
                        <h1 className='text-6xl font-semibold w-[500px] mx-20 text-white'>Learn The <span className='text-[#EA4C24]'>Music</span> From The Masters</h1>
                        <p className='mx-20 text-xl text-white my-6 w-[600px]'>Unleash Your Child's Musical Potential at Our Fun and Engaging Kids Music School!</p>
                        <button className='bg-[#EA4C24] mx-20 hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] py-3 px-6 rounded-lg text-white font-semibold'>Learn More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full z-0 object-cover h-[650px]' src="https://cms-tc.pbskids.org/parents/articles/The-Benefits-of-Music-Education.jpg" alt="" />
                    <div className='absolute top-0 py-56 bg-black bg-opacity-60 w-full h-[650px] z-40 '>
                        <h1 className='text-6xl font-semibold w-[500px] mx-20 text-white'>Learn The <span className='text-[#EA4C24]'>Music</span> From The Masters</h1>
                        <p className='mx-20 text-xl text-white my-6 w-[600px]'>Unleash Your Child's Musical Potential at Our Fun and Engaging Kids Music School!</p>
                        <button className='bg-[#EA4C24] mx-20 hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] py-3 px-6 rounded-lg text-white font-semibold'>Learn More</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;