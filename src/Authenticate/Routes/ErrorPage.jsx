import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div
            className="w-full h-screen flex justify-center"
            style={{ backgroundImage: "url(https://wallpaperaccess.com/full/8891903.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div className='shadow-xl shadow-[#EA4C24] text-center my-auto rounded-lg p-10' style={{ backdropFilter: 'blur(5px)', backgroundColor: 'rgba(23, 04, 23, 0.38)' }}>
                <h1 className='font-bold text-9xl text-[#EA4C24]'>404</h1>
                <h1 className='text-white p-1 px-3 font-semibold text-xl my-8'>Sorry, but the page you are looking for does not exist or is temporarily unavailable!</h1>
                <Link to="/" className="bg-[#EA4C24] hover:shadow-[#EA4C24] shadow-lg text-white font-semibold hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] cursor-pointer inline-block rounded py-2 px-5 text-sm">Go back to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;