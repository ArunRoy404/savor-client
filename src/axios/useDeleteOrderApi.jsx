import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useDeleteOrderApi = () => {
    const axiosSecure = useAxiosSecure()
    const deleteOrderPromise = id => {
        return axiosSecure.delete(`/my-orders?id=${id}`)
    }
    return (
        {
            deleteOrderPromise
        }
    );
};

export default useDeleteOrderApi;