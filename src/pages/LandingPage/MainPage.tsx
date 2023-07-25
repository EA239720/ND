import { Link } from 'react-router-dom'

import LandingMenu from "../../components/Menus/LandingMenu";
import ContentOne from './ContentOne';
import ContentTwo from './ContentTwo';

function MainPage() {

    return (
        <>
            <div className="w-screen h-min-screen bg-local bg-right-top sm:bg-cover md:bg-cover lg:bg-contain bg-no-repeat bg-[url('src/assets/images/MainPage.png')]">
                <LandingMenu />
                <div className=" w-2/4 px-24 pt-48 flex flex-col">
                    <h1 className="font-OSEBold text-8xl">Lorem ipsum Design</h1>
                    <p className="pt-8 pb-24 font-OSSBold text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.
                    </p>
                </div>
                <Link to={'/App/login'} className="ml-24 px-8 py-4 bg-blue-400 font-OSEBold text-white hover:bg-blue-300 active:bg-blue-500">LOGIN</Link>
            </div>
            <ContentOne />
            <ContentTwo />
        </>
    )
}

export default MainPage;