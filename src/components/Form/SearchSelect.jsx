const SearchSelect = ({ label, name, error, children, register, ...props }) => {
    return (
        <div className="w-full mb-5">
            <input className="w-full overflow-hidden font-medium border-b border-purple-500 hover:border-b-2 h-11 focus:outline-none" type="text" list="data"
                    list={name} />
            <datalist id={name} 
                {...register}
                {...props} >
                { children }
            </datalist>
            {error && <span className="mt-1 text-xs font-semibold tracking-wide text-red-500 whitespace-nowrap">{error}</span>}
        </div>
    )
}

export default SearchSelect;