import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../Authenticate/AuthProvider';

const AboutUsSection = () => {
    const { theme } = useContext(AuthContext);
    return (
        <div className={`${theme ? "dark" : ""}`}>
            <div className='md:flex flex-wrap items-center dark:text-white px-10 gap-10 justify-center pt-10 dark:bg-[#333333]'>
                <div className='flex md:w-[500px] w-[300px] gap-7 items-center justify-center'>
                    <img className='md:w-[500px] w-[400px]' src="https://uploads-ssl.webflow.com/5fd244c48802fcc3504c9a45/5fdb929098a7a1232e43b597_GSM%2BPupil%2BConcert%2BCharlton%2BHouse%2BFinals%2BLow%2BRes-24.jpg" alt="" />
                    <img className='absolute md:w-[430px] w-[220px] border-[15px] ml-[98px] -mt-[82px] border-white rounded-md' src="https://templatekit.jegtheme.com/musicy/wp-content/uploads/sites/121/2021/07/group-of-homeschooling-children-with-teacher-having-music-lesson-indoors-coronavirus-concept-1-1-e1626148006985.jpg" alt="" />
                </div>
                <div>
                    <div className='flex flex-col md:w-[540px] pb-12 md:pb-0'>
                        <h1 className='text-[#EA4C24] font-semibold text-3xl pb-4 md:pt-0 pt-5'>About Us</h1>
                        <h1 className='text-4xl font-semibold'>Learn The Music From The Core & Become Mastery</h1>
                        <p className='py-6 md:block hidden'>
                            Discover the joy of music in our inclusive and engaging music class. Our experienced instructors will guide you through comprehensive lessons that cover technique, theory, and repertoire, ensuring a well-rounded musical education.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className='bg-[#EA4C24] w-[150px] md:mt-0 mt-5 hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] py-3 px-6 rounded-lg text-white font-semibold'
                        >
                            <Link to="/classes">
                                Know More
                            </Link>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;