import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useFoodDetailApi = () => {
    const axiosSecure = useAxiosSecure()

    const foodDetailPromise = id => {
        return axiosSecure.get(`/food?id=${id}`)
    }
    return (
        {
            foodDetailPromise
        }
    );
};

export default useFoodDetailApi;