import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useDeleteFoodApi = () => {

    const axiosSecure = useAxiosSecure()

    const deleteFoodPromise = (id, email) => {
        return axiosSecure.delete(`/foods/my-foods?id=${id}`, { data: { email } })
    }
    return (
        { deleteFoodPromise }
    );
};

export default useDeleteFoodApi;