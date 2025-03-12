import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../feature/auth/authSlice';
import { toast } from 'react-toastify';
import LoadingPage from '../components/LoadingPage';


const Login = () => {
  const {user , isSuccess , isLoading , isError , message } =  useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [formData , setFormData  ] = useState({
   
    email : '',
    password : '',
    
  })

  const { email , password } = formData;

  const handlechange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
   
  });
  };


  const handleSubmit =  (e)=> {
   e.preventDefault() 
if (!email || !password) {
  toast.error("Please Fill All Details!!")
}
      dispatch(loginUser(formData))
  }

  useEffect (() => {
    if (isSuccess || user) {
      toast.success("✅ Logged in Successfully!");
      navigate("/");
    }

    if (isError) {
      if (message?.toLowerCase().includes("invalid") || message?.toLowerCase().includes("incorrect")) {
        toast.error("❌ Invalid Email or Password!");
      } else {
        toast.error(message || "❌ Login Failed! Please try again.");
      }
    }
  } ,[user , isError , message , isSuccess])

  if(isLoading){
    return (
     <LoadingPage/>
    )
  }








  return (
    <div className='p-5 min-h-screen bg-[#1f1c2c] flex  justify-center items-center'>
   
   <div class="  flex flex-col md:flex-row   items-center justify-center rounded-xl space-x-2 space-y-10 md:space-y-0 bg-[#928dab] m-6 p-1 md:m-0 w-[1000px] h-[500px] ">

<div class="p-6 ">

    <h2 class="font-mono text-4xl font-bold mb-5">Login Here</h2>

    <p class="font-sans mb-12 font-light text-gray-600 max-w-sm">
    Log in to Your Account to Enjoy a Personalized Shopping Experience!!  </p>

     <form onSubmit={handleSubmit} >
     <input 
        name='email'
        value={email}
        onChange={handlechange}

        type="email" placeholder="Enter your Email Address " class=" border border-gray-300 w-full p-6 rounded-md placeholder:font-sans placeholder:font-light mb-4" />

        <input
          name='password'
          value={password}
          onChange={handlechange}

         type="Password" placeholder="Enter your Password " class=" border border-gray-300 w-full p-6 rounded-md placeholder:font-sans placeholder:font-light mb-4" />


        <div class="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
            
          
        <button  type='submit' class=" flex  justify-center items-center space-x-2     bg-[#1f1c2c]  text-white w-full md:w-auto  p-3 font-sans font-bold rounded-md px-9 shadow-cyan-100 hover:bg-opacity-90 hover:shadow-lg border-transition hover:-translate-y-0.5 duration-200  ">
            <span>Login</span>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 pt-1"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="13" y1="18" x2="19" y2="12" />
            <line x1="13" y1="6" x2="19" y2="12" />
          </svg>

        </button>
    </div>

     </form>
   
   

  
</div>






<img src="https://img.freepik.com/premium-photo/premium-quality-ecommerce-store-3d-illustrations_1266756-437.jpg?ga=GA1.1.1757580329.1734937409&semt=ais_hybrid" class="w-[430px]  hover:scale-110 duration-150"
alt=""/>









</div>

</div>
  )
}

export default Login