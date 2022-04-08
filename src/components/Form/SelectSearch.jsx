import InputField from "./InputField";
import { useState, useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import useFilter from '../../hooks/useFilter';

const SelectSearch = ({ name, label, error, data, register, ...props }) => {

    const [hide, setHide] = useState(true);
    const [value, setValue] = useState('');

    const selectRef = useRef();
    useClickOutside(selectRef, () => setHide(true));

    const { filteredData, setSearch } = useFilter('first_name', data ?? []);

    const handleClick = (e) => {
        e.preventDefault();

        setHide(false);

    }

    return (
        <div className="relative w-full mb-5" ref={selectRef}>
            <InputField
                name={name}
                label="User"
                onFocus={() => { setHide(false) }}
                error={error}
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
                value={value}
            />
            <select className="hidden" name="" id="" {...props}>
                {filteredData?.map((user, index) => (
                    <option key={index} value={user.id}>
                        {user.first_name} {user.last_name}
                    </option>
                ))}
            </select>
            <ul className={`${hide ? 'hidden' : 'absolute'} w-full mb-0 overflow-y-auto bg-white border divide-y max-h-56`}>
                {filteredData.map((user, index) => (
                    <li
                        key={index}
                        onClick={handleClick}
                        className="px-4 py-3 cursor-pointer hover:bg-gray-200"
                    >
                        {user.first_name} {user.last_name}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default SelectSearch;