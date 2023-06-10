import { faCreditCard, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const InstructorClassCard = ({ addedclasse, index }) => {
    const { _id, className, classImage, status, enrolled, feedback } = addedclasse;

    return (
        <tr className='h-[100px]'>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{index + 1}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"><img className='w-10 h-10 object-cover rounded' src={classImage} alt="" /></td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{className}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{enrolled}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 border-2 text-xs">{feedback}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                {status === "pending" &&
                    <span className='text-yellow-500'>Pending</span>
                }
                {status === "denied" &&
                    <span className='text-red-600'>Denied</span>
                }
                {status === "approved" &&
                    <span className='text-green-500'>Approved</span>
                }
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 text-xl text-center">
                <Link to={`/instructordashboard/update/${_id}`}><FontAwesomeIcon icon={faPenToSquare} className='cursor-pointer hover:scale-125 duration-200' title='Update' /></Link>
            </td>
        </tr>
    );
};

export default InstructorClassCard;