const SearchSelect = ({ label, name, error, children, register, ...props }) => {
    return (
        <div className="w-full mb-5">
            <input type="text" list="data" className="text-sm font-bold tracking-wide text-gray-900" />
            <datalist name={name}
                {...register}
                {...props}>
                { children }
            </datalist>
            {error && <span className="mt-1 text-xs font-semibold tracking-wide text-red-500 whitespace-nowrap">{error}</span>}
        </div>
    )
}

export default SearchSelect;