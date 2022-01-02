import { MdShield, MdDashboard, MdRealEstateAgent } from 'react-icons/md';
import { BsArrowBarLeft, BsFillHouseDoorFill } from 'react-icons/bs';
import { useState } from 'react';
import NavLink from '../../components/ungrouped/NavLink';
import { RiAdminFill } from 'react-icons/ri'
import { AiFillCar } from 'react-icons/ai'
import { GiOpenGate } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { FaTimes } from 'react-icons/fa';

const Navbar = (props) => {

    const [smallBar, setSmallBar] = useState(false);

    const { role } = useSelector(state => state.auth);

    const handleSmallBar = () => {
        setSmallBar(!smallBar);
    }

    return (
        <nav className={`absolute z-40 flex flex-col w-64 h-full p-4 duration-200 ease-in-out transition  bg-gray-800 lg:static lg:left-auto lg:translate-x-0 lg:top-auto ${smallBar ? "lg:max-w-min" : ""} ${props.isClosed ? "-translate-x-64" : ""}`}>
            <div className={`flex mb-10 relative ${smallBar ? "items-start justify-center" : "px-3"}`}>
                <span className="">
                    <MdShield className={"h-8 w-8 text-purple-700"} />
                </span>
                <span className='absolute top-0 right-0 cursor-pointer'>
                    <FaTimes onClick={props.handleMenuClick} className={"h-4 w-4 text-gray-300"} />
                </span>
            </div>
            <div className="flex-1">
                <h2 className="pl-3 mb-3 text-xs font-bold text-gray-500 uppercase">Pages</h2>
                <ul className="flex flex-col space-y-2">

                    {
                        role === "admin" && (
                            <>
                                <li className="">
                                    <NavLink path="/admin/dashboard" name="Dashboard" Icon={MdDashboard} smallBar={smallBar} />
                                </li>
                                <li>
                                    <NavLink path="/admin/dashboard/estates" name="Estates" Icon={MdRealEstateAgent} smallBar={smallBar} />
                                </li>

                                <li>
                                    <NavLink path="/admin/dashboard/admins" name="Admins" Icon={RiAdminFill} smallBar={smallBar} />
                                </li>
                            </>
                        )
                    }
                    {
                        role === "manager" && (
                            <>
                                <li className="">
                                    <NavLink path="/manager/dashboard" name="Dashboard" Icon={MdDashboard} smallBar={smallBar} />
                                </li>
                                <li>
                                    <NavLink path="/manager/dashboard/houses" name="Houses" Icon={BsFillHouseDoorFill} smallBar={smallBar} />
                                </li>
                                <li>
                                    <NavLink path="/manager/dashboard/visitors" name="Visitors" Icon={GiOpenGate} smallBar={smallBar} />
                                </li>
                                <li>
                                    <NavLink path="/manager/dashboard/vehicles" name="Vehicles" Icon={AiFillCar} smallBar={smallBar} />
                                </li>
                            </>
                        )
                    }
                    {
                        role === "user" && (
                            <>
                                <li className="">
                                    <NavLink path="/user/dashboard" name="Dashboard" Icon={MdDashboard} smallBar={smallBar} />
                                </li>
                                <li>
                                    <NavLink path="/user/dashboard/houses" name="Houses" Icon={BsFillHouseDoorFill} smallBar={smallBar} />
                                </li>
                                <li>
                                    <NavLink path="/user/dashboard/visitors" name="Visitors" Icon={GiOpenGate} smallBar={smallBar} />
                                </li>
                                <li>
                                    <NavLink path="/user/dashboard/vehicles" name="Vehicles" Icon={AiFillCar} smallBar={smallBar} />
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
            <div className={`flex px-3 ${smallBar ? "" : "justify-end"}`}>
                <button className="hidden text-gray-500 lg:block" onClick={handleSmallBar}>
                    <BsArrowBarLeft className={`h-6 w-6 hover:text-gray-300 transformation ${smallBar ? "rotate-180" : ""}`} />
                </button>
            </div>
        </nav>
    )
};

export default Navbar;