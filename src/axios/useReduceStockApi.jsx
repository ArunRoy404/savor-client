import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useReduceStockApi = () => {
    const axiosSecure = useAxiosSecure()
    const reduceStockPromise = (id, stock) => {
        return axiosSecure.put(`/food/stock?id=${id}`, {stock})
    }
    return (
        {
            reduceStockPromise
        }
    );
};

export default useReduceStockApi;