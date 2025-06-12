import { Link } from 'react-router';

const Button = ({ children, to, onclick: onClick, className='cursor-pointer rounded-md bg-orange-500 px-5 py-2 text-sm md:text-md font-bold text-white' }) => {
    return (
        <Link to={to}>
            <button className={className} onClick={onClick}>
                {children}
            </button>
        </Link>
    );
};

export default Button;