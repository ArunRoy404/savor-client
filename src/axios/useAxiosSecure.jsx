import axios from 'axios';
import useAuthContext from '../custom_contexts/UseAuthContext';


const axiosInstance = axios.create({
    baseURL: 'https://savor-server-avhf6x8eq-arun-roys-projects.vercel.app'
})

const useAxiosSecure = () => {

    const { firebaseUser } = useAuthContext()

    if (firebaseUser) {
        axiosInstance.interceptors.request.use(config => {
            const token = localStorage.getItem("accessToken");
            if (token) {
                config.headers.authorization = `${token}`
            }

            return config
        })
    }
    return axiosInstance
};

export default useAxiosSecure;