import InputField from "../../components/Form/InputField"
import InputPasswordField from "../../components/Form/InputPasswordField"
import { Link } from 'react-router-dom';
import SelectOption from './../../components/Form/SelectOption';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from './../../services/AuthSlice';
import { FaCircleNotch } from "react-icons/fa";

const Login = () => {

    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({
            path: "admin",
            payload: {
                email: 'abdullahij951@gmail.com',
                password: "password",
            }
        }))
    }

    return (
        <div className="w-full h-full">
            <h2 className="text-2xl font-bold text-center text-purple-600 text-opacity-70">Login</h2>
            <form onSubmit={handleSubmit} className="flex flex-col items-start justify-start w-full">
                <InputField name="email" type="email" placeholder="Email" label="Email" />
                <InputPasswordField name="password" type="password" placeholder="Password" label="Password" />
                <SelectOption name="type" options={['Manager', 'Admin', 'User']} label="Login As" />
                <div className="flex items-center justify-between w-full">
                    <Link to="/auth/forget-password" className="text-sm font-semibold tracking-wide text-purple-500 hover:text-purple-600" >Forgot password?</Link>
                    <button className={`py-2 font-bold text-white px-4 disable:bg-purple-300 bg-purple-600 hover:bg-purple-700 disabled:hover:bg-purple-300 `} disabled={loading}>
                        {loading ? <span className="flex items-center space-x-2">
                            <FaCircleNotch className="w-4 h-4 text-purple-900 animate-spin" />
                            <span className="text-white">
                                Loading...
                            </span>
                        </span> : <span>Login</span>}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login