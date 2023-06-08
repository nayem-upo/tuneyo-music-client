import { faClock, faCompactDisc, faDrum, faGuitar, faMicrophoneLines, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PopularClasses = () => {
    return (
        <div className='py-10'>
            <div className='text-center'>
                <h1 className='text-[#EA4C24] text-3xl font-semibold'>Our Class</h1>
                <h1 className='text-4xl font-semibold'>Our Popular Music Class</h1>
                <p className='my-3 font-semibold'>Unlock Your Child's Musical Potential with Our Popular Music Classes!</p>
            </div>

            <div className='grid grid-cols-3 gap-10 justify-items-center mx-10'>
                <div className='text-center w-[350px] shadow-xl py-7 px-10 rounded duration-300 hover:animate-pulse hover:scale-105'>
                    <FontAwesomeIcon className='text-[90px]' icon={faGuitar} style={{ color: "#ff570f", }} />
                    <h1 className='text-2xl font-bold pt-3'>Guitar</h1>
                    <p className='py-2'>Discover the Joy of Guitar with Our Fun and Engaging Lessons!</p>
                    <div className='my-2 bg-[#EA4C24] p-[1px]' />
                    <div className='flex justify-between'>
                        <span><FontAwesomeIcon icon={faClock} style={{ color: "#ff570f", }} /> 9 AM - 10 AM
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#ff570f", }} /> 305
                        </span>
                    </div>
                </div>
                <div className='text-center w-[350px] hover:shadow-xl py-7 px-10 rounded duration-300 hover:animate-pulse hover:scale-105'>
                    <FontAwesomeIcon className='text-[90px]' icon={faMicrophoneLines} style={{ color: "#ff570f", }} />
                    <h1 className='text-2xl font-bold pt-3'>Vocal</h1>
                    <p className='py-2'>Nurture Your Child's Musical Journey with Engaging and Inspiring Vocal Lessons!</p>
                    <div className='my-2 bg-[#EA4C24] p-[1px]' />
                    <div className='flex justify-between'>
                        <span><FontAwesomeIcon icon={faClock} style={{ color: "#ff570f", }} /> 9 AM - 10 AM
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#ff570f", }} /> 290
                        </span>
                    </div>
                </div>
                <div className='text-center w-[350px] hover:shadow-xl py-7 px-10 rounded duration-300 hover:animate-pulse hover:scale-105'>
                    <FontAwesomeIcon className='text-[90px]' icon={faDrum} style={{ color: "#ff570f", }} />
                    <h1 className='text-2xl font-bold pt-3'>Drum</h1>
                    <p className='py-2'>Drum Beats and Rhythms: Unleash Your Child's Inner Drummer with Our Engaging Drum Lessons!</p>
                    <div className='my-2 bg-[#EA4C24] p-[1px]' />
                    <div className='flex justify-between'>
                        <span><FontAwesomeIcon icon={faClock} style={{ color: "#ff570f", }} /> 10 AM - 11 AM
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#ff570f", }} /> 280
                        </span>
                    </div>
                </div>
                <div className='text-center w-[350px] hover:shadow-xl py-7 px-10 rounded duration-300 hover:animate-pulse hover:scale-105'>
                    <svg
                        className='mx-auto'
                        height="100px"
                        width="100px"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        fill="#ff570f"
                        stroke="#ff570f"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <style
                                type="text/css"
                                dangerouslySetInnerHTML={{ __html: " .st0{fill:#ff570f;} " }}
                            />{" "}
                            <g>
                                {" "}
                                <path
                                    className="st0"
                                    d="M502.176,124.264l-179.85-28.626c-6.358-1.01-12.328,3.319-13.342,9.678 c-1.011,6.358,3.323,12.327,9.68,13.337l179.851,28.618c6.354,1.011,12.327-3.319,13.338-9.668 C512.864,131.244,508.531,125.274,502.176,124.264z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M261.53,130.092c1.111,2.643,4.155,3.872,6.785,2.76l4.772-2.013c2.635-1.112,3.868-4.151,2.756-6.786 l-11.087-26.239c-1.112-2.635-4.151-3.871-6.786-2.759l-4.772,2.021c-2.635,1.111-3.867,4.15-2.756,6.785L261.53,130.092z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M273.122,157.53l11.084,26.24c1.116,2.627,4.151,3.87,6.786,2.752l4.772-2.014 c2.634-1.111,3.866-4.15,2.756-6.785l-11.088-26.24c-1.112-2.634-4.151-3.87-6.785-2.752l-4.773,2.014 C273.243,151.856,272.007,154.894,273.122,157.53z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M295.795,211.199l11.087,26.239c1.116,2.635,4.151,3.871,6.786,2.759l4.772-2.021 c2.634-1.119,3.866-4.15,2.756-6.785l-11.088-26.24c-1.111-2.635-4.15-3.864-6.785-2.76l-4.772,2.021 C295.915,205.517,294.683,208.564,295.795,211.199z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M24.447,89.241c-7.594,1.858-13.24,1.368-13.24,1.368c-3.346,0.342-6.408,2.021-8.499,4.648 c-2.091,2.642-3.032,6-2.608,9.327l0.61,4.834c0.851,6.723,6.902,11.534,13.637,10.85c0,0,3.96,0.49,13-1.314 c8.624-1.718,17.756-4.469,27.11-8.659l0.35-0.163l-7.688-30.025C40.283,84.01,32.934,87.174,24.447,89.241z"
                                />{" "}
                                <path
                                    className="st0"
                                    d="M491.571,161.858L320.281,134.6c11.527,18.778,10.307,36.936,11.236,53.584 c1.842,33.033,6.513,55.34,20.286,93.798c7.061,19.711,17.888,43.06,31.331,88.093c2.398,8.036-1.652,16.579-9.622,19.237 c-7.967,2.658-16.587-1.648-19.241-9.615c0,0-103.533-246.247-133.745-313.634c-19.097-42.593-70.756-61.62-130.3-18.001 c-12.289,8.993-22.389,18.055-33.068,25.586l8.04,31.394c34.798-18.429,50.486-40.682,77.154-36.748 c23.512,3.466,23.492,21.499,35.252,55.814c11.768,34.315,87.428,253.21,99.849,292.136c18.51,55.511,78.529,85.512,134.048,66.998 c55.515-18.514,83.698-74.585,67.002-134.044c0,0-13.501-46.821-21.456-78.439c-5.382-21.383-2.958-50.078,2.402-66.089 C468.495,177.629,491.571,161.858,491.571,161.858z"
                                />{" "}
                            </g>{" "}
                        </g>
                    </svg>

                    <h1 className='text-2xl font-bold pt-3'>Saxophone</h1>
                    <p className='py-2'>Experience the Soulful Sound of Saxophone with Our Expert-Led Lessons!</p>
                    <div className='my-2 bg-[#EA4C24] p-[1px]' />
                    <div className='flex justify-between'>
                        <span><FontAwesomeIcon icon={faClock} style={{ color: "#ff570f", }} /> 12 AM - 1 PM
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#ff570f", }} /> 250
                        </span>
                    </div>
                </div>
                <div className='text-center w-[350px] hover:shadow-xl py-7 px-10 rounded duration-300 hover:animate-pulse hover:scale-105'>
                    <svg
                        fill="#ff570f"
                        height="100px"
                        width="100x"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 502 502"
                        xmlSpace="preserve"
                        stroke="#ff570f"
                        strokeWidth="8.032"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g>
                                {" "}
                                <g>
                                    {" "}
                                    <g>
                                        {" "}
                                        <path d="M492,128.25H10c-5.522,0-10,4.477-10,10v225.5c0,5.523,4.478,10,10,10h39h404h39c5.522,0,10-4.477,10-10v-225.5 C502,132.727,497.522,128.25,492,128.25z M443,353.75H59v-75.5h20v41c0,5.523,4.478,10,10,10c5.522,0,10-4.477,10-10v-41h20.375 v41c0,5.523,4.478,10,10,10c5.522,0,10-4.477,10-10v-41h60.75v41c0,5.523,4.478,10,10,10c5.522,0,10-4.477,10-10v-41H240.5v41 c0,5.523,4.478,10,10,10c5.522,0,10-4.477,10-10v-41h60.75v41c0,5.523,4.478,10,10,10c5.522,0,10-4.477,10-10v-41h20.375v41 c0,5.523,4.478,10,10,10c5.522,0,10-4.477,10-10v-41H402v41c0,5.523,4.478,10,10,10c5.522,0,10-4.477,10-10v-41h21V353.75z M482,353.75h-19v-85.5c0-5.523-4.478-10-10-10H49c-5.522,0-10,4.477-10,10v85.5H20v-205.5h462V353.75z" />{" "}
                                        <path d="M84,249.25c24.813,0,45-20.187,45-45s-20.187-45-45-45s-45,20.187-45,45S59.187,249.25,84,249.25z M84,179.25 c13.785,0,25,11.215,25,25c0,13.785-11.215,25-25,25c-13.785,0-25-11.215-25-25C59,190.465,70.215,179.25,84,179.25z" />{" "}
                                        <path d="M420,249.25c24.813,0,45-20.187,45-45s-20.187-45-45-45s-45,20.187-45,45S395.187,249.25,420,249.25z M420,179.25 c13.785,0,25,11.215,25,25c0,13.785-11.215,25-25,25c-13.785,0-25-11.215-25-25C395,190.465,406.215,179.25,420,179.25z" />{" "}
                                        <path d="M166,180.25h126c5.522,0,10-4.477,10-10s-4.478-10-10-10H166c-5.522,0-10,4.477-10,10S160.478,180.25,166,180.25z" />{" "}
                                        <path d="M333,180.25h7c5.522,0,10-4.477,10-10s-4.478-10-10-10h-7c-5.522,0-10,4.477-10,10S327.478,180.25,333,180.25z" />{" "}
                                    </g>{" "}
                                </g>{" "}
                            </g>{" "}
                        </g>
                    </svg>
                    <h1 className='text-2xl font-bold pt-3'>Piano</h1>
                    <p className='py-2'>Discover the Joy of Melodies with our Engaging and Inspiring Piano Lessons!</p>
                    <div className='my-2 bg-[#EA4C24] p-[1px]' />
                    <div className='flex justify-between'>
                        <span><FontAwesomeIcon icon={faClock} style={{ color: "#ff570f", }} /> 3 PM - 4 PM
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#ff570f", }} /> 200
                        </span>
                    </div>
                </div>
                <div className='text-center w-[350px] hover:shadow-xl py-7 px-10 rounded duration-300 hover:animate-pulse hover:scale-105'>
                    <svg
                        className='mx-auto'
                        width="70px"
                        height="100px"
                        viewBox="0 0 64 64"
                        id="Layer_1"
                        version="1.1"
                        xmlSpace="preserve"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            {" "}
                            <g id="Body_20_">
                                {" "}
                                <g>
                                    {" "}
                                    <path
                                        d="M36,0H4C1.791,0,0,1.79,0,4v55.999C0,62.209,1.791,64,4,64h32 h4v-4.001V4V0H36z"
                                        style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#ff570f" }}
                                    />{" "}
                                </g>{" "}
                            </g>{" "}
                            <g id="Shape_33_">
                                {" "}
                                <g>
                                    {" "}
                                    <circle cx={20} cy={40} r={16} style={{ fill: "#CCCCCC" }} />{" "}
                                </g>{" "}
                            </g>{" "}
                            <g id="Shape_34_">
                                {" "}
                                <g>
                                    {" "}
                                    <circle cx={20} cy="39.999" r={10} style={{ fill: "#FFFBF2" }} />{" "}
                                </g>{" "}
                            </g>{" "}
                            <g id="Hole_2_">
                                {" "}
                                <g>
                                    {" "}
                                    <circle cx={20} cy={40} r={2} style={{ fill: "#ff570f" }} />{" "}
                                </g>{" "}
                            </g>{" "}
                            <g id="Body_21_">
                                {" "}
                                <g>
                                    {" "}
                                    <path
                                        d="M60,0H48h-4h-4v4v55.999V64h4h4h12c2.209,0,4-1.791,4-4.001V4 C64,1.79,62.209,0,60,0z"
                                        style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#CCCCCC" }}
                                    />{" "}
                                </g>{" "}
                            </g>{" "}
                            <g id="Slides">
                                {" "}
                                <g>
                                    {" "}
                                    <path
                                        d="M58,52H46c-1.104,0-2,0.896-2,2s0.896,2,2,2h12 c1.104,0,2-0.896,2-2S59.104,52,58,52z M46,44h12c1.104,0,2-0.896,2-2s-0.896-2-2-2H46c-1.104,0-2,0.896-2,2S44.896,44,46,44z"
                                        style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#999999" }}
                                    />{" "}
                                </g>{" "}
                            </g>{" "}
                            <g id="Controllers">
                                {" "}
                                <g>
                                    {" "}
                                    <path
                                        d="M52,40c0-1.104-0.896-2-2-2s-2,0.896-2,2v4 c0,1.104,0.896,2,2,2s2-0.896,2-2V40z M54,50c-1.104,0-2,0.896-2,2v4c0,1.104,0.896,2,2,2s2-0.896,2-2v-4 C56,50.896,55.104,50,54,50z"
                                        style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#808080" }}
                                    />{" "}
                                </g>{" "}
                            </g>{" "}
                            <g id="Btns_11_">
                                {" "}
                                <g>
                                    {" "}
                                    <path
                                        d="M10,6C8.896,6,8,6.896,8,7.999C8,9.104,8.896,10,10,10 s2-0.896,2-2.001C12,6.896,11.104,6,10,6z M18,6c-1.104,0-2,0.896-2,1.999C16,9.104,16.896,10,18,10s2-0.896,2-2.001 C20,6.896,19.104,6,18,6z M18,14c-1.104,0-2,0.895-2,2c0,1.104,0.896,2,2,2s2-0.896,2-2C20,14.895,19.104,14,18,14z M10,14 c-1.104,0-2,0.895-2,2c0,1.104,0.896,2,2,2s2-0.896,2-2C12,14.895,11.104,14,10,14z M28,7.999c-2.209,0-4,1.791-4,4.001 c0,2.209,1.791,4,4,4s4-1.791,4-4C32,9.79,30.209,7.999,28,7.999z M56,10c1.104,0,2-0.896,2-2.001C58,6.896,57.104,6,56,6 s-2,0.896-2,1.999C54,9.104,54.896,10,56,10z M48,6c-1.104,0-2,0.896-2,1.999C46,9.104,46.896,10,48,10s2-0.896,2-2.001 C50,6.896,49.104,6,48,6z M57.118,14.341C56.799,14.126,56.414,14,56,14s-0.799,0.126-1.118,0.341C54.35,14.7,54,15.309,54,15.999 v0v0c0,0.966,0.686,1.773,1.597,1.959C55.727,17.986,55.862,18,56,18s0.273-0.014,0.403-0.041C57.314,17.773,58,16.966,58,16v0v0 C58,15.309,57.65,14.7,57.118,14.341z M56,21.999c-1.104,0-2,0.896-2,2.001c0,1.104,0.896,2,2,2s2-0.896,2-2 C58,22.895,57.104,21.999,56,21.999z M48,21.999c-1.104,0-2,0.896-2,2.001c0,1.104,0.896,2,2,2s2-0.896,2-2 C50,22.895,49.104,21.999,48,21.999z M49.118,14.341C48.799,14.126,48.414,14,48,14s-0.799,0.126-1.118,0.341 C46.35,14.7,46,15.309,46,15.999v0v0c0,0.966,0.686,1.773,1.597,1.959C47.727,17.986,47.862,18,48,18s0.273-0.014,0.403-0.041 C49.314,17.773,50,16.966,50,16v0v0C50,15.309,49.65,14.7,49.118,14.341z"
                                        style={{ fillRule: "evenodd", clipRule: "evenodd", fill: "#999999" }}
                                    />{" "}
                                </g>{" "}
                            </g>{" "}
                            <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g /> <g />{" "}
                            <g /> <g /> <g />{" "}
                        </g>
                    </svg>

                    <h1 className='text-2xl font-bold pt-3'>Guitar</h1>
                    <p className='py-2'>Discover the Joy of Guitar with Our Fun and Engaging <br /> Lessons!</p>
                    <div className='my-2 bg-[#EA4C24] p-[1px]' />
                    <div className='flex justify-between'>
                        <span><FontAwesomeIcon icon={faClock} style={{ color: "#ff570f", }} /> 9 AM - 10AM
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faUser} style={{ color: "#ff570f", }} /> 196
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;