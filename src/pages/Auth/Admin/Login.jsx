
import { Link, useNavigate } from 'react-router-dom';
import { FaCircleNotch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import InputPasswordField from './../../../components/Form/InputPasswordField';
import InputField from './../../../components/Form/InputField';
import { loginUser } from './../../../services/AuthSlice';
import { useEffect } from 'react';


const Login = () => {

    const { loading, error, user } = useSelector(state => state.auth);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(loginUser({
            path: "admin/login",
            payload: data
        }))
    }

    useEffect(() => {
        if (user) {
            navigate("/admin/dashboard")
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-start w-full">
            <InputField name="email" type="email" placeholder="Email" label="Email" error={error?.email} register={register('email')} autoFocus={true} />
            <InputPasswordField name="password" type="password" placeholder="Password" label="Password" error={error?.password} register={register('password')} />
            <div className="flex items-center justify-between w-full">
                <Link to="/user/auth/forget-password" className="text-sm font-semibold tracking-wide text-purple-500 hover:text-purple-600" >Forgot password?</Link>
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