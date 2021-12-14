const InputField = ({ label, name, error, register, ...props }) => {
    // peer-focus-within:-mt-2 peer-focus-within:text-xs peer-focus-within:text-gray-900 peer-active:-mt-2 peer-active:text-xs
    return (
        <div className="relative w-full my-5">
            <input name={name} id={name} {...props} {...register}  className={`border-b w-full h-11 flex items-center focus:outline-none focus-within:border-b-2 font-medium peer placeholder-transparent tracking-wide ${error ? "border-red-500" : "border-purple-500"}`} placeholder={label} />
            <label htmlFor={name} className="absolute top-0 left-0 block -mt-5 text-sm font-semibold tracking-wide text-gray-900 uppercase transition-all duration-500 ease-out delay-200 appearance-none placeholder-shown:text-gray-400 peer-placeholder-shown:mt-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-medium peer-placeholder-shown:text-lg peer-focus-within:-mt-5 peer-focus-within:text-sm peer-focus-within:font-bold peer-focus-within:text-gray-900">{label}</label>
            {error && <span className="mt-1 text-xs font-semibold tracking-wide text-red-500 whitespace-nowrap">{error}</span>}
        </div>
    )
}

export default InputField;