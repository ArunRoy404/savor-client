import logo from "../../../public/logo.png";
const Logo = () => {
    return (
        <div className="cursor-pointer flex items-center space-x-3">
            <img className="w-10" src={logo} alt="" />
            <h1 className="text-3xl font-bold">Savor</h1>
        </div>
    );
};

export default Logo;