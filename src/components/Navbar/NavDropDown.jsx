import NavLinksList from "./NavLinksList";

const NavDropDown = () => {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 space-y-1 p-5 shadow">
                <NavLinksList />
            </ul>
        </div>
    );
};

export default NavDropDown;