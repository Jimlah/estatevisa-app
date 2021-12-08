const SelectOption = ({ label, name, error, options, ...props }) => {
    return (
        <div className="w-full">
            <label htmlFor={name} className="text-sm font-semibold tracking-wide text-gray-900">{label}</label>
            <select name={name} {...props} className="w-full overflow-hidden font-medium border-b border-purple-500 hover:border-b-2 h-11 focus:outline-none">
                <option value="" disabled selected>Select</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error && <span className="mt-1 text-xs font-semibold tracking-wide text-red-500 whitespace-nowrap">{error}</span>}
        </div>
    )
}

export default SelectOption;