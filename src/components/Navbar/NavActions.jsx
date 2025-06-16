import NavAction from './NavAction';
import ThemeToggle from '../Toggle/ThemeToggle';
import Platter from '../Platter/Platter';
import Avatar from './Avatar';
import LoginButton from '../UI/LoginButton';
import NavDropDown from './NavDropDown';
import LogoutButton from '../UI/LogoutButton';

const NavActions = () => {
    return (
        <div className="flex items-center md:navbar-end space-x-2 ">
            {/* theme toggle  */}
            <NavAction>
                <ThemeToggle />
            </NavAction>

            {/* Platter  */}
            {/* <NavAction>
                <Platter />
            </NavAction> */}

            {/* avatar  */}
            <NavAction>
                <Avatar />
            </NavAction>

            {/* login button  */}
            <NavAction>
                <LoginButton />
            </NavAction>

            {/* logout button  */}
            <NavAction>
                <LogoutButton/>
            </NavAction>

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