import Navbar from './partials/NavBar';
import Header from './partials/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import http from './../store/baseHttp';

const Dashboard = () => {

    const { user, token } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        http.interceptors.request.use(
            config => {
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }

        // eslint-disable-next-line
    }, [user]);

    return (
        <div className="fixed top-0 left-0 flex justify-start w-full h-screen overflow-hidden text-gray-600 bg-gray-100 item-start">
            <Navbar />
            <main className="flex-1 w-full overflow-y-auto">
                <Header />
                <div className="p-5 lg:p-10">
                    <Outlet />
                </div>
            </main>
        </div>
    )
};

export default Dashboard