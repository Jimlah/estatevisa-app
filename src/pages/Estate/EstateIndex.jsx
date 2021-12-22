import { MdAdd } from "react-icons/md";
import Table from "../../components/Tables/Table";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getAllEstates } from "../../services/EstateSLice";
import { useSelector, useDispatch } from 'react-redux';
import { addBearerToken } from './../../store/baseHttp';
import usePaginate from './../../hooks/usePaginate';

const EstateIndex = () => {

    const { token } = useSelector(state => state.auth);
    const { data } = useSelector(state => state.estate);
    const dispatch = useDispatch();

    const { url, ...paginate } = usePaginate('admin/estates');

    useEffect(() => {
        addBearerToken(token);
        dispatch(getAllEstates({ path: url }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    const head = [
        "Name",
        "Manager",
        "Code",
        "Created At",
        "Actions",
    ];

    const column = [
        (e) => <Link to={`/admin/dashboard/estates/${e.id}`}>{e.name}</Link>,
        (e) => `${e.manager[0].first_name} ${e.manager[0].last_name}`,
        (e) => e.code,
        (e) => e.created_at,
        (e) => "Actions",
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
                title="List of Estates"
                head={head}
                data={data}
                column={column}
                paginate={paginate}
            />
        </div>
    )
}

export default EstateIndex;