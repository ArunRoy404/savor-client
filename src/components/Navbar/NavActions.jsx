import NavAction from './NavAction';
import ThemeToggle from '../Toggle/ThemeToggle';
import Platter from '../Platter/Platter';
import Avatar from './Avatar';
import LoginButton from '../UI/LoginButton';
import NavDropDown from './NavDropDown';
import LogoutButton from '../UI/LogoutButton';
import useAuthContext from '../../custom_contexts/UseAuthContext';

const NavActions = () => {

    const { firebaseUser } = useAuthContext()

    return (
        <div className="flex items-center space-x-2 ">
            {/* theme toggle  */}
            <NavAction>
                <ThemeToggle />
            </NavAction>

            {/* Platter  */}
            {/* <NavAction>
                <Platter />
            </NavAction> */}

            {
                firebaseUser
                    ? <><NavAction><Avatar /></NavAction> <NavAction><LogoutButton /></NavAction></>
                    : <NavAction><LoginButton /></NavAction>
            }

            {/* nav dropdown  */}
            <div className='lg:hidden'>
                <NavAction>
                    <NavDropDown />
                </NavAction>
            </div>
        </div>
    );
};

export default NavActions;