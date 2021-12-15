import { Link } from 'react-router-dom';

const Board = ({ title, icon, value, path, color }) => {

    return (
        <div className='w-full flex flex-col bg-white shadow-md overflow-hidden rounded-md my-5'>
            <div className='h-36 flex w-full flex-col p-6 space-y-4 items-start'>
                <span className='p-2  text-white' style={{ backgroundColor: color }}>
                    {icon}
                </span>
                <div className='flex flex-col space-y-0.5'>
                    <p className='font-bold text-gray-900'>{title}</p>
                    <span className='text-sm font-semibold'>{value}</span>
                </div>
            </div>
            <Link to={path} className={`px-6 py-4 text-white hover:bg-purple-600`} style={{ backgroundColor: color }} >
                View all
            </Link>
        </div>
    );
}

export default Board;