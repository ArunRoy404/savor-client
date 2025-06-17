import useAxiosSecure from "./useAxiosSecure";


const useMyFoodsApi = () => {
    const axiosSecure = useAxiosSecure()

    const myFoodsPromise = email => {
        return axiosSecure.get(`foods/my-foods?email=${email}`)
            .then(res => res.data)
    }
    return {
        myFoodsPromise
    }
};

export default useMyFoodsApi;