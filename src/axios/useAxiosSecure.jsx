import axios from 'axios';
import useAuthContext from '../custom_contexts/UseAuthContext';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/'
})

const useAxiosSecure = () => {

    const { firebaseUser } = useAuthContext()
    console.log(firebaseUser);

    if (firebaseUser) {
        axiosInstance.interceptors.request.use(config => {
            config.headers.authorization = `Bearer ${firebaseUser.accessToken}`
            return config
        })
    }

    return axiosInstance
};

export default useAxiosSecure;