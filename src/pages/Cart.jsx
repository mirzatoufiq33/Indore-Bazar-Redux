import React, { useEffect } from 'react'
import CartItems from '../components/CartItems'
import BillCart from '../components/BillCart'
import { useSelector } from 'react-redux'
import LoadingPage from '../components/LoadingPage'
import notfound from "../assets/image.gif"

const Cart = () => {

    const {Carts , isLoading , isError , message} = useSelector(state => state.Cart)
    console.log(Carts)

    useEffect(() =>{
      if(isError || message){
        console.log(message)
      }
    })
  
    if(isLoading){
      <LoadingPage />
    }

    if(Carts.length === 0){
      return (
        <div className="min-h-[90vh]  bg-[#1f1c2c] flex items-center justify-center">
          <div className="text-center text-4xl text-[#928dab] flex flex-col items-center justify-center"><img src={notfound}  className='w-[200px]' alt="" /> No Items Found!!</div>
        </div>
      )
    }

  return (

    <div className='bg-[#1f1c2c] min-h-screen  container p-5 '>
 <div className='p-5 '>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
  
{Carts.map((Cart) => <CartItems key={Cart.id} Cart={Cart} /> )} 
</div>


<BillCart Carts={Carts}/>


 </div>
 

 </div>

</div>
  )
}

export default Cart