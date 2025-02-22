import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Product from './pages/Product'
import About from './pages/About'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Navbar from './components/Navbar.jsx'

  
const App = () => {
  return (
    <div classname= 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar /> 
    <Routes>
     <Route path ='/' element={<Home/>} />
     <Route path ='/collection' element={<Collection/>} />
     <Route path ='/cart' element={<Cart/>} />
     <Route path ='/contact' element={<Contact/>} />
     <Route path ='/login' element={<Login/>} />
     <Route path ='/product/:productId' element={<Product/>} />
     <Route path ='/about' element={<About/>} />
     <Route path ='/place-order' element={<PlaceOrder/>} />
     <Route path ='/orders' element={<Order/>} />
    </Routes>

  
    </div>
  )
}

export default App  