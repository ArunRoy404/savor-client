import { NavLink } from "react-router";
import useAuthContext from "../../custom_contexts/UseAuthContext";

const NavLinksList = () => {
    const { firebaseUser } = useAuthContext()
    return (
        <>
            <NavLink to={'/'} className='hover:text-orange-600 transition-colors' >Home</NavLink>
            <NavLink to={'/all-foods'} className=' hover:text-orange-600 transition-colors'>All Foods</NavLink>
            <NavLink to={'/gallery'} className=' hover:text-orange-600 transition-colors'>Gallery</NavLink>
            {
                firebaseUser
                &&
                <>
                    <NavLink to={'/my-foods'} className='hover:text-orange-600 transition-colors' >My Foods</NavLink>
                    <NavLink to={'/add-foods'} className=' hover:text-orange-600 transition-colors'>Add Foods</NavLink>
                    <NavLink to={'/my-orders'} className=' hover:text-orange-600 transition-colors'>My Orders</NavLink>
                </>
            }
        </>
    );
};

export default NavLinksList;