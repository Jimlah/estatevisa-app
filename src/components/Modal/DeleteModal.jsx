// import Modal from './Modal';
// import { useState } from 'react';

// const DeleteModal = ({isModal, delId, isModalFunc}) => {

//     const {isModal, setIsModal, delId, setDelId, isModalFunc} = useDeleteModal();

//     return (
       
//             <Modal
//                 isVisible={isModal}
//                 title="Delete Estate"
//                 content={"Are you sure you want to delete this estate?"}
//                 footer={
//                     <>
//                         <button onClick={del} className="px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-600">
//                             Delete
//                         </button>
//                         <button onClick={isModalFunc} className="px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-600">
//                             Cancel
//                         </button>
//                     </>
//                 }
//                 onClose={isModalFunc}
//             />
        
//     )
// };

// export default DeleteModal

// export const useDeleteModal = () => {
//     const [isModal, setIsModal] = useState(false);
//     const [delId, setDelId] = useState(0);

//     const isModalFunc = () => {
//         setIsModal(false);
//     }

//     return {
//         isModal,
//         setIsModal,
//         delId,
//         setDelId,
//         isModalFunc
//     }
// }