import { faEnvelope, faCirclePlay, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const UserInfoCard = ({ instructor }) => {
    const { _id, image, name, email, numClasses, classes } = instructor;
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div ref={ref}>
            <motion.div
                className='w-[350px] shadow-2xl p-5 rounded-md'
                variants={containerVariants}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
            >
                <img className='object-cover h-[200px] w-full rounded-b-md' src={image} alt="" />
                <h1 className='text-2xl font-semibold my-2 text-[#EA4C24]'>{name}</h1>
                <h1 className='font-semibold'>More Info:</h1>
                <p>
                    <span className='font-semibold'>
                        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#EA4C24" }} /> Email:
                    </span>{" "}
                    {email}
                </p>
                <p>
                    <span className='font-semibold'>
                        <FontAwesomeIcon icon={faCirclePlay} style={{ color: "#EA4C24" }} /> Total Classes:
                    </span>{" "}
                    {numClasses}
                </p>
                <p>
                    <span className='font-semibold'>
                        <FontAwesomeIcon icon={faHeadphonesSimple} style={{ color: "#EA4C24" }} /> Classes Name:
                    </span>{" "}
                    {classes.map((clas, index) => (
                        <span key={clas}>
                            {clas}
                            {index !== classes.length - 1 && ", "}
                        </span>
                    ))}
                </p>
            </motion.div>
        </div>
    );
};

export default UserInfoCard;
