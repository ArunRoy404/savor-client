// import useAuthContext from "../../CustomContexts/UseAuthContext";
import { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import NavActions from "./NavActions";
import NavLinksList from "./NavLinksList";
import useThemeContext from "../../custom_contexts/useThemeContext";
import { useLocation } from "react-router";


const Navbar = () => {
    // const { loggedUser } = useAuthContext()
    const [scrolled, setScrolled] = useState(false)
    const { isDark } = useThemeContext()
    const { pathname } = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`${scrolled ? 'shadow-md bg-[#f5ebfe] ' : pathname === '/' ? isDark ? 'bg-transparent' : 'bg-white' : 'bg-transparent'} ${isDark ? 'bg-accent' : ''} transition-all duration-300 z-100 w-full fixed top-0`}>
            <div className="relative z-100 w-full  flex">
                <div className="navbar container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between">
                    <div className="flex items-center gap-20 flex-1">

                        {/* logo  */}
                        <Logo />

                        {/* nav links  */}
                        <ul className="hidden lg:block mt-2 font-semibold menu menu-horizontal px-1 space-x-10">
                            <NavLinksList />
                        </ul>
                    </div>

                    {/* nav actions  */}
                    <NavActions />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;  