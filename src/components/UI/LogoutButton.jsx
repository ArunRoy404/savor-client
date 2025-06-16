import { AiOutlineLogout } from 'react-icons/ai';
import useAuthContext from '../../custom_contexts/UseAuthContext';

const LogoutButton = () => {
    const { logOut } = useAuthContext()
    return (
        <AiOutlineLogout size={20}
            onClick={logOut}
        />
    )
};

export default LogoutButton;