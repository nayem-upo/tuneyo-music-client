import { faClock, faDollar, faGuitar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PopularClassCard = ({ data }) => {
    const { className, classImage, price, instructorName, enrolled } = data;
    return (
        <div className='text-center w-[90%] md:w-[350px] hover:shadow-[#ff854c53] shadow-xl py-7 px-10 rounded duration-300 hover:scale-105 bg-white'>
            <img className='h-[180px] object-cover w-full rounded-md' src={classImage} alt="" />
            <h1 className='text-2xl font-bold pt-3'>{className}</h1>
            <p className='py-2'>Instructor: {instructorName}</p>
            <div className='my-2 bg-[#EA4C24] h-[1px]' />
            <div className='flex justify-between'>
                <span className='text-[#ff570f] font-bold'>
                    <FontAwesomeIcon icon={faDollar} /> {price}
                </span>
                <span className='text-[#ff570f] font-bold'>
                    <FontAwesomeIcon icon={faUser} /> {enrolled}
                </span>
            </div>
        </div>
    );
};

export default PopularClassCard;