import { useEffect, useState } from 'react'
import bgimage from '../assets/image.png.png'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getproducts } from '../feature/product/productSlice';
import LoadingPage from '../components/LoadingPage';

const Home = () => {

  

  const {user } =  useSelector ((state ) => state.auth);

  const {products , isLoading } = useSelector ( (state) => state.Products)
  const dispatach = useDispatch()

  const navigate = useNavigate();


  useEffect(() =>{

    if(!user ){
      navigate("/login")

    }

    dispatach(getproducts())


  },[user]);
  

  if(isLoading){
    return <LoadingPage />
  }

   


  
  return (
    <div className=' p-5  bg-[#1f1c2c]   '>
       
        <section className='p-5  h-96 flex  flex-col items-center justify-around md:flex-row   '>

          <div className='  text-white text-center md:text-left'>
            
            <h1 className='font-bold text-4xl max-w-sm my-2'> 
              <p className='font-bold text-[#928dab] text-5xl p-1'>Shop</p>
              Anything,Anywhare</h1>

            <p className=' text-xl my-2'>Get Your Orders 24/7</p>

      
          <button className='  text-xl rounded-md py-3 px-6 bg-[#928dab] text-black hover:bg-[#1f1c2c] hover:border hover:text-white hover:border-white  focus:outline-offset-2  duration-200 '>
            <p className='font-bold'>Shop Now</p>
            </button>
          </div>
        

     <img src={bgimage} className='h-100 md:block hidden hover:scale-110 duration-150' alt=""  />


        </section>


       <h1 className="  text-center text-3xl font-bold my-4 text-[#928dab]"> All Products </h1>

       <div className="p-5 grid lg:grid-cols-3 md:grid-cols-2 gap-4 ">

       {
products.map((product =>  <ProductCard kay={product.id} product={product} />

))

       }
      
         

       </div>


    </div>
  )
}

export default Home