const SubmitButton = ({ children }) => {
    return (
        <button type="submit" className="w-full my-3 text-lg font-bold text-white bg-purple-600 hover:bg-purple-700 h-11 focus:outline-none">
            {children}
        </button>
    )
};

export default SubmitButton;