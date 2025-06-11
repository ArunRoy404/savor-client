// import useAuthContext from "../../CustomContexts/UseAuthContext";
import Logo from "../Logo/Logo";
import NavActions from "./NavActions";
import NavDropDown from "./NavDropDown";
import NavLinksList from "./NavLinksList";


const Navbar = () => {
    // const { loggedUser } = useAuthContext()

    return (
        <nav className="z-100">
            <div className="w-full backdrop-blur-sm z-50 border-b border-gray-100 flex">
                <div className="navbar container mx-auto flex justify-between">
                    <div className="flex items-center gap-20 ">

                        {/* logo  */}
                        <Logo/>

                        {/* nav links  */}
                        <ul className="menu menu-horizontal px-1 space-x-10">
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