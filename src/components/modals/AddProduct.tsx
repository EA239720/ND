import React, { useState } from 'react';

import Product from '../../interfaces/product';
import PList from '../../interfaces/pList';

interface AddProductProps {
  isOpen: boolean
  onClose: () => void
  products: Product[]
  product: React.Dispatch<React.SetStateAction<PList[]>>
  productList: PList[]
  branch: string,
  total: number,
  setTotal: React.Dispatch<React.SetStateAction<number>> 
}

const AddProduct: React.FC<AddProductProps> = ({ isOpen, onClose, products, product, productList, branch, total, setTotal }) => {
    const [cantity, setCantity] = useState('1');
    const [arrayShow, setArrayShow] = useState<Product[]>([])

    const stock = 'border-2 border-blue-400 hover:bg-blue-400 hover:text-white';
    const noStock = 'text-white bg-red-400 border-2 border-red-400 cursor-not-allowed';

    const addProduct = (id: number, price: string) => {
        const values: PList = {
            id: id,
            cant: cantity,
            price: price
        }

        setTotal(total + (+values.cant * +values.price))

        product([...productList, values])

        setCantity('1')
        clear()
    }

    const searchProduct = (product: string) => {
      if(product === '') {
          setArrayShow([]);
      } else {
          const aux = products.filter((pdt: Product) => {
              if(pdt.name.toUpperCase().indexOf(product.toUpperCase()) > -1) {
                  return pdt;
              }  
          });

          setArrayShow(aux);
      }
    }

    const clear = () => {
      setCantity('1')
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
        <h2 className="text-center text-xl font-semibold mb-4">Select a Product</h2>
        <label htmlFor="Search" className="font-OSSBold text-slate-400">search Product</label>
        <input onChange={(e) => searchProduct(e.target.value)} id="Search" type="text" className='w-96 m-2 p-2 border-2 border-blue-400 hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' />
        <label htmlFor="Cant" className="font-OSSBold text-slate-400">Cantity</label>
        <input onChange={(e) => setCantity(e.target.value)} id="Cant" type="text" className='w-96 m-2 p-2 border-2 border-blue-400 hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' placeholder={cantity}/>
        <table className='border-2 border-blue-400'>
            <thead className='border-2 border-blue-400'>
                <tr>
                    <th className='text-center border-2 border-blue-400'>Name</th>
                    <th className='text-center border-2 border-blue-400'>Price</th>
                    <th className='text-center border-2 border-blue-400'>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                  arrayShow.length > 0 ?
                    arrayShow.filter((pdt: Product) => pdt.branchOffice.toString() === branch).map(pdt => (
                        <tr className={pdt.stock < parseInt(cantity) ? noStock : stock} onClick={() => {if(pdt.stock >= parseInt(cantity)){addProduct(pdt.id, pdt.price)}}} >
                            <td className='text-center border-2 border-blue-400'>{ pdt.name }</td>
                            <td className='text-center border-2 border-blue-400'>{ pdt.price }</td>
                            <td className='text-center border-2 border-blue-400'>{ pdt.stock }</td>
                        </tr>
                    ))
                    :
                    products.filter((pdt: Product) => pdt.branchOffice.toString() === branch).map(pdt => (
                        <tr className={pdt.stock < parseInt(cantity) ? noStock : stock} onClick={() => {if(pdt.stock >= parseInt(cantity)){addProduct(pdt.id, pdt.price)}}} >
                            <td className='text-center border-2 border-blue-400'>{ pdt.name }</td>
                            <td className='text-center border-2 border-blue-400'>{ pdt.price }</td>
                            <td className='text-center border-2 border-blue-400'>{ pdt.stock }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddProduct
