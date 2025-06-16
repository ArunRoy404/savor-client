import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <div className="px-3 md:px-0 container mx-auto">
                <Outlet />
            </div>
            <Footer/>
        </>
    );
};

export default MainLayout;