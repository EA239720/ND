import { useState } from 'react'

import AppMenu from '../../components/Menus/AppMenu'
import Client from '../../interfaces/client'
import { Link } from 'react-router-dom'

function App() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [codeError, setCodeError] = useState(0)

  const registerClient = async (e : React.FormEvent<HTMLFormElement>)  => {
    e.preventDefault()

      const form = e.target as  HTMLFormElement;

      const values: Client = {
        "RUT":form.RUT.value,
        "name":form.names.value,
        "last":form.last.value,
        "dir":form.dir2.value,
        "tel":form.tel.value
      }

      const response = await fetch("http://localhost:5000/api/newclient", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( values )
      });
  
      if(response.ok) {
        setSuccess(true)
        form.reset()
      } else {
        setError(true)
        setCodeError(4)
      }    
  }

  return (
    <div className='w-screen h-screen flex flex-row justify-start bg-slate-100'>
      <AppMenu />
      <div className="w-full min-h-full pt-16 flex flex-col justify-start overflow-auto">
        {success ? <h1 className="w-1/2 py-4 self-center font-OSBold text-white text-center bg-green-400 rounded-md">Client registered successfully.</h1> : null}
        {error ? 
          codeError === 1 ? <h1 className="w-1/2 py-4 self-center font-OSBold text-white text-center bg-red-400 rounded-md">No client selected.</h1> 
            : codeError === 2 ? <h1 className="w-1/2 py-4 self-center font-OSBold text-white text-center bg-red-400 rounded-md">No branch office selected.</h1> 
              : codeError === 3 ? <h1 className="w-1/2 py-4 self-center font-OSBold text-white text-center bg-red-400 rounded-md">Should select one product at least.</h1> 
                : <h1 className="w-1/2 py-4 self-center font-OSBold text-white text-center bg-red-400 rounded-md">Unexpected Error, try again.</h1>
        : null}
        {/* Title */}
        <div className='w-11/12 px-36 flex flex-row justify-center items-center'>
          <h1 className='w-full font-OSEBold text-5xl border-b-2 border-blue-200'>New Client</h1>
        </div>
        <form method="POST" onSubmit={registerClient} className='space-y-24'>
            {/* Document */}
            <div className='w-11/12 mt-24  px-36 flex flex-col justify-center items-center'>
                <h1 className='w-full font-OSBold text-2xl border-b-2 border-blue-200'>Main Information</h1>
                <div className='w-full flex sm:flex-col md:flex-col lg:flex-row justify-around items-center'>
                    <label htmlFor="RUT" className="font-OSSBold text-slate-400">RUT</label>
                    <input id="RUT" name="RUT" type="text" className='w-96 m-2 p-2 border-2 border-blue-400 hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' />
                    <label htmlFor="names" className="font-OSSBold text-slate-400">NAME</label>
                    <input id="names" name="names" type="text" className='w-96 m-2 p-2 border-2 border-blue-400 hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' />
                    <label htmlFor="last" className="font-OSSBold text-slate-400">LAST</label>
                    <input id="last" name="last" type="text" className='w-96 m-2 p-2 border-2 border-blue-400 hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' />
                </div>
            </div>
            {/* Details */}
            <div className='w-11/12 px-36 flex flex-col justify-center items-center'>
                <h1 className='w-full font-OSBold text-2xl border-b-2 border-blue-200'>Details</h1>
                <div className='w-full flex sm:flex-col md:flex-col lg:flex-row justify-center items-center'>
                    <label htmlFor="dir2" className="font-OSSBold text-slate-400">DIR</label>
                    <input id="dir2" name="dir2" type="text" className='w-96 m-2 p-2 border-2 border-blue-400 hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' />
                    <label htmlFor="tel" className="font-OSSBold text-slate-400">TEL</label>
                    <input id="tel" name="tel" type="text" className='w-96 m-2 p-2 border-2 border-blue-400 hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' />
                </div>
            </div>
            {/* Button */}
            <div className='w-11/12 px-36 pb-12 flex flex-col justify-center items-end space-y-4'>
                <h1 className='w-full font-OSBold text-2xl border-b-2 border-blue-200'></h1>
                <div className='w-11/12 px-36 pb-12 flex flex-row justify-end items-end space-x-8'>
                    <Link to='/App/Home' className="px-10 py-2 font-OSSBold text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-500">Return</Link>
                    <input className="px-10 py-2 font-OSSBold text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-500" type="submit" value="Save"/>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default App
