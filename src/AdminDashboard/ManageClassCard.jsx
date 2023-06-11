import { faBan, faCircleCheck, faCommentMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const ManageClassCard = ({ clasS, index, refetch }) => {
    const { _id, classImage, instructorName, className, price, availableSeats, instructorEmail, status } = clasS;
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleApprove = async (id) => {
        const updatedClass = {
            className,
            classImage,
            availableSeats: parseInt(availableSeats),
            price,
            status: "approved",
            feedback: "No Feedback"
        };
        fetch(`https://tuneyo-server.vercel.app/classes/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedClass)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class approved',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    });
                }
            });
    };

    const handleDeny = async (id) => {
        const updatedClass = {
            className,
            classImage,
            availableSeats: parseInt(availableSeats),
            price,
            status: "denied",
            feedback: "No Feedback"
        };
        fetch(`https://tuneyo-server.vercel.app/classes/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedClass)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Denied',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    });
                }
            });
    };

    const postFeedback = async (data, id) => {
        const { feedback } = data;
        const updatedClass = {
            className,
            classImage,
            availableSeats: parseInt(availableSeats),
            price,
            status: status,
            feedback: feedback
        };

        fetch(`https://tuneyo-server.vercel.app/classes/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedClass)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Feedback Sent',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    });
                }
            });
    };

    return (
        <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{index + 1}</td>
            <td className="border-t-2 border-b-2 text-xs border-gray-200 px-4 py-3"><img className='w-10 h-10 object-cover rounded' src={classImage} alt="" /></td>
            <td className="border-t-2 border-b-2 text-xs border-gray-200 px-4 py-3">{className}</td>
            <td className="border-t-2 border-b-2 text-xs border-gray-200 px-4 py-3">{instructorName}</td>
            <td className="border-t-2 border-b-2 text-xs border-gray-200 px-4 py-3">{instructorEmail}</td>
            <td className="border-t-2 border-b-2 text-xs border-gray-200 px-4 py-3">{availableSeats}</td>
            <td className="border-t-2 border-b-2 text-xs border-gray-200 px-4 py-3">${price}</td>
            <td className="border-t-2 border-b-2 text-xs border-gray-200 px-4 py-3">
                {status === "pending" && <span className='text-yellow-500'>Pending</span>}
                {status === "denied" && <span className='text-red-600'>Denied</span>}
                {status === "approved" && <span className='text-green-500'>Approved</span>}
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 text-xl text-center">
                <button
                    onClick={() => handleApprove(_id)}
                    disabled={status === "denied" || (status === "approved" && true)}
                    className="disabled:text-[#b6aab7]"
                >
                    <FontAwesomeIcon
                        className="cursor-pointer me-4 hover:scale-125 duration-200"
                        title="Approve"
                        icon={faCircleCheck}
                    />
                </button>
                <button
                    onClick={() => handleDeny(_id)}
                    disabled={status === "denied" || (status === "approved" && true)}
                    className="disabled:text-[#b6aab7]"
                >
                    <FontAwesomeIcon
                        className="cursor-pointer me-4 hover:scale-125 duration-200"
                        title="Deny"
                        icon={faBan}
                    />
                </button>
                <label htmlFor={`feedback_modal_${_id}`}>
                    <FontAwesomeIcon
                        className="cursor-pointer me-4 hover:scale-125 duration-200"
                        title="Feedback"
                        icon={faCommentMedical}
                    />
                </label>

                {/* Feedback Modal */}
                <input type="checkbox" id={`feedback_modal_${_id}`} className="modal-toggle" />
                <div className="modal">
                    <form onSubmit={handleSubmit((data) => postFeedback(data, _id))} className="modal-box">
                        <h3 className="font-bold text-lg">Send Feedback!</h3>
                        <input className='bg-[#fcdfcf] outline-none p-2 my-3 w-full rounded-md' {...register("feedback", { required: true })} />
                        {errors.feedback && <span className='text-red-600'>Feedback field is required</span>}
                        <div className="modal-action">
                            <input htmlFor={`feedback_modal_${_id}`} type="submit" value="Send" className="bg-[#EA4C24] text-white font-semibold hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] cursor-pointer inline-block rounded shadow py-1 px-2" />
                        </div>
                    </form>
                    <label className="modal-backdrop" htmlFor={`feedback_modal_${_id}`}>Close</label>
                </div>
            </td>
        </tr>
    );
};

export default ManageClassCard;
