import useAxiosSecure from './useAxiosSecure';

const useMyOrdersApi = () => {
    const axiosSecure = useAxiosSecure()

    const myOrdersPromise = email => {
        return axiosSecure.get(`/my-orders?email=${email}`)
    }
    return (
        { myOrdersPromise }
    );
};

export default useMyOrdersApi;