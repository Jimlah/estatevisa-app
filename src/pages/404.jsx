import { Link } from 'react-router-dom';

const ERROR404 = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full space-y-5">
            <p className="text-6xl font-bold text-purple-900 text-opacity-90 drop-shadow-2xl" >
                404
            </p>
            <p className='mb-10 text-2xl font-bold tracking-tight text-purple-700'>
                Page not found
            </p>
            <p>
                <Link to="/" className='px-6 py-3 text-lg font-bold text-white bg-purple-700 shadow-2xl hover:bg-purple-800 shadow-purple-400'>
                    Go to Home
                </Link>
            </p>
        </div>
    )
}

export default ERROR404;