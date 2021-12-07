import DropDownMenu from './DropDownMenu';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="flex items-center space-x-1">
            <span className="p-2 bg-gray-900 rounded-full" F>
                <FaUserAlt className="w-4 h-4 text-purple-500" />
            </span>
            <span className="text-sm font-semibold">
                Abdullahi
            </span>
        </div>
    )
}

const ProfileDropDown = () => {
    return (
        <DropDownMenu menu={<Profile />}>
            <div>
                <div className="w-32 py-2 border-b border-gray-700">
                    <h3 className="text-sm font-bold tracking-wide">Abdullahi Jimoh</h3>
                    <p className="text-xs italic font-semibold text-gray-500">Administrator</p>
                </div>
                <div class="flex flex-col py-2 space-y-1">
                    <Link to="/" className="font-semibold text-blue-700">
                        Profile
                    </Link>
                    <button className="font-semibold text-blue-700 outline-none focus:outline-none hover:outline-none max-w-min whitespace-nowrap">
                        Log Out
                    </button>
                </div>
            </div>
        </DropDownMenu>
    )
}

export default ProfileDropDown;