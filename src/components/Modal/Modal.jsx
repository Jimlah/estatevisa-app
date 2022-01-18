import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isVisible, title, content, onClose, footer }) => {

    const keyDownHandler = ({ key }) => {
        if (key === 'Escape') {
            onClose();
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', keyDownHandler);
        return () => window.removeEventListener('keydown', keyDownHandler);
    })

    return !isVisible ? null : (
        <div className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full bg-transparent">
            <div className="relative flex-col items-center justify-center bg-white rounded-lg shadow-sm drop-shadow-md">
                <button onClick={onClose} className="absolute top-2 right-2 ">
                    <FaTimes />
                </button>
                <div className='p-4'>
                    <h2 className='text-sm font-bold text-center uppercase'>{title}</h2>
                </div>
                <div className='p-4 '>
                    {content}
                </div>
                {footer && <div className='flex items-center justify-center p-4 space-x-5'>{footer}</div>}
            </div>
        </div>
    )
}

export default Modal;