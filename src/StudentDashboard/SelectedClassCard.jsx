import { faCartShopping, faCreditCard, faMoneyBill, faPrayingHands, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SelectedClassCard = ({ selectedClass, index, handleDelete }) => {
    const { _id, classImage, instructorName, className, price } = selectedClass;
    return (
        <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{index + 1}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3"><img className='w-10 h-10 object-cover rounded' src={classImage} alt="" /></td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{className}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{instructorName}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">${price}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 text-xl text-center">
                <FontAwesomeIcon className='cursor-pointer me-6 hover:scale-125 duration-200' title='Delete' onClick={() => handleDelete(_id)} icon={faTrash} />
                <FontAwesomeIcon className='cursor-pointer hover:scale-125 duration-200' title='Pay' icon={faCreditCard} />
            </td>
        </tr>
    );
};

export default SelectedClassCard;