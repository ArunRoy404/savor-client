import { NavLink } from "react-router";
import { AiOutlineLogin } from "react-icons/ai";

const LoginButton = () => {
    return (
        <NavLink to={'/login'}>
            <AiOutlineLogin size={20}/>
        </NavLink>
    );
};

export default LoginButton;