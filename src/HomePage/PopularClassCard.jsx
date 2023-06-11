import { faClock, faDollar, faGuitar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PopularClassCard = ({ data }) => {
    const { className, classImage, price, instructorName, enrolled } = data;
    return (
        <div className='text-center w-[90%] md:w-[350px] hover:dark:shadow-[#654a45] shadow-xl py-7 px-10 rounded duration-300 hover:animate-pulse hover:scale-105'>
            <img className='h-[180px] object-cover w-full' src={classImage} alt="" />
            <h1 className='text-2xl font-bold pt-3'>{className}</h1>
            <p className='py-2'>Instructor: {instructorName}</p>
            <div className='my-2 bg-[#EA4C24] p-[1px]' />
            <div className='flex justify-between'>
                <span><FontAwesomeIcon icon={faDollar} style={{ color: "#ff570f", }} /> {price}
                </span>
                <span>
                    <FontAwesomeIcon icon={faUser} style={{ color: "#ff570f", }} /> {enrolled}
                </span>
            </div>
        </div>
    );
};

export default PopularClassCard;