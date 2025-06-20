import { Navigate, useLocation, useNavigate } from "react-router";
import { AiOutlineLogin } from "react-icons/ai";

const LoginButton = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()
    return (
        <button
            className="cursor-pointer"
            onClick={() => {
                navigate('/login', { state: pathname })
            }}>
            <AiOutlineLogin size={20} />
        </button>
    );
};

export default LoginButton;