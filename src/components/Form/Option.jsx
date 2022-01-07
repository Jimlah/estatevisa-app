const Option = ({ children, value, ...props }) => {
    return (
        <option className="" value={value} {...props}>
            {children}
        </option>
    )
}

export default Option;