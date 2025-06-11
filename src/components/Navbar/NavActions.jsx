import NavAction from './NavAction';
import ThemeToggle from '../Toggle/ThemeToggle';
import Platter from '../Platter/Platter';
import Avatar from './Avatar';
import LoginButton from '../LoginButton/LoginButton';
import NavDropDown from './NavDropDown';

const NavActions = () => {
    return (
        <div className="navbar-end space-x-2">
            {/* theme toggle  */}
            <NavAction>
                <ThemeToggle />
            </NavAction>

            {/* Platter  */}
            <NavAction>
                <Platter />
            </NavAction>

            {/* avatar  */}
            <NavAction>
                <Avatar />
            </NavAction>

            {/* login button  */}
            <NavAction>
                <LoginButton />
            </NavAction>

            {/* nav dropdown  */}
            <NavAction>
                <NavDropDown />
            </NavAction>
        </div>
    );
};

export default NavActions;