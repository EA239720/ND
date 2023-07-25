import { Link } from 'react-router-dom'

function Construct() {
    return (
        <div className="w-screen h-screen bg-local bg-right-top bg-contain bg-no-repeat bg-[url('src/assets/images/MainPage.png')]">
            <div className="h-full flex flex-row justify-center items-center">
                <div className=" w-1/2 sm:w-2/3 md:w-2/3 lg:w-1/2 px-24 flex flex-col ">
                    <h1 className="font-OSEBold text-6xl text-center">En Contruccion</h1>
                    <Link to={'/App/Home'} className="px-8 py-4 bg-blue-400 font-OSEBold text-white text-center hover:bg-blue-300 active:bg-blue-500">REGRESAR</Link>
                </div>
            </div>
        </div>
    )
}

export default Construct;