import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect } from "react";
import FooterNew from "../components/Footer/FooterNew";
import useThemeContext from "../custom_contexts/useThemeContext";


const MainLayout = () => {
    const {isDark} = useThemeContext()
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <Navbar />
            <div className={` ${isDark ? 'bg-gray-800' : 'bg-gradient-to-t to-[#f5ebfe]'} pt-16 min-h-[calc(100vh)]`}>
                <Outlet />
            </div>
            {/* <Footer /> */}
            <FooterNew />
        </>
    );
};

export default MainLayout;