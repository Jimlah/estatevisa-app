import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavLink = ({ path, name, Icon, smallBar = false }) => {

    let resolved = useResolvedPath(path);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link to={path} className={`flex items-center justify-start px-3 py-2 space-x-1 text-sm font-semibold tracking-wider text-white rounded hover:bg-gray-900 group ${match ? "bg-gray-900" : ""}`}>
            <span className={` group-hover:text-purple-500 ${match ? "text-purple-500" : ""}`}>
                <Icon className={"h-6 w-6"} />
            </span>
            <span className={`text-gray-200 group-hover:text-white duration-150 delay-75 transition ${smallBar ? "hidden " : ""}  ${match ? "text-white" : ""} `}>
                {name}
            </span>
        </Link>
    )
};

export default NavLink;