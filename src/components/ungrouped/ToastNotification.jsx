import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { clearToast } from "../../store/ToastSlice";


// Write a functions that checks if the type is success or error and returns the appropriate className
const getClassName = (type) => {
    let bgClassName = "";
    switch (type) {
        case "success":
            bgClassName = "bg-green-500";
            break;
        case "warning":
            bgClassName = "bg-yellow-500";
            break;
        case "info":
            bgClassName = "bg-blue-500";
            break;
        default:
            bgClassName = "bg-red-500";
            break;
    }
    return bgClassName;
}


const ToastNotification = () => {

    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const { message, type } = useSelector(state => state.toast);

    const hide = () => {
        setShow(false);
        dispatch(clearToast());
    }

    useEffect(() => {
        if (message) {
            setShow(true);
            setTimeout(() => {
                hide();
            }, 3000);
        }
        // eslint-disable-next-line
    }, [message])

    return (
        <div className={`fixed z-50 flex items-center justify-start max-w-sm px-4 py-2 space-x-2 font-semibold text-white  top-16 right-5 min-w-max shadow-lg  shadow-gray-100 rounded ${show ? getClassName(type) : "hidden"}`}>
            <AiOutlineInfoCircle className="w-6 h-6" />
            <p className="text-sm">
                {message}
            </p>
            <button onClick={hide}>
                <FaTimes />
            </button>
        </div>
    )
}

export default ToastNotification;