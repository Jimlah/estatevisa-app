import { MdShield, MdDashboard } from 'react-icons/md';
import { BsArrowBarLeft } from 'react-icons/bs';
import { useState } from 'react';
import NavLink from '../../components/ungrouped/NavLink';

const Navbar = (props) => {

    const [smallBar, setSmallBar] = useState(false);

    const handleSmallBar = () => {
        setSmallBar(!smallBar);
    }

    return (
        <nav className={`absolute z-40 flex flex-col w-64 h-full p-4 duration-200 ease-in-out transition -translate-x-64 bg-gray-800 lg:static lg:left-auto lg:translate-x-0 lg:top-auto ${smallBar ? "lg:max-w-min" : ""}`}>
            <div className={`flex mb-10 ${smallBar ? "items-start justify-center" : "px-3"}`}>
                <span className="">
                    <MdShield className={"h-8 w-8 text-purple-700"} />
                </span>
            </div>
            <div className="flex-1">
                <h2 className="pl-3 mb-3 text-xs font-bold text-gray-500 uppercase">Pages</h2>
                <ul className="flex flex-col space-y-1">
                    <li className="">
                        <NavLink path="/dashboard" name="Dashboard" Icon={MdDashboard} smallBar={smallBar} />
                    </li>
                    <li>
                        <NavLink path="/dashboard/estates" name="Estates" Icon={MdDashboard} smallBar={smallBar} />
                    </li>
                </ul>
            </div>
            <div className={`flex px-3 ${smallBar ? "" : "justify-end"}`}>
                <button className="text-gray-500" onClick={handleSmallBar}>
                    <BsArrowBarLeft className={`h-6 w-6 hover:text-gray-300 transformation ${smallBar ? "rotate-180" : ""}`} />
                </button>
            </div>
        </nav>
    )
};

export default Navbar;