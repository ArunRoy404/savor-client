import useAxiosSecure from "./useAxiosSecure";


const useMyFoodsApi = () => {
    const axiosSecure = useAxiosSecure()

    const myFoodsPromise = email => {
        return axiosSecure.get(`/foods/my-foods?ownerEmail=${email}`)
    }
    return {
        myFoodsPromise
    }
};

export default useMyFoodsApi;