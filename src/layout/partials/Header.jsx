import { AiOutlineMenu } from 'react-icons/ai';
import NotificationDropDown from './../../components/dropdown/NotificationDropDown';
import ProfileDropDown from './../../components/dropdown/ProfileDropDown';

const Header = () => {
    return (
        <div className="sticky top-0 left-0 flex items-center justify-between px-4 py-3 bg-white">
            <div>
                <button className="text-gray-500 lg:hidden hover:text-gray-600">
                    <AiOutlineMenu className="w-6 h-6" />
                </button>
            </div>
            <div className="flex items-start justify-end space-x-2">
                <div>
                    <NotificationDropDown />
                </div>
                <div>
                    <ProfileDropDown />
                </div>
            </div>
        </div>
    )
}

export default Header;