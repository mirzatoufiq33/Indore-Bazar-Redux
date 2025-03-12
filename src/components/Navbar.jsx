import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOutuser } from '../feature/auth/authSlice';

const Navbar = () => {

    const {user }  = useSelector((state) => state.auth);


   const dispatch = useDispatch()

   const handleLohOut = () => {
    dispatch(logOutuser())
   }


  return (
    <nav className=' p-5 bg-[#928dab] shadow-sm flex items-center justify-between '>

       <Link to={"/"}> <h1 className='font-bold text-xl uppercase text[#1f1c2c]  flex items-center'>Indore_Bazar</h1>
       </Link>

        <span className='flex space-x-3'>

{!user ? (<>

     <Link to={"/login"} className=' py-1 px-3  rounded-lg  bg-[#1f1c2c]  font-semibold  hover:-translate-y-0.5 duration-200  text-white'>Login</Link>

<Link to={"/register"} className=' py-1 px-3  rounded-lg  bg-[#1f1c2c]   font-semibold hover:-translate-y-0.5 duration-200   text-white'>Register</Link>
</>
) 
:
( 
<div className=' flex  space-x-5'>

<h2 className=' text-xl  text-[#1f1c2c] ' >Hellow_{user?.name}</h2>

<button className=' py-1 px-5  rounded-lg bg-red-600  text-white' 
onClick={handleLohOut}
>
  Logout</button>


</div>
)

}
       


       
        </span>


    </nav>
  )
}

export default Navbar