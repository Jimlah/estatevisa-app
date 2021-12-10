import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearToast } from "../../store/ToastSlice";

const ToastNotification = () => {

    const [show, setShow] = useState(true);
    const dispatch = useDispatch();

    const { message, type } = useSelector(state => state.toast)

    const hide = () => {
        setShow(false);
        dispatch(clearToast());
    }

    return (
        <div className={`fixed z-50 flex items-center justify-start max-w-sm px-4 py-2 space-x-2 font-semibold text-white bg-green-500 top-16 right-5 min-w-max shadow-lg  shadow-gray-100 rounded ${show ? "" : "hidden"}`}>
            <AiOutlineInfoCircle className="w-6 h-6" />
            <p className="text-sm">
                Welcome back user
            </p>
            <button onClick={hide}>
                <FaTimes />
            </button>
        </div>
    )
}

export default ToastNotification;