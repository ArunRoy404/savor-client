const NavAction = ({children}) => {
    return (
    <div className='cursor-pointer not-last:w-9 h-9 border border-gray-200 hover:border-orange-600 transition-colors rounded-full flex items-center justify-center'>
            {children}
        </div>
    );
};

export default NavAction;