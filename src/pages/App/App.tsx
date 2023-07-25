import { useEffect, useState } from 'react'

import AppMenu from '../../components/Menus/AppMenu'
import List from '../../components/Lists/List'
import GetClient from '../../components/modals/GetClient'
import GetBranchOffice from '../../components/modals/GetBrachOffice'
import AddProduct from '../../components/modals/AddProduct'

import Asset from '../../assets/images/AppAsset1.png'
import PList from '../../interfaces/pList'
import Sale from '../../interfaces/sale'
import Client from '../../interfaces/client'
import Branch from '../../interfaces/branch'
import Product from '../../interfaces/product'
import { Link } from 'react-router-dom'

function App() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [codeError, setCodeError] = useState(0)
  const [clients, setClients] = useState<Client[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [branches, setBranches] = useState<Branch[]>([])
  const [auxId, setAuxId] = useState(0)
  const [client, setClient] = useState('')
  const [branch, setBranch] = useState('')
  const [change, setChange] = useState(0)
  const [total, setTotal] = useState(0)
  const [modalClient, setModalClient] = useState(false)
  const [modalBranch, setModalBranch] = useState(false)
  const [modalProduct, setModalProduct] = useState(false)
  const [productList, setProductList] = useState<PList[]>([])

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

        const resS = await fetch("http://localhost:5000/api/sales", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        setClients(await resC.json());
        setProducts(await resP.json());
        setBranches(await resB.json());

        const aux = await resS.json();

        setAuxId(aux.length)
      }

    initialFetch();
  }, []);

  const registerSale = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false)
    setError(false)

    if(client === '') {
      setError(true)
      setCodeError(1)
    } else if(branch === '') {
      setError(true)
      setCodeError(2)
    } else if(productList.length === 0) {
      setError(true)
      setCodeError(3)
    } else {
      const values: Sale = {
        id: auxId + 1,
        date: new Date(),
        client: client,
        branch: branch,
        details: productList,
        total: total
      }
  
      const response = await fetch("http://localhost:5000/api/newsale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( values )
      });
  
      if(response.ok) {
        setAuxId(auxId + 1)
        setSuccess(true);
        setClient('')
        setBranch('')
        setProductList([])
        setTotal(0)
      } else {
        setError(true)
        setCodeError(4)
      }
    }
  }

  return (
    <div className='w-screen h-screen flex flex-row justify-start bg-slate-100'>
      <GetClient isOpen={modalClient} onClose={() => setModalClient(false)} clients={clients} client={setClient}/>
      <GetBranchOffice isOpen={modalBranch} onClose={() => setModalBranch(false)} branches={branches} branch={setBranch} change={setChange} />
      <AddProduct isOpen={modalProduct} onClose={() => setModalProduct(false)} products={products} product={setProductList} productList={productList} branch={branch} total={total} setTotal={setTotal} />
      <AppMenu />
      <div className="w-full min-h-full pt-16 flex flex-col justify-start overflow-auto">
        {success ? <h1 className="w-1/2 py-4 self-center font-OSBold text-white text-center bg-green-400 rounded-md">Sale added successfully.</h1> : null}
        {error ? 
          codeError === 1 ? <h1 className="w-1/2 py-4 self-center font-OSBold text-white text-center bg-red-400 rounded-md">No client selected.</h1> 
            : codeError === 2 ? <h1 className="w-1/2 py-4 self-center font-OSBold text-white text-center bg-red-400 rounded-md">No branch office selected.</h1> 
              : codeError === 3 ? <h1 className="w-1/2 py-4 self-center font-OSBold text-white text-center bg-red-400 rounded-md">Should select one product at least.</h1> 
                : <h1 className="w-1/2 py-4 self-center font-OSBold text-white text-center bg-red-400 rounded-md">Unexpected Error, try again.</h1>
        : null}
        {/* Title */}
        <div className='w-11/12 px-36 flex flex-row justify-center items-center'>
          <img src={Asset} alt="Asset1" className='h-24' />
          <h1 className='w-full font-OSEBold text-5xl border-b-2 border-blue-200'>New Sale</h1>
        </div>
        <form method="POST" onSubmit={registerSale} className='space-y-24'>
            {/* Document */}
            <div className='w-11/12 mt-24  px-36 flex flex-col justify-center items-center'>
                <h1 className='w-full font-OSBold text-2xl border-b-2 border-blue-200'>Document</h1>
                <div className='w-full flex sm:flex-col md:flex-col lg:flex-row justify-around items-center'>
                    <div  className='flex flex-col justify-start'>
                        <label htmlFor="client" className="font-OSSBold text-slate-400">Client</label>
                        <div className='space-x-4'>
                            <input id="client" onClick={() => setModalClient(true)} className='w-96 p-2 hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_ctl" type="text" value={client === '' ? '' : clients.filter(ctl => ctl.RUT === client).map(ctl => ctl.name + ' ' + ctl.last)}/>
                            <Link to='/App/Client' className='w-9 h-9 p-2 font-OSEBold text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-500'>+</Link>
                        </div>
                    </div>
                    <div  className='flex flex-col justify-start'>
                        <label htmlFor="office" className="font-OSSBold text-slate-400">Branch office</label>
                        <input id="office" onClick={() => setModalBranch(true)} className='w-96 p-2 hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_ofc" type="text" value={branch === '' ? '' : branches.filter(brch => brch.id.toString() === branch).map(brch => brch.country)}/>
                    </div>
                    <div  className='flex flex-col justify-start'>
                        <label htmlFor="currency" className="font-OSSBold text-slate-400">Currency</label>
                        <input id="currency" className='w-48 p-2 cursor-not-allowed hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_cur" type="text" value={branch === '' ? '' : branches.filter(brch => brch.id.toString() === branch).map(brch => brch.currency)}/>
                    </div>
                </div>
            </div>
            {/* Details */}
            <div className='w-11/12 px-36 flex flex-col justify-center items-center'>
                <h1 className='w-full font-OSBold text-2xl border-b-2 border-blue-200'>Details</h1>
                {
                  productList.length !== 0 ?
                    productList.map((pl: PList) => (
                      <List product={ products.filter(pdt => pdt.id === pl.id)[0]} list={pl} allProducts={productList} setAll={setProductList} total={total} setTotal={setTotal} change={change}/>
                    ))
                    : null
                }
                <input onClick={(e) => {e.preventDefault(); setModalProduct(true);}} className="mt-8  ml-8 px-10 py-2 self-start font-OSSBold text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-500" type="submit" value="Add"/>
                <div  className='mr-36 flex flex-row justify-start items-center self-end'>
                    <label htmlFor="total" className="font-OSSBold text-slate-400">Total:</label>
                    <input id="total" className='w-36 p-2 cursor-not-allowed hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_cur" type="text" value={(+total * change).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}/>
                    <label className="font-OSSBold text-slate-400">{branch === '' ? null : branches.filter(brch => brch.id.toString() === branch).map(brch => brch.currency)}</label>
                </div>
            </div>
            {/* Button */}
            <div className='w-11/12 px-36 pb-12 flex flex-col justify-center items-end space-y-4'>
                <h1 className='w-full font-OSBold text-2xl border-b-2 border-blue-200'></h1>
                <input className="px-10 py-2 font-OSSBold text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-500" type="submit" value="Save"/>
            </div>
        </form>
      </div>
    </div>
  )
}

export default App
