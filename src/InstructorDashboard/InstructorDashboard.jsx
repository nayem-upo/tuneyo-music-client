import { faCircleChevronDown, faLandmark, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const InstructorDashboard = () => {
    return (
        <div className='pt-[66.5px]'>
            <label htmlFor="my-drawer-2" className="drawer h-8 rounded-lg cursor-pointer lg:hidden text-white font-semibold px-2"><FontAwesomeIcon className='text-5xl cursor-pointer' icon={faCircleChevronDown} rotation={270} style={{ color: "#EA4C24", }} /></label>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center ">
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 h-full bg-[#EA4C24] text-white font-semibold pt-[66.5px] md:pt-6">
                        <h1 className='text-center font-semibold text-xl'>Instructor Dashboard</h1>
                        <div className='p-[2px] w-[160px] mx-auto my-2 mb-5 bg-[#f1d1c9]'></div>
                        <div className='flex flex-col gap-3'>
                            <li><NavLink to='/instructordashboard/addclass'><FontAwesomeIcon icon={faSquarePlus} style={{ color: "#ffffff", }} />Add a Class</NavLink></li>
                            <li><NavLink to="/instructordashboard/enroled"><FontAwesomeIcon icon={faLandmark} style={{ color: "#ffffff", }} />My Classes</NavLink></li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InstructorDashboard;