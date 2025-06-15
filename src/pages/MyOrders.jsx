import { FiTrash2, FiClock, FiCheckCircle } from 'react-icons/fi';
import useThemeContext from '../custom_contexts/useThemeContext';

const MyOrders = () => {

    const { isDark } = useThemeContext()
    // Sample order data
    const orders = [
        {
            id: 1,
            food: {
                name: "Spaghetti Carbonara",
                image: "https://img.freepik.com/free-photo/italian-pasta-spaghetti-with-meatballs-parmesan-cheese-black-plate-dark-rustic-wood-background-dinner-slow-food-concept_2829-4639.jpg",
                price: 14.99,
                category: "Italian"
            },
            customer: "John Smith",
            orderDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
            status: "completed"
        },
        {
            id: 2,
            food: {
                name: "Margherita Pizza",
                image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
                price: 12.50,
                category: "Italian"
            },
            customer: "Sarah Johnson",
            orderDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
            status: "completed"
        },
        {
            id: 3,
            food: {
                name: "Beef Burger",
                image: "https://img.freepik.com/free-photo/front-view-tasty-meat-burger-with-cheese-salad-dark-background_140725-89597.jpg",
                price: 10.99,
                category: "American"
            },
            customer: "Michael Brown",
            orderDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
            status: "pending"
        }
    ];

    // Function to format time ago
    const timeAgo = (date) => {
        const seconds = Math.floor((new Date() - date) / 1000);
        const intervals = {
            year: 31536000,
            month: 2592000,
            week: 604800,
            day: 86400,
            hour: 3600,
            minute: 60
        };

        for (const [unit, secondsInUnit] of Object.entries(intervals)) {
            const interval = Math.floor(seconds / secondsInUnit);
            if (interval >= 1) {
                return interval === 1 ? `${interval} ${unit} ago` : `${interval} ${unit}s ago`;
            }
        }
        return "Just now";
    };

    // Delete order function
    const handleDelete = (orderId) => {
        console.log("Deleting order:", orderId);
        // Add your actual delete logic here
    };

    return (
        <div>
            <div className="py-10">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold ">Order History</h1>
                    <p className="opacity-70">Manage and review all orders</p>
                </div>

                <div className="space-y-5">
                    {orders.map((order) => (
                        <div key={order.id} className={`${isDark ?'bg-gray-800' :'bg-white'} rounded-xl shadow-sm overflow-hidden border border-gray-500  hover:shadow-xl transition-shadow`}>
                            <div className="flex flex-col md:flex-row">
                                {/* Food Image */}
                                <div className="md:w-60">
                                    <img
                                        src={order.food.image}
                                        alt={order.food.name}
                                        className="w-full h-40 md:h-full object-cover"
                                    />
                                </div>

                                {/* Order Details */}
                                <div className="flex-1 p-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h2 className="text-xl font-semibold ">{order.food.name}</h2>
                                            <p className="">{order.food.category}</p>
                                        </div>
                                        <span className="text-orange-400 font-medium">${order.food.price}</span>
                                    </div>

                                    <div className="mt-4 flex items-center space-x-4 text-sm">
                                        <div className="flex items-center">
                                            <FiClock className="mr-1" />
                                            <span>{timeAgo(order.orderDate)}</span>
                                        </div>
                                        <div className={`flex items-center ${order.status === 'completed' ? 'text-green-500' : 'text-yellow-500'}`}>
                                            <FiCheckCircle className="mr-1" />
                                            <span className="capitalize">{order.status}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <p className="">
                                            <span className="font-medium">Owner:</span> {order.customer}
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className={`${isDark ?'bg-gray-700' :'bg-white'} md:w-24 flex md:flex-col items-center justify-center p-4 border-t md:border-t-0 md:border-l border-gray-400`}>
                                    <button
                                        onClick={() => handleDelete(order.id)}
                                        className="cursor-pointer p-2 text-red-500 hover:text-red-700 transition-colors"
                                        aria-label="Delete order"
                                    >
                                        <FiTrash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State (uncomment if needed) */}
                {/* {orders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FiPackage size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-700">No orders yet</h3>
            <p className="text-gray-500 mt-1">Your order history will appear here</p>
          </div>
        )} */}
            </div>
        </div>
    );
};

export default MyOrders;