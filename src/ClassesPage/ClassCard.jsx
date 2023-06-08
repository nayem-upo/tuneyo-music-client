import React from 'react';

const ClassCard = ({ clasS }) => {
    const { _id, className, classImage, instructorName, instructorEmail, availableSeats, price } = clasS;
    return (
        <div className='bg-white shadow-md'>
            <img className='w-[300px] h-[200px] object-cover shadow-2xl' src={classImage} alt="" />
            <div className='p-5'>
                <h1>Class Name: {className}</h1>
                <h1>Instructor name: {instructorName}</h1>
                <div>
                    <h1>Available seats: {availableSeats}</h1>
                    <h1>Price: {price}</h1>
                </div>
            </div>
            <button>Select</button>
        </div>
    );
};

export default ClassCard;