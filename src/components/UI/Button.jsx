import { Link } from 'react-router';

const Button = ({ children, to, onclick: onClick, className='cursor-pointer rounded-full px-5 py-2 text-sm md:text-md font-bold border border-gray-300 hover:border-orange-400 transition duration-300' }) => {
    return (
        <Link to={to}>
            <button className={className} onClick={onClick}>
                {children}
            </button>
        </Link>
    );
};

export default Button;