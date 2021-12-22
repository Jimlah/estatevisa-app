import { Link } from 'react-router-dom';

const LoginModal = ({ toggle, modal }) => {

    return (
        <div className={`fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-full h-screen shadow-lg ${modal ? "" : "hidden"}`}>
            <div className="relative w-full max-w-xs p-6 space-y-5 bg-white rounded-sm">
                <button className='absolute top-0 right-0 p-1' onClick={toggle}>
                    cancel
                </button>
                <h2 className='text-xl italic font-bold tracking-wide text-center text-gray-900'>
                    Login As
                </h2>
                <div className='flex flex-col items-center justify-center w-full space-y-3'>
                    <Link to="user/auth/login" className='px-6 py-3 font-bold text-white bg-purple-500 rounded-full hover:bg-opacity-50'  >
                        User
                    </Link>
                    <Link to="manager/auth/login" className='px-6 py-3 font-bold text-white bg-indigo-500 rounded-full hover:bg-opacity-50'  >
                        Manager
                    </Link>
                    <Link to="admin/auth/login" className='px-6 py-3 font-bold text-white bg-blue-500 rounded-full hover:bg-opacity-50'  >
                        Admin
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginModal