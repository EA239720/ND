import { Link, useLocation } from "react-router-dom"

import { AiOutlineUser, AiOutlineFolder, AiOutlineHome, AiOutlineStar } from "react-icons/ai"
import { BsSquare } from "react-icons/bs"

function AppMenu() {
    const location = useLocation()

    return  (
        <div className="w-14 h-screen pt-16 flex flex-col justify-start items-center font-OSBold text-white bg-blue-400">
            { location.pathname === "/App/Home" ? 
                <Link to={'#'} className="p-5 bg-blue-500 cursor-not-allowed"><AiOutlineHome /></Link> 
                :  <Link to={"/App/Home"} className="p-5 hover:bg-blue-300 active:bg-blue-500"><AiOutlineHome /></Link>
            }
            <Link to={"/App/Contruct"} className="p-5 hover:bg-blue-300 active:bg-blue-500"><AiOutlineStar /></Link>
            { location.pathname === "/App/Sales" ? 
                <Link to={'#'} className="p-5 bg-blue-500 cursor-not-allowed"><BsSquare /></Link> 
                 :  <Link to={"/App/Sales"} className="p-5 hover:bg-blue-300 active:bg-blue-500"><BsSquare /></Link>
            }
            <Link to={"/App/Contruct"} className="p-5 hover:bg-blue-300 active:bg-blue-500"><AiOutlineFolder /></Link>
            <Link to={"/App/Contruct"} className="p-5 hover:bg-blue-300 active:bg-blue-500"><AiOutlineUser /></Link>
        </div>
    )
}

export default AppMenu