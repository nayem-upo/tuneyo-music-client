import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleLogin = data => {
        console.log(data);
    };


    return (
        <div className='flex justify-center my-20'>
            <img src="" alt="" />
            <form className='flex gap-3 flex-col' onSubmit={handleSubmit(handleLogin)}>
                <input className='bg-[#F3F4F6] h-10 mx-auto w-[340px] ps-3 outline-none' placeholder='Email' {...register("email", { required: true })} />
                {errors.email && <span className='text-red-600'>This field is required</span>}
                <input className='bg-[#F3F4F6] h-10 mx-auto w-[340px] ps-3 outline-none' placeholder='Password' {...register("password", { required: true })} />
                {errors.password && <span className='text-red-600'>This field is required</span>}
                <button className="bg-[#EA4C24] text-white font-semibold hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] cursor-pointer inline-block rounded shadow py-2 px-5 text-sm">
                    Login
                </button>
                <p className='flex justify-between'>Haven't any account? Please<span> <Link className='hover:text-[#EA4C24] font-semibold text-sm' to="register">Sign Up</Link></span></p>
                <div className="divider mb-0">OR</div>
                <div>
                    <p className='text-center text-[#EA4C24] font-semibold'>Login With</p>
                </div>
            </form>
        </div>
    );
};

export default Login;