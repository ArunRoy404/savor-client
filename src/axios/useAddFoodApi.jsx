import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useAddFoodApi = () => {
    const axiosSecure = useAxiosSecure()

    const addFoodPromise = (food) => {
        return axiosSecure.post('/foods', food)
    }
    return (
        {
            addFoodPromise
        }
    );
};

export default useAddFoodApi;