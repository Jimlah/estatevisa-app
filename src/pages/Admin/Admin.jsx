import { Outlet } from "react-router"

const Admin = () => {
    return (
        <div className="w-full h-full">
            <Outlet />
        </div>
    )
}

export default Admin;