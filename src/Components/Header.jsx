import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Authenticate/AuthProvider';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const photoURL = user?.photoURL
    return (
        <div className='px-5 absolute bg-[#0000002b] right-0 left-0 z-50'>
            <div className="navbar justify-between max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <NavLink className="flex gap-3 items-center">
                        <img className='w-10' src="https://i.ibb.co/TRD582L/music-logo-m-logo-png-1.png" alt="" />
                        <h1 className='font-bold text-[#EA4C24] text-3xl'>TuneYo</h1>
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10 items-center text-lg text-white bg-blend-multiply">
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/instructors">Instructors</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/classes">Classes</NavLink></li>
                        {user && <li><NavLink className={({ isActive }) => isActive ? "text-[#EA4C24] font-semibold" : "hover:text-[#EA4C24] duration-300 font-semibold"} to="/dashboard">Dashboard</NavLink></li>}
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
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 text-black rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName}
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
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
        </div>
    );
};

export default Header;