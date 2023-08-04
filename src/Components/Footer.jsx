import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <div>
            <div className='md:flex relative gap-10 bg-[#fa5931] -mb-40 p-12 rounded-lg w-[93%] mx-auto justify-between items-center'>
                <div className='md:w-1/2'>
                    <h1 className='text-3xl font-semibold pb-3'>Join Our Newsletter</h1>
                    <p className='text-white'>Discover the joy of music in our inclusive and engaging music class. <br />Our experienced instructors will guide you.</p>
                </div>
                <div className='flex gap-3 items-end flex-wrap'>
                    <div className='border-b-2 pb-1 md:pt-0 pt-10'>
                        <input className='bg-[#0080ff00] w-72 text-xl text-white outline-none' type="email" name="email" id="inputID" placeholder='Enter Your Email Address' />
                    </div>
                    <Link to="/classes">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className='bg-[#000000] w-[150px] mt-7 hover:bg-[#ffffff] duration-300 hover:text-[#EA4C24] hover:border-2 border-2 border-black py-3 px-6 rounded-lg text-white font-semibold'
                        >
                            Subscribe
                        </motion.button>
                    </Link>
                </div>
            </div>
            <div className='mt-10'>
                <div className='bg-[#151515] grid md:grid-cols-4 grid-cols-1 gap-5 p-10 pt-44'>
                    <div className=' text-white'>
                        <NavLink className="flex gap-3 items-center">
                            <img className='w-10' src="https://i.ibb.co/TRD582L/music-logo-m-logo-png-1.png" alt="" />
                            <h1 className='font-bold text-[#EA4C24] text-3xl'>TuneYo</h1>
                        </NavLink>
                        <p className='text-white py-3'>Spark the love for music in young hearts at TuneYo.</p>
                        <div className='flex gap-3 hover:text-[#EA4C24]'>
                            <svg className='rounded p-2 bg-[#87c90d00]' fill="#ffffff" width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M22,3H2A1,1,0,0,0,1,4V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V4A1,1,0,0,0,22,3ZM21,19H3V9.477l8.628,3.452a1.01,1.01,0,0,0,.744,0L21,9.477ZM21,7.323l-9,3.6-9-3.6V5H21Z" /></g></svg>
                            <h1>info@tuneyomusic.com</h1>
                        </div>
                        <div className='flex gap-3 hover:text-[#EA4C24]'>
                            <svg className='rounded p-2 bg-[#87c90d00]' width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z" fill="#ffffff" /></g></svg>
                            <h1>+256 (3156) 2156 236</h1>
                        </div>
                        <div className='flex gap-3 hover:text-[#EA4C24]'>
                            <svg className='rounded p-2 bg-[#87c90d00]' version={1.0} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40px" height="35px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" /> </g></svg>
                            <h1>256 Lonely Street Ave, Brooklyn CA, United State</h1>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='text-xl font-semibold text-white'>Quick Links</h1>
                        <div className='w-20 bg-[#EA4C24] p-[1px]' />
                        <div className='text-white flex flex-col mt-4'>
                            <Link className='hover:text-[#EA4C24]'>About Us</Link>
                            <Link className='hover:text-[#EA4C24]'>Sevices</Link>
                            <Link className='hover:text-[#EA4C24]'>Careers</Link>
                            <Link className='hover:text-[#EA4C24]'>Pricing</Link>
                            <Link className='hover:text-[#EA4C24]'>Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold text-white'>Useful Links</h1>
                        <div className='w-20 bg-[#EA4C24] p-[1px]' />
                        <div className='text-white flex flex-col mt-4'>
                            <Link className='hover:text-[#EA4C24]'>Privacy Policy</Link>
                            <Link className='hover:text-[#EA4C24]'>Terms and conditions</Link>
                            <Link className='hover:text-[#EA4C24]'>Disclaimer</Link>
                            <Link className='hover:text-[#EA4C24]'>Support</Link>
                            <Link className='hover:text-[#EA4C24]'>FAQ</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold text-white'>Work Hours</h1>
                        <div className='w-20 bg-[#EA4C24] p-[1px]' />
                        <div className='text-white flex flex-col mt-4 gap-2'>
                            <h1 className='flex gap-2'>
                                <svg
                                    width="25px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M12 8V12L15 15"
                                            stroke="#EA4C24"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                        />{" "}
                                        <circle cx={12} cy={12} r={9} stroke="#EA4C24" strokeWidth={2} />{" "}
                                    </g>
                                </svg>

                                9 AM - 5 PM , Monday - Saturday</h1>
                            <p className='my-2'>Building a foundation of musical excellence, one note at a time, for young maestros at TuneYo Music</p>
                            <Link to="/classes"><button className='bg-[#EA4C24] w-[180px]  hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] py-3 px-6 rounded-lg text-white font-semibold'>Join the Class</button></Link>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='bg-[#151515] py-5 flex justify-between px-10'>
                    <h1 className=' text-white text-center'>Music School Website by Nayem</h1>
                    <h1 className=' text-white text-center'>Copyright Ⓒ 2023. All Rights Reserved.</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;