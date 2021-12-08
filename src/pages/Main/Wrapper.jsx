import { Outlet } from "react-router-dom";

const Wrapper = (props) => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Wrapper