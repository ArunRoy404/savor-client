import useAxiosSecure from "./useAxiosSecure";


const useBuyFoodApi = () => {
    const axiosSecure = useAxiosSecure()

    const buyFoodPromise = purchaseData => {
        return axiosSecure.post(`/food/purchase`, purchaseData)
    }

    return (
        {
            buyFoodPromise
        }
    );
};

export default useBuyFoodApi;