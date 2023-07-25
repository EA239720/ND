import React from 'react';

import Product from '../../interfaces/product';
import PList from '../../interfaces/pList';

interface ListDetailsProps {
  product: Product
  list: PList
  change: number
}

const ListDetails: React.FC<ListDetailsProps> =({ product, list, change }) => {

    return (
        <div className='w-full mb-4 flex sm:flex-col md:flex-col lg:flex-row justify-around items-end'>
            <div  className='flex flex-col justify-start'>
                <label htmlFor="product" className="font-OSSBold text-slate-400">Product</label>
                <input id="product" className='w-96 p-2 font-OSSBold text-xl cursor-not-allowed hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_ctl" type="text" value={product.name} disabled/>
            </div>
            <div  className='flex flex-col justify-start'>
                <label htmlFor="quantity" className="font-OSSBold text-slate-400">Quantity</label>
                <input id="quantity" className='w-48 p-2 font-OSSBold text-xl cursor-not-allowedhover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_ofc" type="text" value={list.cant} disabled/>
            </div>
            <div  className='flex flex-col justify-start'>
                <label htmlFor="price" className="font-OSSBold text-slate-400">Price</label>
                <input id="price" className='w-48 p-2 font-OSSBold text-xl cursor-not-allowed hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_cur" type="text" value={(+product.price * change).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} disabled/>
            </div>
            <div  className='flex flex-col justify-start'>
                <label htmlFor="subtotal" className="font-OSSBold text-slate-400">Subtotal</label>
                <input id="subtotal" className='w-48 p-2 font-OSSBold text-xl cursor-not-allowed hover:text-white hover:bg-blue-400 focus:border-blue-400 focus:border-2 focus:outline-none focus:border-blue-500 focus:rounded-lg' name="vn_cur" type="text" value={((+list.cant * +list.price) * change).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} disabled/>
            </div>
        </div>
    )
}

export default ListDetails