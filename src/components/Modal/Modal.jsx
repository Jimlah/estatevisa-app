import { useEffect } from 'react';

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
            <span className="absolute top-0 right-0">
                Cancel
            </span>
            <div className="bg-white divide-y divide-gray-200">
                <div className='p-4'>
                    <h2>{title}</h2>
                </div>
                <div className='p-4'>
                    {content}
                </div>
                {footer && <div className='p-4'>{footer}</div>}
            </div>
        </div>
    )
}

export default Modal;