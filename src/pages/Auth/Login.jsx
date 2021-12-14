import { Outlet } from 'react-router-dom';

const Login = () => (
    <div className="w-full h-full">
        <h2 className="text-2xl font-bold text-center text-purple-600 text-opacity-70">Login</h2>
        <Outlet />
    </div>
)

export default Login