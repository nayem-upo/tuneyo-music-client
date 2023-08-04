import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Authenticate/AuthProvider';
import CheckOut from '../StudentDashboard/CheckOut';

const Header = () => {
    const { user, userLogOut, filteredUser, toggleTheme, theme } = useContext(AuthContext);
    const photoURL = user?.photoURL
    return (
        <div className='px-5 absolute bg-[#0000002b] max-w-7xl mx-auto right-0 left-0 z-50'>
            <div className="md:navbar md:justify-between md:max-w-7xl md:mx-auto">
                {/* drop navbar */}
                <div className="navbar-center flex justify-between items-center gap-[5%]">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#EA4C24]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                            <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/contact">Contact</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/about">About</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/instructors">Instructors</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/classes">Classes</NavLink></li>
                            {filteredUser?.role === "user" &&

                                <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/studentdashboard/selected">Dashboard</NavLink></li>
                            }
                            {filteredUser?.role === "instructor" &&
                                <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/instructordashboard/addclass">Dashboard</NavLink></li>
                            }
                            {filteredUser?.role === "admin" &&
                                <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/admindashboard/manageclasses">Dashboard</NavLink></li>
                            }
                        </ul>
                    </div>
                    <NavLink className="flex gap-3 items-center">
                        <img className='w-10' src="https://i.ibb.co/TRD582L/music-logo-m-logo-png-1.png" alt="" />
                        <h1 className='font-bold md:block hidden text-[#EA4C24] text-3xl'>TuneYo</h1>
                    </NavLink>
                    <span className='cursor-pointer md:hidden text-[#EA4C24] font-bold via-[#EA4C24]via-30% to-[#EA4C24] to-90%'>
                        <input
                            onClick={toggleTheme}
                            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none
                                 before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute
                                after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 
                                after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] 
                                checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full 
                                outline focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)]
                                checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem]
                                "
                            type="checkbox"
                            checked={theme}
                            role="switch"
                            id="flexSwitchCheckDefault"
                        />
                    </span>
                    {
                        !user &&
                        <Link className='bg-[#EA4C24] md:hidden hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] py-1 px-2 rounded-lg text-white font-semibold' to="/login">Login</Link>
                    }
                    {
                        user &&
                        <div className="dropdown dropdown-end md:hidden">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        photoURL ? <img className='rounded-full' src={photoURL} /> : <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g id="User / User_Circle"> <path id="Vector" d="M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g> </g></svg>
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-white text-black rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {user?.displayName}
                                        <span className="badge">
                                            {filteredUser?.role === "user" &&
                                                "Student"
                                            }
                                            {filteredUser?.role === "instructor" &&
                                                "Instructor"
                                            }
                                            {filteredUser?.role === "admin" &&
                                                "Admin"
                                            }
                                        </span>
                                    </a>
                                </li>
                                {filteredUser?.role === "user" &&
                                    <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"}>Logged as Student</NavLink></li>
                                }
                                {filteredUser?.role === "instructor" &&
                                    <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"}>Logged as Instructor</NavLink></li>
                                }
                                {filteredUser?.role === "admin" &&
                                    <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"}>Logged as Admin</NavLink></li>
                                }
                                <li onClick={userLogOut}><a>Logout</a></li>
                            </ul>
                        </div>
                    }
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10 items-center text-lg text-white bg-blend-multiply">
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/contact">Contact</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/about">About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/instructors">Instructors</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/classes">Classes</NavLink></li>
                        {/* changing theme statey */}
                        <span className='cursor-pointer text-[#EA4C24] font-bold via-[#EA4C24]via-30% to-[#EA4C24] to-90%'>
                            <input
                                onClick={toggleTheme}
                                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none
                                 before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute
                                after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 
                                after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] 
                                checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full 
                                outline focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)]
                                checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem]
                                "
                                type="checkbox"
                                checked={theme}
                                role="switch"
                                id="flexSwitchCheckDefault"
                            />
                        </span>
                        {filteredUser?.role === "user" &&

                            <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/studentdashboard/selected">Dashboard</NavLink></li>
                        }
                        {filteredUser?.role === "instructor" &&
                            <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/instructordashboard/addclass">Dashboard</NavLink></li>
                        }
                        {filteredUser?.role === "admin" &&
                            <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/admindashboard/manageclasses">Dashboard</NavLink></li>
                        }
                        {
                            user &&
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            photoURL ? <img className='rounded-full' src={photoURL} /> : <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g id="User / User_Circle"> <path id="Vector" d="M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g> </g></svg>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-white text-black rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName}
                                            <span className="badge">
                                                {filteredUser?.role === "user" &&
                                                    "Student"
                                                }
                                                {filteredUser?.role === "instructor" &&
                                                    "Instructor"
                                                }
                                                {filteredUser?.role === "admin" &&
                                                    "Admin"
                                                }
                                            </span>
                                        </a>
                                    </li>
                                    {filteredUser?.role === "user" &&
                                        <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"}>Logged as Student</NavLink></li>
                                    }
                                    {filteredUser?.role === "instructor" &&
                                        <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"}>Logged as Instructor</NavLink></li>
                                    }
                                    {filteredUser?.role === "admin" &&
                                        <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"}>Logged as Admin</NavLink></li>
                                    }
                                    <li onClick={userLogOut}><a>Logout</a></li>
                                </ul>
                            </div>
                        }
                        {
                            !user &&
                            <Link className='bg-[#EA4C24] hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] py-1 px-6 rounded-lg text-white font-semibold' to="/login">Login</Link>
                        }
                    </ul>
                </div>
            </div>
            {
                user && !filteredUser?.role &&
                <p className='font-semibold text-center text-red-600'>Please reload until the dashboard is visible in the navigation bar!</p>
            }
        </div>
    );
};

export default Header;