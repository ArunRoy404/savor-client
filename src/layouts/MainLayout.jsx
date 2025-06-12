import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <div className="px-3 md:px-0">
                <Outlet />
            </div>
            <footer />
        </>
    );
};

export default MainLayout;