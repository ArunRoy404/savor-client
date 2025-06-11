import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <>
            <header />
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <Outlet />
            <footer />
        </>
    );
};

export default MainLayout;