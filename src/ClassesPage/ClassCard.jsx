import { faChalkboardTeacher, faChalkboardUser, faDoorOpen, faMoneyCheckDollar, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authenticate/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const ClassCard = ({ clasS }) => {
    const { user } = useContext(AuthContext);
    const { _id, className, classImage, instructorName, instructorEmail, availableSeats, price } = clasS;
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [])
    const filteredUser = allUsers.find(userr => userr.email === user?.email)

    const handleSelectClass = (id) => {
        if (!user) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
            return;
        }
    }
    return (
        <div className={`${availableSeats === 0 ? 'bg-red-300 shadow-md shadow-red-700' : 'bg-white shadow-xl rounded-b-md w-[320px]'}`}>
            <div className=' '>
                <img className='w-full h-[200px] object-cover shadow-xl' src={classImage} alt="" />
                <div className='p-5'>
                    <h1 className='font-semibold items-center gap-2 flex'> <FontAwesomeIcon icon={faMusic} style={{ color: "#EA4C24", }} />Class Name: <span className='text-[#EA4C24]'> {className}</span></h1>
                    <h1 className='font-semibold items-center gap-2 flex'> <FontAwesomeIcon icon={faChalkboardUser} style={{ color: "#EA4C24", }} />Instructor name: <span className='text-[#EA4C24]'> {instructorName}</span></h1>
                    <div className=''>
                        <h1 className='font-semibold items-center gap-2 flex'> <FontAwesomeIcon icon={faDoorOpen} style={{ color: "#EA4C24", }} />Available seats: <span className='text-[#EA4C24]'>{availableSeats}</span></h1>
                        <h1 className='flex font-semibold items-center gap-2'><FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: "#EA4C24" }} />Price: <span className='text-[#EA4C24]'>${price}</span></h1>
                    </div>
                </div>
                <button onClick={handleSelectClass} disabled={availableSeats === 0 || filteredUser?.role === "admin" ? true : ""} className='bg-[#ffffff] w-full items-center text-xl justify-center gap-2 flex text-[#EA4C24] disabled:text-[#e1d1cc] disabled:border-white disabled:cursor-default font-semibold hover:border-[#EA4C24] duration-300 border-2 border-white cursor-pointer rounded-b shadow py-2 px-5'>Select</button>
            </div>
        </div>
    );
};

export default ClassCard;