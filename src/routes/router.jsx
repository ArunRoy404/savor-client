import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import AllFoods from '../pages/AllFoods';
import FoodDetailPage from '../pages/FoodDetailPage';
import PurchaseFood from '../pages/PurchaseFood';
import FoodGallery from '../pages/FoodGallery';
import AddFoodPage from '../pages/AddFoodPage';
import MyOrders from '../pages/MyOrders';
import MyFoods from '../pages/MyFoods';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all-foods',
                element: <AllFoods />
            },
            {
                path: '/food/:id',
                element: <FoodDetailPage />
            },
            {
                path: '/gallery',
                element: <FoodGallery />
            },
            {
                path: '/food/purchase/:id',
                element: <PrivateRoute><PurchaseFood /></PrivateRoute>
            },
            {
                path: '/add-foods',
                element: <PrivateRoute> <AddFoodPage /></PrivateRoute>
            },
            {
                path: '/my-orders',
                element: <PrivateRoute><MyOrders /></PrivateRoute>
            },
            {
                path: '/my-foods',
                element: <PrivateRoute><MyFoods /></PrivateRoute>
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/*',
        element: <ErrorPage />
    }
])

export default router;