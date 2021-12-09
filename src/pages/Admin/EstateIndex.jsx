import { MdAdd } from "react-icons/md";
import Table from "../../components/Tables/Table";
import { Link } from 'react-router-dom';

const EstateIndex = () => {
    return (
        <div className="w-full h-full" >
            <div className="flex items-center mb-5">
                <Link to="create" className="flex items-center px-4 py-2 space-x-2 font-semibold text-white bg-purple-500 rounded hover:bg-purple-600">
                    <MdAdd className="w-6 h-6" />
                    <span>
                        Create
                    </span>
                </Link>
            </div>
            <Table title="List of Estates" />
        </div>
    )
}

export default EstateIndex;