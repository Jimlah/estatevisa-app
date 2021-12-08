const Col = ({ head = false, children }) => {
    if (head) {
        return (
            <th className="p-2">
                <div className="font-semibold text-left ">{children}</div>
            </th>
        );
    } else {
        return (
            <td className="p-2">
                <div className="text-left">{children}</div>
            </td>
        );
    }
}

export default Col;