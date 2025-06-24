import { Link } from "react-router";
import logo from "/logo.png";
const Logo = () => {
    return (
        <Link to={'/'}>
            <div className="cursor-pointer max-w-max flex items-center space-x-3">
                <img className="w-10" src={logo} alt="" />
                <h1 className="text-3xl font-bold">Savor</h1>
            </div>
        </Link>
    );
};

export default Logo;