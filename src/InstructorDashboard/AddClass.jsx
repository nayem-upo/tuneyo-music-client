import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authenticate/AuthProvider';

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleAddCard = (data) => {
        const { _id, className, classImage, instructorName, instructorEmail, availableSeats, price } = data;


        const newClass = {
            className,
            classImage,
            instructorName: user.displayName,
            instructorEmail: user.email,
            availableSeats: parseInt(availableSeats),
            price,
            status: "pending",
            enrolled: 0,
            feedback: "No Feedback"
        }
        fetch('https://tuneyo-server.vercel.app/classes', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class added successfully',
                        icon: 'success',
                        confirmButtonText: 'Closs'
                    })
                }
            })
    }

    return (
        <div>
            <div>
                <div className='text-center my-10'>
                    <h1 className='font-semibold text-4xl'>ADD A NEW CLASSES</h1>
                    <div className='p-[2px] w-[450px] mx-auto mt-2 bg-[#EA4C24]'></div>
                </div>
                <div className=' rounded-lg mb-10 mx-auto text-center bg-[#9b29b215] md:p-10 py-5 border-4 border-[#EA4C24]'>
                    <h1 className="py-2 font-semibold text-[#EA4C24]">Fill the form below to add a new class</h1>
                    <form onSubmit={handleSubmit(handleAddCard)} className="w-[650px] mx-auto">
                        <div className="relative mb-4 text-left">
                            <label htmlFor="name" className="text-lg leading-7 font-semibold text-gray-600">Class name</label>
                            <input className='bg-[#ffffff] w-full h-10 mx-auto ps-3 outline-none' placeholder='Class name ( Please do not use here Tab key! )' {...register("className", { required: true })} />
                            {errors.className && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="relative mb-4 text-left flex justify-between gap-4">
                            <div className="w-full">
                                <label htmlFor="image" className="text-lg leading-7 font-semibold text-gray-600">Class Image</label>
                                <input className='bg-[#ffffff] w-full h-10 mx-auto ps-3 outline-none' placeholder='Class Image URL' {...register("classImage", { required: true })} />
                                {errors.classImage && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>
                        <div className="relative mb-4 text-left flex justify-between gap-4">
                            <div className="w-full">
                                <label htmlFor="seller" className="text-lg leading-7 font-semibold text-gray-600">Instructor name</label>
                                <input defaultValue={user?.displayName} disabled className='bg-[#ffffff] w-full h-10 mx-auto ps-3 outline-none' placeholder='Instructor name' {...register("instructorName")} />
                                {errors.instructorName && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="w-full">
                                <label htmlFor="email" className="text-lg leading-7 font-semibold text-gray-600">Instructor email</label>
                                <input defaultValue={user?.email} disabled className='bg-[#ffffff] w-full h-10 mx-auto ps-3 outline-none' placeholder='Instructor email' {...register("instructorEmail")} />
                                {errors.instructorEmail && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>

                        <div className="relative mb-4 text-left flex justify-between gap-4">
                            <div className="w-full">
                                <label htmlFor="seller" className="text-lg leading-7 font-semibold text-gray-600">Available seats</label>
                                <input className='bg-[#ffffff] w-full h-10 mx-auto ps-3 outline-none' placeholder='Available seats' {...register("availableSeats", { required: true })} />
                                {errors.availableSeats && <span className='text-red-600'>This field is required</span>}
                            </div>
                            <div className="w-full">
                                <label htmlFor="email" className="text-lg leading-7 font-semibold text-gray-600">Price</label>
                                <input className='bg-[#ffffff] w-full h-10 mx-auto ps-3 outline-none' placeholder='Price' {...register("price", { required: true })} />
                                {errors.price && <span className='text-red-600'>This field is required</span>}
                            </div>
                        </div>
                        <button className="bg-[#EA4C24] w-full text-xl text-white font-semibold hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] cursor-pointer inline-block rounded shadow py-2 px-5">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;