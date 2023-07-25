import React from 'react';

import Product from '../../interfaces/product';
import PList from '../../interfaces/pList';

interface ListProps {
  product: Product
  list: PList
  allProducts: PList[]
  setAll: React.Dispatch<React.SetStateAction<PList[]>>
  total: number,
  setTotal: React.Dispatch<React.SetStateAction<number>> 
  change: number
}

const List: React.FC<ListProps> =({ product, list, allProducts, setAll, total, setTotal, change }) => {
    const deleteProduct = (product: number, price: number) => {
        const aux = allProducts.filter((pl: PList) => pl.id !== product);

        setAll(aux);

        setTotal(total - price)
    }

    return (
        <div className='w-full mb-4 flex sm:flex-col md:flex-col lg:flex-row justify-around items-end'>
            <div  className='flex flex-col justify-start'>
                <label htmlFor="product" className="font-OSSBold text-slate-400">Product</label>
                <input id="product" className='w-96 p-2 cursor-not-allowed hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_ctl" type="text" value={product.name}/>
            </div>
            <div  className='flex flex-col justify-start'>
                <label htmlFor="quantity" className="font-OSSBold text-slate-400">Quantity</label>
                <input id="quantity" className='w-48 p-2 cursor-not-allowed hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_ofc" type="text" value={list.cant}/>
            </div>
            <div  className='flex flex-col justify-start'>
                <label htmlFor="price" className="font-OSSBold text-slate-400">Price</label>
                <input id="price" className='w-48 p-2 cursor-not-allowed hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_cur" type="text" value={+product.price * change}/>
            </div>
            <div  className='flex flex-col justify-start'>
                <label htmlFor="subtotal" className="font-OSSBold text-slate-400">Subtotal</label>
                <input id="subtotal" className='w-48 p-2 cursor-not-allowed hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_cur" type="text" value={((+list.cant * +list.price) * change)}/>
            </div>
            <button className='w-9 h-9 font-OSEBold text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-500' onClick={(e) => {e.preventDefault(); deleteProduct(product.id, ((+list.cant * +list.price) * change))}}>X</button>
        </div>
    )
}

export default List