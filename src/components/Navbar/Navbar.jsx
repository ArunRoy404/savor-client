// import useAuthContext from "../../CustomContexts/UseAuthContext";
import Logo from "../Logo/Logo";
import NavActions from "./NavActions";
import NavLinksList from "./NavLinksList";


const Navbar = () => {
    // const { loggedUser } = useAuthContext()

    return (
        <nav className="z-100 w-full fixed top-0">
            <div className="relative z-100 w-full backdrop-blur-sm flex">
                <div className="navbar container mx-auto flex justify-between">
                    <div className="flex items-center gap-20">

                        {/* logo  */}
                        <Logo/>

                        {/* nav links  */}
                        <ul className="hidden lg:block mt-2 font-semibold menu menu-horizontal px-1 space-x-10">
                            <NavLinksList />
                        </ul>
                    </div>

                    {/* nav actions  */}
                    <NavActions/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;  