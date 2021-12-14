import { Link } from 'react-router-dom';
import InputField from './../../../components/Form/InputField';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from './../../../services/AuthSlice';
import { FaCircleNotch } from 'react-icons/fa';

const ForgetPassword = () => {

    const dispatch = useDispatch();
    const { handleSubmit, register } = useForm();
    const { loading, error } = useSelector(state => state.auth);

    const onSubmit = (data) => {
        dispatch(loginUser({
            path: "manager/forget-password",
            payload: data
        }))
    }

    return (
        <form className="flex flex-col items-start justify-start w-full" onSubmit={handleSubmit(onSubmit)}>
            <InputField name="email" type="email" placeholder="Email" label="Email" register={register('email')} error={error?.email} />
            <div className="flex items-center justify-between w-full">
                <Link to="/manager/auth/login" className="text-sm text-purple-500 hover:text-purple-600" >
                    Login
                </Link>
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

export default ForgetPassword