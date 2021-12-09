import Navbar from './partials/NavBar';
import Header from './partials/Header';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
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