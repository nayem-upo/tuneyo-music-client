import { faCirclePlay, faEnvelope, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InstructorCard = ({ instructor }) => {
    const { _id, image, name, email, numClasses, classes } = instructor;

    return (
        <div className='w-[350px] shadow-2xl p-5 rounded-md'>
            <img className='object-cover h-[200px] w-full rounded-b-md' src={image} alt="" />
            <h1 className='text-2xl font-semibold my-2 text-[#EA4C24]'>{name}</h1>
            <h1 className='font-semibold'>More Info:</h1>
            <p><span className='font-semibold'><FontAwesomeIcon icon={faEnvelope} style={{color: "#EA4C24",}} /> Email:</span> {email}</p>
            <p><span className='font-semibold'><FontAwesomeIcon icon={faCirclePlay} style={{color: "#EA4C24",}} /> Total Classes:</span> {numClasses}</p>
            <p><span className='font-semibold'><FontAwesomeIcon icon={faHeadphonesSimple} style={{color: "#EA4C24",}} /> Classes Name: {classes.map(clas=> <span key={clas}>{clas}, </span> )}</span> </p>
        </div>
    );
};

export default InstructorCard;