import InputField from './InputField';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from 'react';

const InputPasswordField = ({ label, name, error, ...props }) => {

    // remove the type from the props
    const { type, ...rest } = props;

    const [showPassword, setShowPassword] = useState(type);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="relative">
            <InputField label={label} name={name} error={error} type={showPassword ? 'password' : 'text'} {...rest} />
            <button type="button" className="absolute top-0 right-0 mt-3" onClick={handleShowPassword}>
                {
                    showPassword ? <AiFillEyeInvisible className="w-6 h-6 text-gray-500 " /> : <AiFillEye className="w-6 h-6 text-gray-500 " />
                }
            </button>
        </div>
    )
}

export default InputPasswordField;