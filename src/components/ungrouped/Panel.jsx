const Panel = ({ title, children }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-sm shadow-lg col-span-full xl:col-span-8">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">{title} {!title && (<span>No Title</span>)}</h2>
            </header>
            <div className="p-3">
                {children}
            </div>

        </div>
    )
}

export default Panel