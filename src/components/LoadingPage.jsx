import React from 'react'
import loadingimg from '../assets/load.gif'

const LoadingPage = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-[#1f1c2c]'>
        <img  src={loadingimg}   className='w-[30%]' alt="" />
        </div>
  )
}

export default LoadingPage