import { BsThreeDotsVertical } from "react-icons/bs";
import DropDownMenu from "./DropDownMenu";
import { Link } from 'react-router-dom';

const ActionButton = ({ view, edit, del }) => {
    return (
        <DropDownMenu menu={<BsThreeDotsVertical />} >
            <div className="z-50 flex flex-col space-y-2 text-xs bg-white">
                {
                    view &&
                    <Link to={view} className="font-semibold tracking-wide text-gray-900 hover:text-purple-700">
                        View
                    </Link>
                }
                {edit &&
                    <Link to={edit} className="font-semibold tracking-wide text-gray-900 hover:text-purple-700">
                        Edit
                    </Link>
                }
                {del &&
                    <button onClick={del} className="font-semibold tracking-wide text-gray-900 hover:text-purple-700 focus:outline-none">
                        Delete
                    </button>
                }
            </div>
        </DropDownMenu>
    )
}

export default ActionButton;