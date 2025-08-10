import NavLinksList from "./NavLinksList";

const NavDropDown = () => {
    return (
        <div className="dropdown dropdown-end !z-[1000]">
            <div tabIndex={0} role="button" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="!z-[1000] menu menu-sm dropdown-content backdrop-blur-lg rounded-box mt-3 w-40 space-y-3 p-5 shadow ">
                <NavLinksList />
            </ul>
        </div>
    );
};

export default NavDropDown;