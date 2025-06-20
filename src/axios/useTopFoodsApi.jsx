import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useTopFoodsApi = () => {
    const axiosSecure = useAxiosSecure()
    const topFoodsPromise = () =>{
        return axiosSecure.get('/top-foods')
    }
    return (
        {
            topFoodsPromise
        }
    );
};

export default useTopFoodsApi;