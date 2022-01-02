import { Outlet } from "react-router"

const House = () => {
    return (
        <div className="w-full h-full">
            <Outlet />
        </div>
    )
}

export default House