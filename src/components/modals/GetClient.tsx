import React, { useState } from 'react';

import Client from '../../interfaces/client';

interface GetClientProps {
  isOpen: boolean
  onClose: () => void
  clients: Client[]
  client: React.Dispatch<React.SetStateAction<string>>
}

const GetClient: React.FC<GetClientProps> = ({ isOpen, onClose, clients, client  }) => {
    const [arrayShow, setArrayShow] = useState<Client[]>([])

    const addClient = (e: Client) => {
        client(e.RUT.toString())
        clear()
    }

    const searchClient = (client: string) => {
      if(client === '') {
          setArrayShow([]);
      } else {
          const aux = clients.filter((ctl: Client) => {
              if((ctl.name + ' ' + ctl.last).toUpperCase().indexOf(client.toUpperCase()) > -1) {
                  return ctl;
              }  
          });

          setArrayShow(aux);
      }
    }

    const clear = () => {
        setArrayShow([])
        onClose()
    }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-gray-600 opacity-75"
        onClick={clear}
      ></div>
      <div className="max-h-96 bg-white p-8 flex flex-col justify-start rounded shadow-lg overflow-auto z-10">
        <h2 className="text-center text-xl font-semibold mb-4">Select a client</h2>
        <label htmlFor="Search" className="font-OSSBold text-slate-400">Search Client</label>
        <input onChange={(e) => searchClient(e.target.value)} id="Search" type="text" className='w-96 m-2 p-2 border-2 border-blue-400 hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' />
        <table className='border-2 border-blue-400'>
            <thead className='border-2 border-blue-400'>
                <tr>
                    <th className='text-center border-2 border-blue-400'>RUT</th>
                    <th className='text-center border-2 border-blue-400'>NAME</th>
                </tr>
            </thead>
            <tbody>
                {
                  arrayShow.length > 0 ?
                    arrayShow.map((ctl: Client) => (
                        <tr className='border-2 border-blue-400 hover:bg-blue-400 hover:text-white' onClick={() => addClient(ctl)}>
                            <td className='text-center border-2 border-blue-400'>{ ctl.RUT }</td>
                            <td className='text-center border-2 border-blue-400'>{ ctl.name + ' ' + ctl.last }</td>
                        </tr>
                    ))
                    :
                    clients.map((ctl: Client) => (
                        <tr className='border-2 border-blue-400 hover:bg-blue-400 hover:text-white' onClick={() => addClient(ctl)}>
                            <td className='text-center border-2 border-blue-400'>{ ctl.RUT }</td>
                            <td className='text-center border-2 border-blue-400'>{ ctl.name + ' ' + ctl.last }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetClient
