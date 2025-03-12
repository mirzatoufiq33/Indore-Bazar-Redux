import React from 'react'
import { useDispatch } from 'react-redux'
import { Remove } from '../feature/Cart/CartSlice'

const CartItems = ({Cart}) => {

const dispatch = useDispatch()
console.log(Cart.id)
  

  return (
    <div className=' my-3 bg-white flex items-center space-x-10 p-5 rounded-md border shadow-sm'>


    <img src={Cart?.image} className='w-32' alt="" />
    <span>
    <h1 className='text-2xl font-bold my-2'>Product Name : {Cart?.title}</h1>
    <h2 className='text-xl font-bold my-2'>{Cart?.price}</h2>
    <h3 className='text-sm font-bold my-2'>Qty : {Cart?.quantity}</h3>
    <button onClick={() => dispatch(Remove(Cart.id))} className='bg-red-500 text-white py-0.5 px-2 rounded-md my-3'>
       Remove
    </button>
     </span>


</div>
  )
}

export default CartItems