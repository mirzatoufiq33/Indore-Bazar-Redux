import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LoadingPage from './LoadingPage'

const ProductCard = ({product}) => {

  const {isLoading} = useSelector(state => state.Products)

  if(isLoading){
    return <LoadingPage />
  }

  return (
    
       

        <div className=' rounded-xl border border-[#928dab] p-4 shadow-sm  bg-white flex flex-col justify-center items-center space-y-4'>
          

          <img
           src={product.image} 
           alt="" 
           className='h-40 hover:scale-110 duration-150'
           />
           <span>
           <h1 className=' my-1 text-xl font-bold max-w-sm '>{product.title} </h1>

              <h2 className='my-1 text-xl font-bold '>Price : {product.price}</h2>
              
            <h3 className='my-1 text-sm fond-semibold'> 
              <div className='flex items-center space-x-2'>
              <p>
            Rating :
            </p>
           < svg 
           className='h-3 fill-yellow-500  '
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
           
           <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>

           <p> {product.rating.rate}</p>
              </div>
              
              </h3>
            
           </span>

           <Link to={`product/${product?.id}`} className=" w-full flex items-center justify-center py-3  px-5  text-white bg-[#1f1c2c] border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opavity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 ">
              
         <span>View Product</span>

          </Link>

          

        </div>



  )
}

export default ProductCard