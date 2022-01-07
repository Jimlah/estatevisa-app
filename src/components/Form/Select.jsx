const Select = ({ label, name, error, children, ...props }) => {
    return (
        <div className="w-full mb-5">
            <label htmlFor={name} className="text-sm font-bold tracking-wide text-gray-900">{label}</label>
            <select name={name}
             {...props} className="w-full overflow-hidden font-medium border-b border-purple-500 hover:border-b-2 h-11 focus:outline-none">
                <option value="select" disabled selected >Select</option>
                {children}
            </select>
            {error && <span className="mt-1 text-xs font-semibold tracking-wide text-red-500 whitespace-nowrap">{error}</span>}
        </div>
    )
}

export default Select;