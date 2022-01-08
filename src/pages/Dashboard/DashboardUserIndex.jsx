import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { dashboard } from '../../services/DashboardSlice';
import { addBearerToken } from '../../store/baseHttp';
import { FiUsers } from 'react-icons/fi';
import Board from '../../components/ungrouped/Board';

const DashboardUserIndex = () => {

    const dispatch = useDispatch();

    const { token } = useSelector(state => state.auth);
    const { data } = useSelector(state => state.dashboard);

    useEffect(() => {
        addBearerToken(token);
        dispatch(dashboard({
            path: '/user/dashboard',
        }))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 sm:gap-5 '>
                <Board
                    title="House Count"
                    icon={<FiUsers className='w-6 h-6' />}
                    value={data?.houses_count}
                    path={'/houses'}
                    color='blue'
                />
                <Board
                    title="Vehicles Count"
                    icon={<FiUsers className='w-6 h-6' />}
                    value={data?.vehicles_count}
                    path={'/user'}
                    color='purple'
                />
                <Board
                    title="Visitors Count"
                    icon={<FiUsers className='w-6 h-6' />}
                    value={data?.visitors_count}
                    path={'/user'}
                    color='indigo'
                />
                <Board
                    title="Admin Count"
                    icon={<FiUsers className='w-6 h-6' />}
                    value={data?.admin_count}
                    path={'/user'}
                    color='violet'
                />
            </div>
        </div>
    )
}

export default DashboardUserIndex;