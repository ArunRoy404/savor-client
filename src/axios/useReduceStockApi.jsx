import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useReduceStockApi = () => {
    const axiosSecure = useAxiosSecure()
    const reduceStockPromise = (id, stock, purchaseCount) => {
        return axiosSecure.put(`/food/stock?id=${id}`, { stock, purchaseCount })
    }
    return (
        {
            reduceStockPromise
        }
    );
};

export default useReduceStockApi;