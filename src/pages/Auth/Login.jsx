import InputField from "../../components/Form/InputField"
import InputPasswordField from "../../components/Form/InputPasswordField"
import { Link } from 'react-router-dom';
import SelectOption from './../../components/Form/SelectOption';

const Login = () => {
    return (
        <div className="w-full h-full">
            <h2 className="text-2xl font-bold text-center text-purple-600 text-opacity-70">Login</h2>
            <form action="#" className="flex flex-col items-start justify-start w-full">
                <InputField name="email" type="email" placeholder="Email" label="Email" />
                <InputPasswordField name="password" type="password" placeholder="Password" label="Password" />
                <SelectOption name="type" options={['Manager', 'Admin', 'User']} label="Login As" />
                <div className="flex items-center justify-between w-full">
                    <Link to="/auth/forget-password" className="text-sm font-semibold tracking-wide text-purple-500 hover:text-purple-600" >Forgot password?</Link>
                    <button className="px-4 py-2 font-bold text-white bg-purple-600 hover:bg-purple-700">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login