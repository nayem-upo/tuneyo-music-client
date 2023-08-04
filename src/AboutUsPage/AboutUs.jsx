import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutUsSection from '../HomePage/AboutUsSection';
import AchievementSection from '../HomePage/AchievementSection';
import WhyChooseUs from '../HomePage/WhyChooseUs';
import JoinClassSectoin from '../HomePage/JoinClassSectoin';

const AboutUs = () => {
    return (
        <div>
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={('https://duy554ewuuwzm.cloudfront.net/photos/3/36/DMN_3641/image_vault/180209125506235_1.jpg')}
                bgImageAlt="the dog"
                strength={-100}
                className='mb-20'
            >
                <div className="hero h-[200px] md:h-[350px]">
                    <div className="text-center md:mt-48 mt-28">
                        <div className="max-w-4xl md:w-[500px] text-white px-10 md:py-8 py-2 bg-white dark:bg-[#333333] dark:text-white">
                            <h1 className="mb-5 md:text-5xl text-3xl font-semibold text-[#EA4C24]">About Us</h1>
                            <p className='text-black md:text-3xl dark:bg-[#333333] dark:text-white'>Know more about us</p>
                        </div>
                    </div>
                </div>
            </Parallax>
            {/* about us */}
            <AboutUsSection></AboutUsSection>
            {/* achievements */}
            <AchievementSection></AchievementSection>
            {/* Why Choose Us */}
            <WhyChooseUs></WhyChooseUs>
            {/* JoinClassSectoin */}
            <JoinClassSectoin></JoinClassSectoin>
        </div>
    );
};

export default AboutUs;