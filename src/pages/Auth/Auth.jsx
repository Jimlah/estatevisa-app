import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen px-5 bg-gray-200">
            <h1 className="mb-5 text-3xl font-bold text-purple-700">
                EstateVisa
            </h1>
            <div className="w-full max-w-sm p-6 bg-white rounded-md shadow">
                <Outlet />
            </div>
        </div>
    )
}

export default Auth;