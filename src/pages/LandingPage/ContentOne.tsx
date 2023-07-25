import LandingMenu from "../../components/Menus/LandingMenu";

function ContentOne() {
    return (
        <div className="w-screen h-min-screen">
            <LandingMenu />
            <div className=" w-4/12 sm:w-1/2 md:w-1/2 lg:w-4/12 px-24 flex flex-col">
                <h1 className="font-OSEBold text-6xl">Content1</h1>
                <p className="pt-8 pb-24 font-OSSBold text-l">
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua.
                </p>
            </div>
            <div className="px-24 flex flex-row sm:flex-col md:flex-col lg:flex-row space-x-48 sm:space-x-2 md:space-x-2 lg:space-x-48">
                <div className="flex sm:flex-row md:flex-row lg:flex-col sm:justify-around md:justify-around lg:justify-center items-center">
                    <img className="sm:w-24 md:w-24 lg:w-96" src="src/assets/images/Content1.png" alt="Content1" />
                    <p className="pt-8 pb-24 font-OSSBold text-l">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.
                    </p>
                </div>
                <div className="flex sm:flex-row md:flex-row lg:flex-col sm:justify-around md:justify-around lg:justify-center items-center">
                    <img className="sm:w-24 md:w-24 lg:w-96" src="src/assets/images/Content1.png" alt="Content1" />
                    <p className="pt-8 pb-24 font-OSSBold text-l">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.
                    </p>
                </div>
                <div className="flex sm:flex-row md:flex-row lg:flex-col sm:justify-around md:justify-around lg:justify-center items-center">
                    <img className="sm:w-24 md:w-24 lg:w-96" src="src/assets/images/Content1.png" alt="Content1" />
                    <p className="pt-8 pb-24 font-OSSBold text-l">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.
                    </p>
                </div>
                <div className="flex sm:flex-row md:flex-row lg:flex-col sm:justify-around md:justify-around lg:justify-center items-center">
                    <img className="sm:w-24 md:w-24 lg:w-96" src="src/assets/images/Content1.png" alt="Content1" />
                    <p className="pt-8 pb-24 font-OSSBold text-l">
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContentOne;