import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useFoodsApi = () => {
    const axiosSecure = useAxiosSecure()
    const getFoodsPromise = (searchText='') =>{
        return axiosSecure.get(`/foods?title=${searchText}`)
    }
    return (
        {
            getFoodsPromise
        }
    );
};

export default useFoodsApi;