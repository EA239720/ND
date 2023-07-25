import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import AppMenu from '../../components/Menus/AppMenu'
import ListDetails from '../../components/Lists/ListDetails'

import Asset from '../../assets/images/AppAsset1.png'
import PList from '../../interfaces/pList'
import Sale from '../../interfaces/sale'
import Client from '../../interfaces/client'
import Branch from '../../interfaces/branch'
import Product from '../../interfaces/product'

function SaleDetails() {
  const params = useParams()
  const [load, setLoad] = useState(true)
  const [clients, setClients] = useState<Client[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [branches, setBranches] = useState<Branch[]>([])
  const [sale, setSale] = useState<Sale>({
    id: 0,
    date: new Date,
    client: '',
    branch: '',
    details: [],
    total: 0
  })

  useEffect(() => {
    const initialFetch = async () => {
        const resC = await fetch("http://localhost:5000/api/clients", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const resP = await fetch("http://localhost:5000/api/products", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const resB = await fetch("http://localhost:5000/api/offices", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const resS = await fetch("http://localhost:5000/api/getsale", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({id: params.id})
        });

        const aux = await resS.json()

        setClients(await resC.json());
        setProducts(await resP.json());
        setBranches(await resB.json());

        setSale(aux[0]);
    
        setLoad(false)
      }

    initialFetch();
  }, []);

  if(load) {
    return (
      <div className='w-screen h-screen flex flex-row justify-start bg-slate-100'>
        <AppMenu />
        <div className="w-full min-h-full pt-16 flex flex-col justify-start overflow-auto">
          {/* Title */}
          <div className='w-11/12 px-36 flex flex-row justify-center items-center'>
            <img src={Asset} alt="Asset1" className='h-24' />
            <h1 className='w-full font-OSEBold text-5xl border-b-2 border-blue-200'>Sale Details</h1>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-screen h-screen flex flex-row justify-start bg-slate-100'>
      <AppMenu />
      <div className="w-full min-h-full pt-16 flex flex-col justify-start overflow-auto">
        {/* Title */}
        <div className='w-11/12 px-36 flex flex-row justify-center items-center'>
          <img src={Asset} alt="Asset1" className='h-24' />
          <h1 className='w-full font-OSEBold text-5xl border-b-2 border-blue-200'>Sale Details</h1>
        </div>
        <div className='space-y-24'>
            {/* Document */}
            <div className='w-11/12 mt-24  px-36 flex flex-col justify-center items-center'>
                <h1 className='w-full font-OSBold text-2xl border-b-2 border-blue-200'>Document</h1>
                <div className='w-full flex sm:flex-col md:flex-col lg:flex-row justify-around items-center'>
                    <div  className='flex flex-col justify-start'>
                        <label htmlFor="client" className="font-OSSBold text-slate-400">Client</label>
                        <div className='space-x-4'>
                            <input id="client" className='w-96 p-2 font-OSBold text-3xl cursor-not-allowedhover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_ctl" type="text" value={clients.filter(ctl => ctl.RUT.toString() === sale.client).map(ctl => ctl.name + ' ' + ctl.last)} disabled/>
                        </div>
                    </div>
                    <div  className='flex flex-col justify-start'>
                        <label htmlFor="office" className="font-OSSBold text-slate-400">Branch office</label>
                        <input id="office" className='w-96 p-2 font-OSBold text-3xl cursor-not-allowedhover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_ofc" type="text" value={branches.filter(brch => brch.id.toString() === sale.branch).map(brch => brch.country)} disabled/>
                    </div>
                    <div  className='flex flex-col justify-start'>
                        <label htmlFor="currency" className="font-OSSBold text-slate-400">Currency</label>
                        <input id="currency" className='w-48 p-2 font-OSBold text-3xl cursor-not-allowed hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_cur" type="text" value={branches.filter(brch => brch.id.toString() === sale.branch).map(brch => brch.currency)} disabled/>
                    </div>
                </div>
            </div>
            {/* Details */}
            <div className='w-11/12 px-36 flex flex-col justify-center items-center'>
                <h1 className='w-full font-OSBold text-2xl border-b-2 border-blue-200'>Details</h1>
                {
                    sale.details.map((pl: PList) => (
                      <ListDetails key={pl.id} product={ products.filter(pdt => pdt.id === pl.id)[0]} list={pl} change={parseInt(branches.filter((brch: Branch) => brch.id.toString() === sale.branch)[0].change)}/>
                    ))
                }
                <div  className='mr-36 flex flex-row justify-start items-center self-end'>
                    <label htmlFor="total" className="font-OSSBold text-slate-400">Total:</label>
                    <input id="total" className='w-36 p-2 font-OSBold text-3xl cursor-not-allowedhover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_cur" type="text" value={(sale.total * parseInt(branches.filter((brch: Branch) => brch.id.toString() === sale.branch)[0].change)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} disabled/>
                    <label className="font-OSSBold text-slate-400">{branches.filter(brch => brch.id.toString() === sale.branch).map(brch => brch.currency)}</label>
                </div>
            </div>
            {/* Button */}
            <div className='w-11/12 px-36 pb-12 flex flex-col justify-center items-end space-y-4'>
                <h1 className='w-full font-OSBold text-2xl border-b-2 border-blue-200'></h1>
                <Link to='/App/Sales' className="px-10 py-2 font-OSSBold text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-500">Return</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SaleDetails
