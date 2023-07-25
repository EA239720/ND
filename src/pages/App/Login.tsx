import { useState } from "react";
import { useNavigate} from 'react-router-dom';

import { AiFillEye, AiFillEyeInvisible, AiOutlineLoading3Quarters } from "react-icons/ai"

import User from "../../interfaces/user";

function Login() {
    const navigate = useNavigate();

     const [load, setLoad] = useState(false)
     const [pass, setPass] = useState(false)
     const [error, setError] = useState(true)
     const [codeError, setCodeError] = useState(0)

    const login = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        setCodeError(0)
        setError(false)

        let response = 0;

        const form = e.target as  HTMLFormElement;
        
        if(form.usr_usuario.value === '' || form.usr_pass.value === '') {
            setCodeError(1)
            setError(true)
        } else {
            const res = await fetch("http://localhost:5000/api/users", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            
            const users = await res.json()

            users.every((usr: User) => {
                console.log(usr.login)
                console.log(usr.pass)
                console.log(form.usr_usuario)
                console.log(form.usr_pass)
                if(usr.login === form.usr_usuario.value && usr.pass === form.usr_pass.value) {
                    response = 1;
                    return false;
                }

                return true;
            });
            
            if(response !== 1) {
                setError(true)
                setCodeError(2)
            } else {
                navigate('/App/Home')
            }
        }

        setLoad(false)
    }

    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center">
        <div className="w-80 h-64 p-8 flex flex-col justify-between border-4 border-solid border-blue-400">
            {error ? <div className="font-OSBold text-white text-center bg-red-400 rounded-md">
                { codeError === 1 ? "All fields must be filled." : 
                 codeError === 2 ? "User or password incorrect." :null}
            </div> : null}
            <form method="POST" onSubmit={login} className="h-full flex flex-col justify-around items-center">
                <h1 className="font-OSEBold">Login</h1>
                <input className="border-2 border-solid border-blue-400 hover:text-white hover:bg-blue-400 focus:border-blue-400  focus:outline-none focus:border-blue-500 focus:rounded-lg" name="usr_usuario" type="text" placeholder="User" />
                <input className="border-2 border-solid border-blue-400 hover:text-white hover:bg-blue-400 focus:border-blue-400  focus:outline-none focus:border-blue-500 focus:rounded-lg" name="usr_pass" type={!pass ? "password" : "text"} placeholder="PassWord" />
                <div>
                    <button className="px-8 py-2 text-blue-400 hover:text-blue-300 active:text-blue-500" onClick={(e) => {e.preventDefault(), setPass(!pass)}}>{!pass ? <AiFillEye /> : <AiFillEyeInvisible />}</button>
                    { load ? 
                        <button className="px-6 py-2 font-OSSBold text-white bg-blue-500 cursor-not-allowed">{<AiOutlineLoading3Quarters className=" animate-spin" />}</button>
                        :
                        <input className="p-2 font-OSSBold text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-500" type="submit" value="Login"/>
                    }
                </div>
            </form>
        </div>
        </div>
    )
}

export default Login