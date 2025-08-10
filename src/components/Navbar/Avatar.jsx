import { Link } from "react-router";
import useAuthContext from "../../custom_contexts/UseAuthContext";

const Avatar = () => {

    const { firebaseUser } = useAuthContext()

    return (
        <div className="dropdown dropdown-end dropdown-hover">
            <div tabIndex={0} role="button" className="avatar">
                <div className="w-7 rounded-full">
                    <img src={firebaseUser?.photoURL} />
                    <img src='https://i.ibb.co/sdcY1StY/unnamed.png' />
                </div>
            </div>
            {/* <ul
                tabIndex={0}
                className="font-bold text-sm menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow">
                <li>
                    <Link className="justify-between">
                        {user?.name}
                    </Link>
                </li>
                <li><Link to={'/my-foods'}>My Foods</Link></li>
                <li><Link to={'/add-foods'}>Add Foods</Link></li>
                <li><Link to={'/my-orders'}>My Orders</Link></li>
                <li><a onClick={() => logOutUser()} >Logout</a></li> 
                <li><a>Logout</a></li>
            </ul> */}
        </div>
    );
};

export default Avatar;