import { NavLink } from 'react-router';
import { AiOutlineLogout } from 'react-icons/ai';

const LogoutButton = () => {
    return (
        <AiOutlineLogout size={20}
            onClick={() => alert("logout")}
        />
    )
};

export default LogoutButton;