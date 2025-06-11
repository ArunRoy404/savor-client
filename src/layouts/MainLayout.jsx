import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <Outlet />
            <footer />
        </>
    );
};

export default MainLayout;