import devices from '../../img/devices.svg';
import LoginModal from './LoginModal';
import useModal from './../../hooks/useModal';

const LandingPage = () => {

    const { modal: loginModal, toggle: toggleLoginModal } = useModal();


    return (
        <div className="flex flex-col w-full h-screen overflow-hidden bg-zinc-100">
            <nav className="flex items-center justify-between h-20 px-10">
                <h1 className="text-xl italic font-bold uppercase">
                    EstateVisa
                </h1>
                <button className="px-4 py-2 font-bold text-white rounded-sm bg-zinc-900 hover:bg-zinc-800" onClick={toggleLoginModal} >
                    Log In
                </button>
                <LoginModal toggle={toggleLoginModal} modal={loginModal} />
            </nav>
            <div className="flex-1 px-10 py-5">
                <div className="grid w-full h-full grid-cols-3 gap-10">
                    <div className="self-end col-span-1">
                        <h2 className="mb-5 text-5xl font-semibold tracking-tighter uppercase">
                            Application for managing your estates.
                        </h2>
                        <p className="text-sm font-medium leading-5 text-gray-700 text-opacity-80" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec eget ex euismod, consectetur nisi eu, congue urna.
                            Sed euismod, nisi eu congue urna, nunc nisl aliquet nunc,
                            euismod aliquam nunc nisl eu, congue urna.
                        </p>
                    </div>
                    <div className="relative w-full h-full col-span-2 overflow-hidden ">
                        <div className='w-full h-full bg-center bg-no-repeat bg-contain' style={{ backgroundImage: `url(${devices})` }} >

                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex items-center justify-between h-32 px-10">
                <div className="flex items-center">
                    <button className="px-6 py-4 mr-5 font-bold text-white bg-purple-500 rounded-sm shadow-lg shadow-purple-300 hover:bg-purple-600" >
                        Book a demo
                    </button>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-700 text-opacity-50">
                        copyright © 2020 EstateVisa. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;