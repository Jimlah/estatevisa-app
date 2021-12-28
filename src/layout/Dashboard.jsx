import Navbar from './partials/NavBar';
import Header from './partials/Header';
import { Outlet, useNavigate, useMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addBearerToken } from './../store/baseHttp';

const Dashboard = () => {

    const { user, token } = useSelector(state => state.auth);
    const [isClosed, setIsClosed] = useState(true);

    const handleMenuClick = () => {
        setIsClosed(!isClosed)
    }

    const navigate = useNavigate();

    useEffect(() => {
        addBearerToken(token);
        // eslint-disable-next-line
    }, []);

    const userMatch = useMatch('/user/dashboard');
    const managerMatch = useMatch('/manager/dashboard');
    const adminMatch = useMatch('/admin/dashboard');

    useEffect(() => {
        if (!user) {
            if (userMatch) {
                navigate('/user/auth/login');
            }

            if (managerMatch) {
                navigate('/manager/auth/login');
            }

            if (adminMatch) {
                navigate('/admin/auth/login');
            }
        }

        // eslint-disable-next-line
    }, [user]);

    return (
        <div className="fixed top-0 left-0 flex justify-start w-full h-screen overflow-hidden text-gray-600 bg-gray-100 item-start">
            <Navbar isClosed={isClosed} handleMenuClick={handleMenuClick} />
            <main className="flex-1 w-full overflow-y-auto">
                <Header handleMenuClick={handleMenuClick} />
                <div className="p-5 lg:p-10">
                    <Outlet />
                </div>
            </main>
        </div>
    )
};

export default Dashboard