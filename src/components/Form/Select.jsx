const Select = ({ label, name, error, children, register, ...props }) => {
    return (
        <div className="w-full mb-5">
            <label htmlFor={name} className="text-sm font-bold tracking-wide text-gray-900">{label}</label>
            <select name={name}
                {...register}
                {...props}
                className="w-full overflow-hidden font-medium border-b border-purple-500 hover:border-b-2 h-11 focus:outline-none">
                <option value="select" disabled >Select</option>
                {children}
            </select>
            {error && <span className="mt-1 text-xs font-semibold tracking-wide text-red-500 whitespace-nowrap">{error}</span>}
        </div>
    )
}

export default Select;