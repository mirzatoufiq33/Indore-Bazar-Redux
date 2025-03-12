import React, { useState } from 'react'

const BillCart = ({Carts}) => {

  const [selectShippingCarge , setSelectShippingCarge] = useState(0)

  const handleShippingCosts = (event) =>{
    setSelectShippingCarge(parseFloat(event.target.value))
  }

  const countTotal = () =>{
    const subTotal = Carts.reduce((p,c) => p + (c.price * c.quantity), 0)
    const tax = (subTotal * 18) / 100
    const shippingCost = selectShippingCarge
    const total = subTotal + tax + shippingCost
    return {subTotal , tax , shippingCost , total}
  }

  return (
    <div className='p-5 mt-3 bg-white rounded-md h-[50vh]'>
    <h1 className="text-4xl font-semibold"> Your Bill :{countTotal().subTotal.toFixed(2)}</h1>
    <h2 className='text-2xl'>TAX 18% : {countTotal().tax.toFixed(2)}</h2>

<div className="my-2">
  <label>Shipping Cost</label>
  <select onChange={handleShippingCosts} className='w-full p-3 bg-transparent'>
    <option value={0}>Upto 5 KM : Free</option>
    <option value={15}>Range 5 - 8 KM : 15.00 </option>
    <option value={25}>Range 9 - 15 KM : 25.00</option>
    <option value={40}>About 15 KM : 40.00</option>
  </select>
</div>

<h2 className="text-2xl">Shipping Cost : {countTotal().shippingCost.toFixed(2)}</h2>

    <h2 className='text-2xl my-2'>Total Amount : {countTotal().total.toFixed(2)}</h2>
    <button className='w-full rounded-md bg-[#928dab]  border border-[#1f1c2c] hover:-translate-y-1 duration-150 py-3 px-5 mt-5'>
      <p className='font-bold text-white'>Pay Now</p></button>
  
  </div>
    
  )
}

export default BillCart