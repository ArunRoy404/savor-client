import useAxiosSecure from './useAxiosSecure';

const useUpdateFoodApi = () => {

    const axiosSecure = useAxiosSecure()
    const updateFoodPromise = (id, updatedData) => {
        return axiosSecure.put(`/foods/my-foods?id=${id}`, updatedData)
    }
    return (
        {
            updateFoodPromise
        }
    );
};

export default useUpdateFoodApi;