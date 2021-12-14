import { Outlet } from 'react-router-dom';

const ForgetPassword = () => {
    return (
        <div className="w-full h-full">
            <h2 className="text-2xl font-bold text-center text-purple-600 text-opacity-70">Forget Password</h2>
            <Outlet />
        </div>
    )
}

export default ForgetPassword