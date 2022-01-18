import DropDownMenu from './DropDownMenu';
import { FaUserAlt } from 'react-icons/fa';
import { Link, useMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../services/AuthSlice';
import { addBearerToken } from '../../store/baseHttp';

const Profile = ({ firstname }) => {
    return (
        <div className="flex items-center space-x-1">
            <span className="p-2 bg-gray-700 rounded-full">
                <FaUserAlt className="w-4 h-4 text-purple-500" />
            </span>
            <span className="text-sm font-semibold">
                {firstname}
            </span>
        </div>
    )
}

const ProfileDropDown = () => {
    const dispatch = useDispatch();

    const { user, role, token } = useSelector(state => state.auth);

    const handleLogout = () => {
        addBearerToken(token);
        if (role === 'user') {
            dispatch(logOutUser({ path: 'user/logout' }));
        }

        if (role === 'manager') {
            dispatch(logOutUser({ path: 'manager/logout' }));
        }

        if (role === 'admin') {
            dispatch(logOutUser({ path: 'admin/logout' }));
        }

    }

    return (
        <DropDownMenu menu={<Profile firstname={user?.first_name} />}>
            <div>
                <div className="w-32 py-2 border-b border-gray-700">
                    {user && <h3 className="text-sm font-bold tracking-wide">{user.first_name} {user.last_name}</h3>}
                    <p className="text-xs italic font-semibold text-gray-500 uppercase">{role}</p>
                </div>
                <div className="flex flex-col py-2 space-y-1">
                    <Link to="/" className="font-semibold text-blue-700">
                        Profile
                    </Link>
                    <button onClick={handleLogout} className="font-semibold text-blue-700 outline-none focus:outline-none hover:outline-none max-w-min whitespace-nowrap">
                        Log Out
                    </button>
                </div>
            </div>
        </DropDownMenu>
    )
}

export default ProfileDropDown;