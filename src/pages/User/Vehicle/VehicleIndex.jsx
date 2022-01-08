import { MdAdd } from "react-icons/md";
import Table from "../../components/Tables/Table";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBearerToken } from '../../store/baseHttp';
import usePaginate from '../../hooks/usePaginate';
import ActionButton from "../../components/dropdown/ActionButton";
import Modal from "../../components/Modal/Modal";
import { getAllVehicles } from "../../services/VehicleSlice";

const VehicleIndex = () => {

    const { token } = useSelector(state => state.auth);
    const { data } = useSelector(state => state.vehicle);
    const dispatch = useDispatch();

    const { url, ...paginate } = usePaginate('manager/vehicles');

    useEffect(() => {
        addBearerToken(token);
        dispatch(getAllVehicles({ path: url }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    const head = [
        "Name",
        "Type",
        "License Plate",
        'Model',
        'Color',
        "Actions",
    ];
    const [isModal, setIsModal] = useState(false);

    const column = [
        (e) => e.name,
        (e) => e.type,
        (e) => e.license_plate,
        (e) => e.model,
        (e) => e.color,
        (e) => <ActionButton
            view={`/manager/dashboard/vehicles/${e.id}`}
            edit={`/manager/dashboard/vehicles/${e.id}/edit`}
            del={() => setIsModal(true)}
        />,
    ]

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
            <Table
                title="List of Vehicles"
                head={head}
                data={data}
                column={column}
                paginate={paginate}
            />
            <Modal
                isVisible={isModal}
                title="Delete Estate"
                content="Are you sure you want to delete this estate?"
                footer={
                    <>
                        <button className="px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-600">
                            Delete
                        </button>
                        <button className="px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-600">
                            Cancel
                        </button>
                    </>
                }
                onClose={() => setIsModal(false)}
            />
        </div>
    )
}

export default VehicleIndex;