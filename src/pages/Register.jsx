import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import bg from '/login-background.jpg'
import Navbar from '../components/Navbar/Navbar';
import { notifyError, notifySuccess } from '../utilities/notification';
import useAuthContext from '../custom_contexts/UseAuthContext';
import isValidPassword from '../utilities/PassValidation';


const Login = () => {
    const { createUser, updateUserProfile, googleLogIn, reloadUser } = useAuthContext()

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [isPassVisible, setIsPassVisible] = useState(false)
    const [isBtnLoading, setISBtnLoading] = useState(false)
    const [isGoogleBtnLoading, setIsGoogleBtnLoading] = useState(false)


    const navigate = useNavigate()
    const location = useLocation()

    const handleCreateUser = e => {
        e.preventDefault()
        const userName = e.target.userName.value
        const photoURL = e.target.photoURL.value
        const email = e.target.email.value
        const password = e.target.password.value

        setSuccess('')
        setError('')

        isValidPassword(password)
            .then(() => {
                setISBtnLoading(true)
                createUser(email, password)
                    .then(() => {
                        const updateInfo = {
                            displayName: userName,
                            photoURL: photoURL
                        }
                        updateUserProfile(updateInfo)
                            .then(() => {
                                setSuccess('Account created successfully')
                                notifySuccess("Account created successfully")
                                reloadUser()
                                navigate(location.state || '/')
                            })
                            .catch(error => {
                                setError(error.code)
                                notifyError('Registration failed')
                            })
                    })
                    .catch(error => {
                        setError(error.code)
                        notifyError('Registration failed')
                    })
                    .finally(() => {
                        setISBtnLoading(false)
                    })
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleGoogleLogIn = () => {
        setSuccess('')
        setError('')
        setIsGoogleBtnLoading(true)

        googleLogIn()
            .then(() => {
                setSuccess('Login Successful')
                notifySuccess('Login Successful')
                navigate(location.state || '/')
            })
            .catch(error => {
                setError(error.code)
                notifyError("Login failed!")
            })
            .finally(() => {
                setIsGoogleBtnLoading(false)
            })
    }

    return (
        <>
            <Navbar />
            <div className="h-[calc(100vh-64px)] flex items-center justify-end container mx-auto lg:px-30">
                {/* Background Image with Overlay */}
                <div className="fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <img
                        src={bg}
                        alt="Food background"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className='mx-auto lg:mx-0'>
                    {/* Register Card */}
                    <div className="w-full md:w-auto text-white">
                        <div className="card w-sm md:w-lg shrink-0">
                            <div className="card-body">
                                <h1 className='text-4xl font-bold mb-3'>Register</h1>
                                <form onSubmit={handleCreateUser} className="fieldset border-b-1 border-gray-400 border-dashed">

                                    <label className="label text-lg font-black ">Email</label>
                                    <input name='email' type="email" required className="border-1 border-gray-200 w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input bg-transparent" placeholder="Enter email" />

                                    <label className="label text-lg font-black ">User name</label>
                                    <input name='userName' type="text" required className="border-1 border-gray-200 w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input bg-transparent" placeholder="Enter username" />

                                    <label className="label text-lg font-black ">Photo URL</label>
                                    <input name='photoURL' type="url" required className="border-1 border-gray-200 w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input bg-transparent" placeholder="Enter photo URL" />

                                    <label className="label font-bold text-lg ">Password</label>
                                    <div className='relative'>
                                        <input name='password' required type={isPassVisible ? 'text' : "password"} className="border-1 border-gray-200 w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input bg-transparent" placeholder="******" />
                                        <button type='button' onClick={() => setIsPassVisible(value => !value)} className='cursor-pointer p-0 h-6 w-4 absolute right-6 top-2 z-10 border-none'>
                                            {
                                                isPassVisible
                                                    ? <FaEyeSlash size={18} />
                                                    : <FaEye size={18} />
                                            }
                                        </button>
                                    </div>

                                    <p className='text-green-400' >{success}</p>
                                    <p className='text-red-400 font-bold' >{error}</p>

                                    <button type='submit' className='mt-5 mb-3 btn btn-neutral shadow-none rounded-sm text-black bg-white/50 hover:bg-white/70 border-black/40 ' disabled={isBtnLoading}>
                                        {isBtnLoading && <span className="loading loading-spinner"></span>}
                                        Register
                                    </button>
                                </form>

                                <button onClick={handleGoogleLogIn} className='mt-2 btn btn-neutral shadow-none rounded-sm bg-white/50 hover:bg-white/70 text-black  border-black/40' disabled={isGoogleBtnLoading}>
                                    {isGoogleBtnLoading && <span className="loading loading-spinner"></span>}
                                    <FcGoogle />
                                    Login with Google
                                </button>
                                <h2>Already have an account? <Link state={location.state} className='underline text-blue-400' to={'/login'}>Log IN</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Login;