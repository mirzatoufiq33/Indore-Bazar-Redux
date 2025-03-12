import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route,  } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
import CartButton from './components/CartButton'
import Footer from './components/Footer'
// import Swiper from './components/Swiper'
import Slider from './components/Swiper'


const App = () => {
  return (
  
 <Router>
    <Navbar/>
    {/* <Slider /> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/product/:id' element={<ProductPage/>}/>
      <Route path='/cart' element={< Cart />}/>
  
    </Routes>
    <CartButton/>
    <ToastContainer/>
    
    <Footer/>
    


   
    </Router>
 

  )
}

export default App