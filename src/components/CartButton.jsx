import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartButton = () => {


  const {user} = useSelector ((state) => state.auth );
  const {Carts} = useSelector(state => state.Cart)


if(!user) {

  return <>
  </>;
}


  return (
    <Link  to={"/cart"}>
    <div className={'p-3 fixed bottom-10 right-10 bg-[#928dab] flex items-center justify-center text-[#1f1c2c]  rounded-full  space-x-2'}>

<FaShoppingCart/> <p>Cart {Carts?.length}</p>
</div>
    </Link>
  )
}

export default CartButton   