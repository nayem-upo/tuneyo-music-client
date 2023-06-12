import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { userLogin, googleLogin } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const handleLogin = data => {
        const { email, password } = data;
        userLogin(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const saveUser = { name: user.displayName, email: user.email, role: "user", image: user.photoURL }
                fetch('https://tuneyo-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true });
                    })
                setError("")
                setSuccess("Login Successfull")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setSuccess("")
                setError(errorMessage)
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                setError("")
                setSuccess("Login Successfull")
                const user = result.user;
                const saveUser = { name: user.displayName, email: user.email, role: "user", image: user.photoURL }
                fetch('https://tuneyo-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true });
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                setSuccess("")
                setError(errorMessage)
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }


    return (
        <div className='md:flex justify-center pb-20 pt-32 gap-10'>
            <img className='shadow-md rounded w-[100px] md:mx-0 mx-auto md:w-[400px] object-cover' src="https://www.steinway.com/.imaging/default/dam/Special-Pianos/pops/pops_builder/pops_rendering/191223-POPS.1760.png/jcr:content.jpg" alt="" />
            <form className='flex gap-3 flex-col md:w-[340px] w-[300px] mx-auto md:mx-0' onSubmit={handleSubmit(handleLogin)}>
                <p className='text-[#EA4C24] my-4 md:my-0 md:text-3xl text-center md:text-left text-xl font-semibold'>Enter Your Login details!</p>
                <input className='bg-[#F3F4F6] h-10 mx-auto w-full md:w-[340px] ps-3 outline-none' placeholder='Email' {...register("email", { required: true })} />
                {errors.email && <span className='text-red-600'>This field is required</span>}
                <input
                    className='bg-[#F3F4F6] h-10 mx-auto w-full md:w-[340px] ps-3 outline-none'
                    placeholder='Password'
                    type={showPassword ? 'text' : 'password'}
                    {...register("password", { required: true })}
                />
                <button
                    type="button"
                    className="-mt-11 md:ms-72 ms-64 w-10 mb-3 left-36 font-semibold text-[#717171] badge text-sm hover:text-[#EA4C24] focus:outline-none"
                    onClick={togglePassword}
                >
                    {showPassword ? 'Hide' : 'Show'}
                </button>
                {errors.password && <span className='text-red-600'>This field is required</span>}
                <button className="bg-[#EA4C24] text-white font-semibold hover:bg-[#ffffff] duration-300 border-2 border-[#EA4C24] hover:text-[#EA4C24] cursor-pointer inline-block rounded shadow py-2 px-5 text-sm">
                    Login
                </button>
                <p className='flex justify-between'>Haven't any account? Please<span> <Link className='hover:text-[#EA4C24] font-semibold text-sm' to="/register">Sign Up</Link></span></p>
                <div className="divider mb-0 font-semibold">OR</div>
                <div>
                    <p className='text-center text-[#EA4C24] font-semibold'>Login With</p>
                    <span onClick={handleGoogleLogin} className="bg-[#ffffff] mt-3 items-center text-xl justify-center gap-2 flex text-[#EA4C24] font-semibold hover:bg-[#EA4C24] duration-300 border-2 border-[#EA4C24] hover:text-white cursor-pointer rounded shadow py-2 px-5">
                        <img className='w-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/882px-Google_%22G%22_Logo.svg.png?20230305195327" alt="" />
                        GOOGLE
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;