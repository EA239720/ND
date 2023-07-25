import LandingMenu from "../../components/Menus/LandingMenu"
import Card from "../../components/Card"

function ContentTwo() {
    return (
        <div className="w-screen h-min-screen bg-local bg-cover bg-no-repeat bg-[url('src/assets/images/Content2.png')]">
            <LandingMenu />
            <div className="flex flex-row justify-end">
                <div className=" w-4/12 sm:w-2/3 md:w-2/3 lg:w-4/12 px-24 flex flex-col">
                    <h1 className="font-OSEBold text-6xl text-right">Content2</h1>
                    <p className="pt-8 pb-4 font-OSSBold text-l text-right">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <div className="w-screen sm:h-4/6 md:h-4/6 lg:h-4/6 px-24 flex flex-row sm:justify-center md:justify-center lg:justify-around">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default ContentTwo;