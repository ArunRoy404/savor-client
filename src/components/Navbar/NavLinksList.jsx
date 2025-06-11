import { NavLink } from "react-router";

const NavLinksList = () => {
    return (
        <>
            <NavLink to={'/'} className='hover:text-orange-600 transition-colors' >Home</NavLink>
            <NavLink to={'/all-foods'} className=' hover:text-orange-600 transition-colors'>All Foods</NavLink>
            <NavLink to={'/gallery'} className=' hover:text-orange-600 transition-colors'>Gallery</NavLink>
            </>
    );
};

export default NavLinksList;