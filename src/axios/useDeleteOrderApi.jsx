import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useDeleteOrderApi = () => {
    const axiosSecure = useAxiosSecure()
    const deleteOrderPromise = (id, email) => {
        return axiosSecure.delete(`/my-orders?id=${id}`, { data: { email } })
    }
    return (
        {
            deleteOrderPromise
        }
    );
};

export default useDeleteOrderApi;