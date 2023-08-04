import { faChalkboardTeacher, faChalkboardUser, faDoorOpen, faMoneyCheckDollar, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Authenticate/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const ClassCard = ({ clasS, theme }) => {
    const { user } = useContext(AuthContext);
    const { _id, className, classImage, instructorName, instructorEmail, availableSeats, price } = clasS;
    const [allUsers, setAllUsers] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://tuneyo-server.vercel.app/users')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [])
    const filteredUser = allUsers.find(userr => userr.email === user?.email)


    const handleSelectClass = (id) => {
        if (!user) {
            Swal.fire({
                title: 'Please login before you select a class!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
            return;
        }
        const selectedClass = {
            className,
            classImage,
            instructorEmail,
            instructorName,
            availableSeats,
            price,
            studentEmail: user.email,
            type: "selected"
        }

        fetch('https://tuneyo-server.vercel.app/selectedclasses', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ selectedClass, email: user?.email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: 'Class allready selected',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    return;
                }
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class selected successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const cardTop = document.getElementById(`card-${_id}`)?.offsetTop || 0;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const cardHeight = document.getElementById(`card-${_id}`)?.offsetHeight || 0;

        if (scrollTop + windowHeight >= cardTop + cardHeight / 2) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`${theme ? "dark" : ""}`}>
            <div className={`${availableSeats < 1 ? 'bg-red-300 shadow-md shadow-red-700' : 'bg-white shadow-xl rounded-b-md w-[320px]'}`}>
                <div>
                    <motion.div
                        id={`card-${_id}`}
                        initial={{ opacity: 1, y: 50 }}
                        animate={isScrolled ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className={`${availableSeats < 1 ? 'bg-red-300 shadow-md shadow-red-700' : 'bg-white dark:shadow-[#ffffff23] shadow-xl rounded-b-md w-[320px]'}`}
                    >
                        <div className='dark:bg-[#333333] dark:text-white'>
                            <img className='w-full h-[200px] object-cover shadow-xl' src={classImage} alt="" />
                            <div className='p-5'>
                                <h1 className='font-semibold items-center gap-2 flex'>
                                    <FontAwesomeIcon icon={faMusic} style={{ color: "#EA4C24" }} />
                                    Class Name: <span className='text-[#EA4C24]'> {className}</span>
                                </h1>
                                <h1 className='font-semibold items-center gap-2 flex'>
                                    <FontAwesomeIcon icon={faChalkboardUser} style={{ color: "#EA4C24" }} />
                                    Instructor name: <span className='text-[#EA4C24]'> {instructorName}</span>
                                </h1>
                                <div>
                                    <h1 className='font-semibold items-center gap-2 flex'>
                                        <FontAwesomeIcon icon={faDoorOpen} style={{ color: "#EA4C24" }} />
                                        Available seats: <span className='text-[#EA4C24]'>{availableSeats}</span>
                                    </h1>
                                    <h1 className='flex font-semibold items-center gap-2'>
                                        <FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: "#EA4C24" }} />
                                        Price: <span className='text-[#EA4C24]'>${price}</span>
                                    </h1>
                                </div>
                            </div>
                            <button
                                onClick={handleSelectClass}
                                disabled={availableSeats < 1 || filteredUser?.role === "admin" || filteredUser?.role === "instructor"}
                                className='bg-[#ffffff] w-full items-center dark:bg-[#333333] dark:text-white text-xl justify-center gap-2 flex text-[#EA4C24] disabled:text-[#e1d1cc] dark:disabled:border-none dark:disabled:text-[#484747] disabled:border-white disabled:cursor-default font-semibold hover:border-[#EA4C24] duration-300 border-2 border-white cursor-pointer rounded-b shadow py-2 px-5'
                            >
                                Select
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;