import Navbar from './partials/NavBar';

const Dashboard = () => {
    return (
        <div className="fixed top-0 left-0 flex justify-start w-full h-screen overflow-hidden text-gray-600 bg-gray-100 item-start">
            <Navbar />
            <main className="flex-1 w-full ">
                main
            </main>
        </div>
    )
};

export default Dashboard