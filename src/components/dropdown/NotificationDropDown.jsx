import DropDownMenu from './DropDownMenu';
import { FiMessageSquare } from 'react-icons/fi';

const NotificationIcon = () => {
    return (
        <span className="relative flex items-center justify-center p-1.5 text-purple-500 bg-gray-700 rounded-full outline-none hover:text-purple-600 focus:outline-none ">
            <FiMessageSquare className="w-5 h-5 fill-current" />
        </span>
    )
}


const NotificationMessage = () => {
    return (
        <div className="flex flex-col justify-start py-2 space-y-0.5">
            <h4 className="text-sm font-medium tracking-wide text-gray-900">
                New Estate Created by User
            </h4>
            <p className="text-xs font-normal leading-4 tracking-tight text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <span className="text-sm font-semibold text-gray-500">
                5:30pm
            </span>
        </div>
    )
}

const NotificationDropDown = () => {
    return (
        <DropDownMenu menu={<NotificationIcon />}>
            <div className="flex flex-col w-48 lg:w-64">
                <h3 className="font-semibold text-gray-500">Notifications</h3>
                <div className="flex flex-col w-full divide-y">
                    <NotificationMessage />
                    <NotificationMessage />
                </div>
            </div>
        </DropDownMenu>
    )
}

export default NotificationDropDown