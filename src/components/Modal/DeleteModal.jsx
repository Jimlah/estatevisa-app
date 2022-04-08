import Modal from './Modal';
import { useState, useEffect } from 'react';

const DeleteModal = ({ modal = false, toggle, deleteFunc, delId }) => {

    const handleDelete = (func) => {
        func();
        toggle();
    }

    return (<Modal
        isVisible={modal}
        title="Delete Estate"
        content="Are you sure you want to delete this estate?"
        footer={
            <>
                <button onClick={() => { handleDelete(deleteFunc(delId)) }} className="px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-600">
                    Delete
                </button>
                <button onClick={toggle} className="px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-600">
                    Cancel
                </button>
            </>
        }
        onClose={toggle}
    />)
}

export default DeleteModal;
