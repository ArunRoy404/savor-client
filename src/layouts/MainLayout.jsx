import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";


const MainLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Navbar />
            <div className="px-3 md:px-0 container mx-auto min-h-[calc(100vh-64px)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;