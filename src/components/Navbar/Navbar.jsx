// import useAuthContext from "../../CustomContexts/UseAuthContext";
import { useState } from "react";
import Logo from "../Logo/Logo";
import NavActions from "./NavActions";
import NavLinksList from "./NavLinksList";


const Navbar = () => {
    // const { loggedUser } = useAuthContext()
    const [scrolled, setScrolled] = useState(false)

    useState(() => {
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
        <nav className={`${scrolled ? 'shadow-md bg-[#f5ebfe] ' : 'bg-transparent'} transition-all duration-300 z-100 w-full fixed top-0`}>
            <div className="relative z-100 w-full  flex">
                <div className="navbar container px-4 sm:px-6 lg:px-8 mx-auto flex justify-between">
                    <div className="flex items-center gap-20">

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