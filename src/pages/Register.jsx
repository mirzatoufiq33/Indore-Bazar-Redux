import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../feature/auth/authSlice';
import { toast } from 'react-toastify';
import LoadingPage from '../components/LoadingPage';

const Register = () => {

  
  const {user , isSuccess , isLoading , isError , message } =  useSelector ((state ) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch()

  const [formData , setFormData  ] = useState({
    name : '',
    email : '',
    password : '',
    password2 : ''
  })

  const {name , email , password , password2} = formData;
  
  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
   
  });
  };


  const handleSubmit =  (e)=> {
   e.preventDefault()
      if(password !== password2){
        toast.error("Password Not Match!!", {position: "top-center" , theme: "dark" })
      }else {
        dispatch(registerUser(formData))
      }
    
  }

  useEffect (() => {
    if (user) {
      navigate("/") 
    }
    if (isError && message){
      toast.error(message ,  {
        position: 'top-center',
        theme : 'dark' ,
      });
    }
  } ,[user , isError , message])

  if(isLoading){
    return (
        <LoadingPage/>
    )
  }



  return (
    <div className='p-10  bg-[#1f1c2c]   flex items-center justify-center '>


     <div className="  flex flex-col md:flex-row  items-center justify-center space-y-10 md:space-y-0  bg-[#928dab]  rounded-xl w-[1000px]   m-6 md:m-0 ">

<div className="p-6 md:p-20">

    <h2 className="font-mono text-4xl font-bold mb-5">Register Here</h2>

    <p className="font-sans mb-12 font-light text-gray-600 max-w-sm">
    Create an account and start your shopping journey with us!!  </p>


    <form onSubmit={handleSubmit}>

      
    <input 

    name="name"
    value={name}
    onChange={handlechange}

    type="text" placeholder="Enter your Name " className=" border border-gray-300 w-full p-4 rounded-md placeholder:font-sans placeholder:font-light mb-4" />

        <input
        
    name="email"
    value={email}
    onChange={handlechange}

         type="email" placeholder="Enter your Email Address " className=" border border-gray-300 w-full p-4 rounded-md placeholder:font-sans placeholder:font-light mb-4" />

        <input
        
    name="password"
    value={password}
    onChange={handlechange}

         type="Password" placeholder="Enter your Password " className=" border border-gray-300 w-full p-4 rounded-md placeholder:font-sans placeholder:font-light mb-4" />

        <input
        
    name="password2"
    value={password2}
    onChange={handlechange}
    
         type="Password" placeholder="Comfirm  Password " className=" border border-gray-300 w-full p-4 rounded-md placeholder:font-sans placeholder:font-light mb-4" />


         
        <button 
        type="submit"
        className=" flex justify-center items-center space-x-3 bg-[#1f1c2c] text-white w-auto md:w-auto  p-3 font-sans font-bold rounded-md px-9 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border-transition hover:-translate-y-0.5 duration-200  ">
            <span>Register </span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7  pt-1"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="13" y1="18" x2="19" y2="12" />
            <line x1="13" y1="6" x2="19" y2="12" />
          </svg>

        </button>



    </form>

        <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
            
          
    </div>

   
   

  
</div>






<img src="https://img.freepik.com/premium-vector/virtual-shop-woman-looking-stilettos-internet-footwear-store-girl-with-numerous-bags-hand-looking-smartphone-touchscreen-flat-vector-illustration_776652-2648.jpg?semt=ais_hybrid" className="w-[430px] mr-8 rounded-xl hover:scale-105  duration-150"
alt=""/>









</div>

</div>
  )
}

export default Register