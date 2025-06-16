import { AiOutlineLogout } from 'react-icons/ai';
import useAuthContext from '../../custom_contexts/UseAuthContext';
import { notifySuccess } from '../../utilities/notification';

const LogoutButton = () => {
    const { logOut } = useAuthContext()
    return (
        <AiOutlineLogout size={20}
            onClick={() => {
                notifySuccess('Logout Successful')
                logOut()
            }}
        />
    )
};

export default LogoutButton;