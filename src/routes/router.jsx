import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
import AllFoods from '../pages/AllFoods';


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
            }
        ]
    }
])

export default router;