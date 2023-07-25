import { useEffect, useState } from "react";

import AppMenu from "../../components/Menus/AppMenu"
import Sale from "../../interfaces/sale";
import Branch from "../../interfaces/branch";
import Client from "../../interfaces/client";
import DateFormat from "../../functions/DateFormat";
import { useNavigate } from "react-router-dom";

function Sales() {
    const [sales, setSales] = useState<Sale[]>([])
    const [clients, setClients] = useState<Client[]>([])
    const [branches, setBranches] = useState<Branch[]>([])
    const [arrayShow, setArrayShow] = useState<Sale[]>([])
    const navigate = useNavigate();

    const searchClient = (client: string) => {
      if(client === '') {
          setArrayShow([]);
      } else {
          const aux = sales.filter((sls: Sale) => {
              const auxC = clients.filter((ctl: Client) => {
                        if((ctl.name + ' ' + ctl.last).toUpperCase().indexOf(client.toUpperCase()) > -1) {
                            return ctl;
                        }  
                    });


              if(auxC.filter((ctl: Client) => ctl.RUT === sls.client)[0]) {
                return sls
              }
          });
          
          console.log(aux)

          setArrayShow(aux);
      }
    }
    
    useEffect(() => {
      const initialFetch = async () => { 

        const resC = await fetch("http://localhost:5000/api/clients", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const resB = await fetch("http://localhost:5000/api/offices", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

          const resS = await fetch("http://localhost:5000/api/sales", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

          setClients(await resC.json());
          setBranches(await resB.json());
          setSales(await resS.json());
        } 

      initialFetch();
    }, [])

    return (
        <div className='w-screen h-screen flex flex-row justify-start bg-slate-100'>
          <AppMenu />
          <div className="w-full min-h-full pt-16 flex flex-col justify-start items-center overflow-auto">
            {/* Title */}
            <div className='w-11/12 px-36 flex flex-row justify-center items-center'>
              <h1 className='w-full font-OSEBold text-5xl border-b-2 border-blue-200'>Sales History</h1>
            </div>
            {/* search bar */}
            <label htmlFor="Search" className="font-OSSBold text-slate-400">Search Client</label>
            <input onChange={(e) => searchClient(e.target.value)} id="Search" type="text" className='w-96 m-2 p-2 border-2 border-blue-400 hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' />
            {/* Table */}
            <table className='border-2 border-blue-400'>
              <thead className='border-2 border-blue-400'>
                  <tr>
                      <th className='p-2 font-OSEBold text-center border-2 border-blue-400'>ID</th>
                      <th className='p-2 font-OSEBold text-center border-2 border-blue-400'>Date</th>
                      <th className='p-2 font-OSEBold text-center border-2 border-blue-400'>Client</th>
                      <th className='p-2 font-OSEBold text-center border-2 border-blue-400'>Client Tel</th>
                      <th className='p-2 font-OSEBold text-center border-2 border-blue-400'>Banch Office</th>
                      <th className='p-2 font-OSEBold text-center border-2 border-blue-400'>Products</th>
                      <th className='p-2 font-OSEBold text-center border-2 border-blue-400'>Total</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    arrayShow.length > 0 ?
                      arrayShow.map((sls: Sale) => (
                            <tr className='border-2 border-blue-400 hover:bg-blue-400 hover:text-white' onClick={() => navigate(`/App/SaleDetails/${sls.id}`)}>
                                <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ sls.id }</td>
                                <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ DateFormat(sls.date.toLocaleString()) }</td>
                                <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ '[' + clients.filter((ctl:  Client) => ctl.RUT === sls.client)[0].RUT + '] ' + clients.filter((ctl:  Client) => ctl.RUT === sls.client)[0].name + ' ' + clients.filter((ctl:  Client) => ctl.RUT === sls.client)[0].last }</td>
                                <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ clients.filter((ctl:  Client) => ctl.RUT === sls.client)[0].tel }</td>
                                <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ branches.filter((brch:  Branch) => brch.id === sls.branch)[0].country }</td>
                                <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ sls.details.length }</td>
                                <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ (sls.total * +branches.filter((brch:  Branch) => brch.id === sls.branch)[0].change).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' ' + branches.filter((brch:  Branch) => brch.id === sls.branch)[0].currency }</td>
                            </tr>
                      ))
                      :
                      sales.map((sls: Sale) => (
                          <tr className='border-2 border-blue-400 hover:bg-blue-400 hover:text-white' onClick={() => navigate(`/App/SaleDetails/${sls.id}`)}>
                              <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ sls.id }</td>
                              <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ DateFormat(sls.date.toLocaleString()) }</td>
                              <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ '[' + clients.filter((ctl:  Client) => ctl.RUT === sls.client)[0].RUT + '] ' + clients.filter((ctl:  Client) => ctl.RUT === sls.client)[0].name + ' ' + clients.filter((ctl:  Client) => ctl.RUT === sls.client)[0].last }</td>
                              <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ clients.filter((ctl:  Client) => ctl.RUT === sls.client)[0].tel }</td>
                              <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ branches.filter((brch:  Branch) => brch.id === sls.branch)[0].country }</td>
                              <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ sls.details.length }</td>
                              <td className='p-8 font-OSSBold text-center border-2 border-blue-400'>{ (sls.total * +branches.filter((brch:  Branch) => brch.id === sls.branch)[0].change).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + ' ' + branches.filter((brch:  Branch) => brch.id === sls.branch)[0].currency }</td>
                          </tr>
                      ))
                  }
              </tbody>
          </table>
          </div>
        </div>
    )
}

export default  Sales