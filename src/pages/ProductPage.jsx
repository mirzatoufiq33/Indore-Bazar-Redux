import React, { useEffect } from 'react'
import { FaShoppingCart  , FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getproduct } from '../feature/product/productslice';
import { useParams } from 'react-router-dom';
import LoadingPage from '../components/LoadingPage';
import { Add } from '../feature/Cart/CartSlice';


const Productpage = () => {

const {Product , isLoading , isError , message} = useSelector(state => state.Products)
const dispatach = useDispatch()
const {id} = useParams()
// console.log(Product)

const handleAddToCart = (Product) =>{
    dispatach(Add(Product))
}


useEffect(() =>{
    dispatach(getproduct(id))
},[])

if(isLoading){
    <LoadingPage />
}

  return (

  <div className='p-5 min-h-screen bg-[#1f1c2c]  '>
    {/* <BackButton/> */}
    <div className="  flex items-center justify-center  mt-20">



    <div className="  flex flex-col md:flex-row md:space-y-0  md:space-x-10  p-6 md:  md:m-0  m-3 bg-white    rounded-2xl">



        <div>

            <img 
               src={Product?.image} className="w-72 hover:scale-105 duration-200 mx-auto "  alt=""/>
        </div>



<div className="flex flex-col space-y-6 p-5 w-[50vw]">



    <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">



        <div >


            <div className="bg-[#928dab] text-white rounded-full text-sm  px-3 py-1 inline-block ">
        
                Free Shipping 
            
            </div>
            </div>

            <div className="text-2xl font-medium max-w-sm" >{Product?.title}</div>


        <div className="flex flex-col mb-4 space-y-6 text-center md:text-left">
            <p className="line-through">${Product?.price * 10}</p>
            <p className="text-5xl font-bold ">${Product?.price}</p>
            <p className="text-sm font-light text-gray-400">{Product?.description}</p>
        </div>


        <div className="group">
            <button onClick={() => handleAddToCart(Product)} className=" transition-all duration-150 w-full  bg-[#1f1c2c] text-white rounded-lg border  border-b-8  border-b-[#1f1c2c] group-hover:border-t-8 group-hover:border-b-0 group-hover:border-t-[#1f1c2c] group-hover:bg-[#1f1c2c] group-hover:shadow-lg">

                <div className="px-8 py-4 duration-150 bg-[#928dab]  rounded-lg group-hover:bg-[#1f1c2c]">
                    Add to cart 
                </div>

            </button>

        </div>


       <div className="flex items-center justify-between">
       <span className="flex items-center space-x-3 group">
            <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
            <div className="text-sm ">50+ pcs. in Stock</div>
        </span>
            <div >Rating ⭐ {Product?.rating?.count}</div>
       </div>


        {/* <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4  md:flex-row  ">

            <button className="flex items-center justify-center py-3  px-5 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opavity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 ">
                <FaShoppingCart className='w-8'/>
                <span>Add to Cart </span>
            </button>

            <button className="flex items-center justify-center py-3  px-5 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opavity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150 ">

              <FaHeart className='w-8' />
              
                <span>Add to Wishlist </span>
            </button>

        
        </div> */}


    </div>
    




</div>


    </div>
</div>
</div>

  )
}

export default Productpage