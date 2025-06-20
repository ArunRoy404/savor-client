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
            <div className="pt-16 min-h-[calc(100vh)]">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;