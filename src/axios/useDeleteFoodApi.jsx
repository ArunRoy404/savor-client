import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useDeleteFoodApi = () => {

    const axiosSecure = useAxiosSecure()

    const deleteFoodPromise = (id) => {
        return axiosSecure.delete(`/foods/my-foods?id=${id}`,)
    }
    return (
        { deleteFoodPromise }
    );
};

export default useDeleteFoodApi;