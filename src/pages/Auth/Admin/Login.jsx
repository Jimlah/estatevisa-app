import InputField from "../../components/Form/InputField"
import InputPasswordField from "../../components/Form/InputPasswordField"
import { Link } from 'react-router-dom';
import SelectOption from './../../components/Form/SelectOption';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from './../../services/AuthSlice';
import { FaCircleNotch } from "react-icons/fa";
import useForm from "../../hooks/useForm";

const Login = () => {

    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);

    const initialState = { email: 'abdullahij951@gmail.com', password: 'pass', };
    const [values, setValues] = useForm(initialState);



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    return (
            <form onSubmit={handleSubmit} className="flex flex-col items-start justify-start w-full">
                <InputField name="email" type="email" placeholder="Email" label="Email" error={error?.email} onChange={setValues} autoFocus={true} />
                <InputPasswordField name="password" type="password" placeholder="Password" label="Password" error={error?.password} onChange={setValues} />
                <div className="flex items-center justify-between w-full">
                    <Link to="/auth/forget-password" className="text-sm font-semibold tracking-wide text-purple-500 hover:text-purple-600" >Forgot password?</Link>
                    <button className={`py-2 font-bold text-white px-4 disable:bg-purple-300 bg-purple-600 hover:bg-purple-700 disabled:hover:bg-purple-300 shadow-md shadow-purple-400 disabled:shadow-slate-200 rounded`} disabled={loading}>
                        {loading ? <span className="flex items-center space-x-2">
                            <FaCircleNotch className="w-4 h-4 text-purple-900 animate-spin" />
                            <span className="text-white">
                                Loading...
                            </span>
                        </span> : <span>Login</span>}
                    </button>
                </div>
            </form>
    )
}

export default Login