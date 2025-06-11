import { NavLink } from 'react-router';

const NavLoginRegisterBtn = () => {
    return (
        <div className='space-x-2 md:space-x-4 font-bold flex'>
            <NavLink to={'/login'}><button className='text-[10px] w-15 px-3 py-1 btn btn-neutral shadow-none rounded-4xl hover:bg-white hover:text-black border-2 border-neutral'>Log IN</button></NavLink>
            <NavLink to={'/register'}><button className='text-[10px] px-3 py-1 btn btn-neutral shadow-none rounded-4xl hover:bg-white hover:text-black border-2 border-neutral'>Register</button></NavLink>
        </div>
    );
};

export default NavLoginRegisterBtn;