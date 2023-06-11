import { faBan, faChalkboardUser, faTrash, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserCard = ({ user, index, refetch }) => {
    const { name, email, _id, role } = user;

    const handleAdmin = (id, role) => {
        fetch(`https://tuneyo-server.vercel.app/users/${id}?role=${role}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Updated as ${role}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }

    const handleInstructor = (id, role) => {
        fetch(`https://tuneyo-server.vercel.app/users/${id}?role=${role}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Updated as ${role}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{index + 1}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{name}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">{email}</td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                {role === "user" &&
                    "Student"
                }
                {role === "instructor" &&
                    "Instructor"
                }
                {role === "admin" &&
                    "Admin"
                }
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 text-xl">
                <button onClick={() => handleInstructor(_id, "instructor")}
                    disabled={!role === "user" || role === "instructor" && true}
                    className="disabled:text-[#b6aab7] tooltip" data-tip="Make Instructor">
                    <FontAwesomeIcon className='cursor-pointer me-6 hover:scale-125 duration-200' icon={faChalkboardUser} />
                </button>
                <button onClick={() => handleAdmin(_id, "admin")}
                    disabled={!role === "user" || role === "admin" && true}
                    className="disabled:text-[#b6aab7] tooltip" data-tip="Make Admin">
                    <FontAwesomeIcon className='cursor-pointer hover:scale-125 duration-200' icon={faUserTie} />
                </button>
            </td>
        </tr>
    );
};

export default UserCard;