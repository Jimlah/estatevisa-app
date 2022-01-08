import { Outlet } from "react-router"

const Visitor = () => {
    return (
        <div className="w-full h-full">
            <Outlet />
        </div>
    )
}

export default Visitor