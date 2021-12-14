import InputField from './../../components/Form/InputField';
import SelectOption from './../../components/Form/SelectOption';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    return (
        <form action="#" className="flex flex-col items-start justify-start w-full">
            <InputField name="email" type="email" placeholder="Email" label="Email" />
            <SelectOption name="type" options={['Manager', 'Admin', 'User']} label="Login As" />
            <div className="flex items-center justify-between w-full">
                <Link to="/auth/login" className="text-sm text-purple-500 hover:text-purple-600" >
                    Login
                </Link>
                <button className="px-4 py-2 font-bold text-white bg-purple-600 hover:bg-purple-700">Recover Password</button>
            </div>
        </form>
    )
}

export default ForgetPassword