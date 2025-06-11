import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default router;