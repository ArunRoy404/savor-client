import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import AllFoods from '../pages/AllFoods';
import FoodDetailPage from '../pages/FoodDetailPage';
import PurchaseFood from '../pages/PurchaseFood';
import FoodGallery from '../pages/FoodGallery';
import AddFoodPage from '../pages/AddFoodPage';
import MyOrders from '../pages/MyOrders';


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
                path: '/food-detail',
                element: <FoodDetailPage/>
            },
            {
                path:'/purchase',
                element: <PurchaseFood/>
            },
            {
                path: '/gallery',
                element: <FoodGallery/>
            },
            {
                path:'add-foods',
                element: <AddFoodPage/>
            },
            {
                path: '/my-orders',
                element: <MyOrders/>
            }
        ]
    }
])

export default router;