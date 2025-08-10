import { useQuery } from '@tanstack/react-query';
import useAuthContext from '../custom_contexts/UseAuthContext';
import useMyOrdersApi from '../axios/useMyOrdersApi';
import Loader from '../components/Loader/Loader';
import Error from '../components/UI/Error';
import NoResultFound from '../components/NoResultFound/NoResultFound';
import OrderedFoodCard from '../components/FoodCard/OrderedFoodCard';

const MyOrders = () => {


    const { firebaseUser } = useAuthContext()
    const { myOrdersPromise } = useMyOrdersApi()

    const { isPending, error, data: orders, refetch } = useQuery({
        queryKey: ['myOrders', firebaseUser?.email],
        queryFn: () => myOrdersPromise(firebaseUser?.email)
            .then(res => res.data)

    })



    if (isPending) return <Loader />
    if (error) return <Error error={error} />

    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <title>Savor | My Orders</title>
            <div className="py-10">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold ">Order History</h1>
                    <p className="opacity-70">Manage and review all orders</p>
                </div>

                <div className="space-y-5">
                    {
                        orders.length === 0 && <NoResultFound />
                    }
                    {orders.map((order) => <OrderedFoodCard key={order._id} order={order} refetch={refetch} />)}
                </div>
            </div>
        </div>
    );
};

export default MyOrders;