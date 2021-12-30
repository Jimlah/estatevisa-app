import { useState, useRef } from 'react';
import useClickOutside from './../../hooks/useClickOutside';

const DropDownMenu = ({ menu, children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const clickRef = useRef()

    useClickOutside(clickRef, () => setIsOpen(false));

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative" ref={clickRef}>
            <button onClick={handleClick} className="z-40 flex items-center outline-none focus:outline-none">
                {menu}
            </button>
            <div className={`absolute z-50 right-0 px-4 py-3 bg-white rounded-lg shadow ${isOpen ? "" : "hidden"}`}>
                {children}
            </div>
        </div>
    )
}

export default DropDownMenu