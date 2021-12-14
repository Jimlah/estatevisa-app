import { Link } from 'react-router-dom';

import InputField from './../../../components/Form/InputField';
import { useForm } from 'react-hook-form';

const ForgetPassword = () => {

    const { handleSubmit, register } = useForm();

    return (
        <form className="flex flex-col items-start justify-start w-full" onSubmit={handleSubmit}>
            <InputField name="email" type="email" placeholder="Email" label="Email" register={register('email')} />
            <div className="flex items-center justify-between w-full">
                <Link to="/user/auth/login" className="text-sm text-purple-500 hover:text-purple-600" >
                    Login
                </Link>
                <button className="px-4 py-2 font-bold text-white bg-purple-600 hover:bg-purple-700">Recover Password</button>
            </div>
        </form>

    )
}

export default ForgetPassword