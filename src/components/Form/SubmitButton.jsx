import { FaCircleNotch } from 'react-icons/fa';

const SubmitButton = ({ loading=false, children }) => {
    return (
        <button className={`py-2 font-bold text-white px-4 disable:bg-purple-300 bg-purple-600 hover:bg-purple-700 disabled:hover:bg-purple-300 w-full`} disabled={loading}>
            {loading ? <span className="flex items-center space-x-2">
                <FaCircleNotch className="w-4 h-4 text-purple-900 animate-spin" />
                <span className="text-white">
                    Loading...
                </span>
            </span> : <span>Login</span>}
        </button>
    )
};

export default SubmitButton;