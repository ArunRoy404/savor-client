import { useState } from 'react';
import bg from '/login-background.jpg'
import Navbar from '../components/Navbar/Navbar';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import useAuthContext from '../custom_contexts/UseAuthContext';
import { notifyError, notifySuccess } from '../utilities/notification';

const Login = () => {
    const { logIn, googleLogIn } = useAuthContext()


    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [isPassVisible, setIsPassVisible] = useState(false)
    const [isLogINBtnLoading, setIsLogInBtnLoading] = useState(false)
    const [isGoogleBtnLoading, setIsGoogleBtnLoading] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        setSuccess('')
        setError('')
        setIsLogInBtnLoading(true)

        logIn(email, password)
            .then(() => {
                setSuccess('Login Successful')
                notifySuccess('Login Successful')
                navigate(location.state || '/')
            })
            .catch(error => {
                setError(error.code)
                notifyError('Login Failed')
            })
            .finally(() => {
                setIsLogInBtnLoading(false)
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
            <title>Savor | Login</title>
            <Navbar />
            <div className="h-[calc(100vh-64px)] flex items-center justify-end container mx-auto lg:px-30">
                <div className="fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <img
                        src={bg}
                        alt="Food background"
                        className="w-full h-full object-cover transition-all duration-200"
                    />
                </div>

                <div className='mx-auto lg:mx-0 backdrop-blur-sm lg:backdrop-blur-none rounded-2xl z-[1000]'>
                    <div className="w-full md:w-auto text-white">
                        <div className="card w-[calc(100vw-80px)] md:w-lg shrink-0 ">
                            <div className="card-body">
                                <h1 className='text-4xl font-bold mb-3'>Log In</h1>
                                <form onSubmit={handleLogin} className="fieldset border-b-2 border-gray-400 border-dashed">

                                    <label className="label text-lg font-black ">Email</label>
                                    <input name='email' type="email" required className="border-1 border-gray-200 w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input bg-transparent" placeholder="Enter email" />

                                    <label className="label font-bold text-lg ">Password</label>
                                    <div className='relative'>
                                        <input name='password' required type={isPassVisible ? 'text' : "password"} className="border-1 border-gray-200 w-full focus:outline-none focus:border-2 bg-transparent focus:border-blue-400 input pr-13 font-bold" placeholder="******" />
                                        <button type='button' onClick={() => setIsPassVisible(value => !value)} className='cursor-pointer p-0 h-6 w-4 absolute right-6 top-2 z-10 border-none'>
                                            {
                                                isPassVisible
                                                    ? <FaEyeSlash size={18} />
                                                    : <FaEye size={18} />
                                            }
                                        </button>
                                    </div>
                                    <Link to={'/forgot-password'} type='button' className='text-left cursor-pointer font-bold underline'>Forgot password?</Link>

                                    <p className='text-green-400' >{success}</p>
                                    <p className='text-red-400 font-bold' >{error}</p>

                                    <button type='submit' className='mt-5 mb-3 btn btn-neutral shadow-none rounded-sm text-black bg-white/50 hover:bg-white/70 border-black/40 ' disabled={isLogINBtnLoading}>
                                        {isLogINBtnLoading && <span className="loading loading-spinner"></span>}
                                        Log IN
                                    </button>
                                </form>


                                <button onClick={handleGoogleLogIn} className='mt-2 btn btn-neutral shadow-none rounded-sm bg-white/50 hover:bg-white/70 text-black  border-black/40' disabled={isGoogleBtnLoading}>
                                    {isGoogleBtnLoading && <span className="loading loading-spinner"></span>}
                                    <FcGoogle />
                                    Login with Google
                                </button>
                                <h2>Don't have an account? <Link state={location.state} className='underline text-blue-400' to={'/register'}>Register Now</Link></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Login;