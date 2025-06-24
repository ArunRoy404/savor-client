import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import FooterNew from "../components/Footer/FooterNew";


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
            {/* <Footer /> */}
            <FooterNew />
        </>
    );
};

export default MainLayout;