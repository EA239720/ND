import { Link } from "react-router-dom"

function LandingMenu() {
    return (
        <div className="p-12 flex flex-row justify-end content-center space-x-12 font-OSBold">
            <Link to={"/Content1"} className="hover:underline decoration-blue-600 decoration-4 underline-offset-8">Content 1</Link>
            <Link to={"/Content2"} className="hover:underline decoration-blue-600 decoration-4 underline-offset-8">Content 2</Link>
            <Link to={"/App/login"} className=" text-blue-400 hover:text-blue-300 active:text-blue-500">Login</Link>
        </div>
    )
}

export default LandingMenu