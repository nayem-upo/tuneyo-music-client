import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const EnrolledClassesCard = ({ selectedClass, index, handleDelete }) => {
    const { _id, classImage, instructorName, className, price } = selectedClass;
    return (
        <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{index + 1}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"><img className='w-10 h-10 object-cover rounded' src={classImage} alt="" /></td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{className}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{instructorName}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">${price}</td>
        </tr>
    );
};

export default EnrolledClassesCard;