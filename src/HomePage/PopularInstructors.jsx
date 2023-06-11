import React, { useContext } from 'react';
import { AuthContext } from '../Authenticate/AuthProvider';

const PopularInstructors = () => {
    const { theme } = useContext(AuthContext);
    return (
        <div className={`${theme? "dark": ""}`}>
            <div className='text-center dark:bg-[#333333] dark:text-white pt-10 md:pt-20'>
                <h1 className='text-[#EA4C24] text-3xl font-semibold'>Our Instructors</h1>
                <h1 className='md:text-4xl text-2xl font-semibold'>Our Popular Instructors</h1>
                <p className='py-3 hidden md:block font-semibold'>Meet Our Esteemed Instructors: Passionate Experts Ready to Guide Your Musical Journey!</p>
            </div>
            <div className='grid md:grid-cols-3 justify-items-center gap-10 md:px-20 py-14  dark:bg-[#333333]'>
                <div>
                    <div className="hero w-[90%] md:w-[340px] md:h-[500px] rounded-md" style={{ backgroundImage: `url("https://www.nzmusicteachers.co.nz/wp-content/uploads/2022/06/Adrian-22-700x1050.jpg")` }}>
                        <div className="hero-overlay bg-opacity-0 hover:bg-opacity-40"></div>
                        <div className=" text-center text-neutral-content text-transparent duration-500 hover:text-white hero-overlay bg-opacity-0 hover:bg-opacity-60 rounded-md">
                            <div className="max-w-md">
                                <h1 className='text-right text-2xl mt-7 font-semibold ms-64 rotate-90'>Vocal</h1>
                                <h1 className='text-left mt-[390px] font-semibold px-3 text-3xl'>John Lewis</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero w-[90%] md:w-[340px] md:h-[500px] rounded-md" style={{ backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5b1fd9023e2d09b41dced474/1583174126267-RCH59NYTZS1GUPSOUQ1T/Adam+Douglass+Guitar+Teacher+001.jpg")` }}>
                        <div className="hero-overlay bg-opacity-0 hover:bg-opacity-40"></div>
                        <div className=" text-center text-neutral-content text-transparent duration-500 hover:text-white w-full h-full hero-overlay bg-opacity-0 hover:bg-opacity-60 rounded-md">
                            <div className="max-w-md">
                                <h1 className='text-right text-2xl mt-7 font-semibold ms-64 rotate-90'>Vocal</h1>
                                <h1 className='text-left mt-[390px] font-semibold px-3 text-3xl'>Kathy Davis</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero w-[90%] md:w-[340px] md:h-[500px] rounded-md" style={{ backgroundImage: `url("https://amajormusiclessons.com/img/Paul-Scott-Wheeler-Guitar-Piano-Vocal-Instructor-Columbia-MO.jpg")` }}>
                        <div className="hero-overlay bg-opacity-0 hover:bg-opacity-40"></div>
                        <div className=" text-center text-neutral-content text-transparent duration-500 hover:text-white w-full h-full hero-overlay bg-opacity-0 hover:bg-opacity-60 rounded-md">
                            <div className="max-w-md">
                                <h1 className='text-right text-2xl mt-7 font-semibold ms-64 rotate-90'>Guitar
</h1>
                                <h1 className='text-left mt-[390px] font-semibold px-3 text-3xl'>David Cox</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero w-[90%] md:w-[340px] md:h-[500px] rounded-md" style={{ backgroundImage: `url("https://5starmusic.com/wp-content/uploads/2021/04/Cole-bio.jpg")` }}>
                        <div className="hero-overlay bg-opacity-0 hover:bg-opacity-40"></div>
                        <div className=" text-center text-neutral-content text-transparent duration-500 hover:text-white w-full h-full hero-overlay bg-opacity-0 hover:bg-opacity-60 rounded-md">
                            <div className="max-w-md">
                                <h1 className='text-right text-2xl mt-7 font-semibold ms-64 rotate-90'>Vocal</h1>
                                <h1 className='text-left mt-[390px] font-semibold px-3 text-3xl'>Sarah Thompson</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero w-[90%] md:w-[340px] md:h-[500px] rounded-md" style={{ backgroundImage: `url("https://coloradomusicinstitute.com/wp-content/uploads/2020/04/CMI-Makeup-Picture-Day-Feb2019-137-scaled.jpg")` }}>
                        <div className="hero-overlay bg-opacity-0 hover:bg-opacity-40"></div>
                        <div className=" text-center text-neutral-content text-transparent duration-500 hover:text-white w-full h-full hero-overlay bg-opacity-0 hover:bg-opacity-60 rounded-md">
                            <div className="max-w-md">
                                <h1 className='text-right text-2xl mt-7 font-semibold ms-64 rotate-90'>Guitar</h1>
                                <h1 className='text-left mt-[390px] font-semibold px-3 text-3xl'>Laura Roberts</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="hero w-[90%] md:w-[340px] md:h-[500px] rounded-md" style={{ backgroundImage: `url("https://static.wixstatic.com/media/9a1f0b_ed5b884140584060ab3b4b39fe9f4866~mv2.jpg/v1/fill/w_640,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/9a1f0b_ed5b884140584060ab3b4b39fe9f4866~mv2.jpg")` }}>
                        <div className="hero-overlay bg-opacity-0 hover:bg-opacity-40"></div>
                        <div className=" text-center text-neutral-content text-transparent duration-500 hover:text-white w-full h-full hero-overlay bg-opacity-0 hover:bg-opacity-60 rounded-md">
                            <div className="max-w-md">
                                <h1 className='text-right text-2xl mt-7 font-semibold ms-64 rotate-90'>Piano</h1>
                                <h1 className='text-left mt-[390px] font-semibold px-3 text-3xl'>Jennifer Lee</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PopularInstructors;