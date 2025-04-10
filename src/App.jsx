import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Movie from './pages/Movie'
import Home from './pages/home'
import About from './pages/about'
import Cart from './pages/cart'
import Login from './pages/login'
import Orders from './pages/orders'
import Selectseat from './pages/selectseat'
import Contact from './pages/contact'
import Navbar from './components/Navbar'
import Location from './pages/Location'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' elements={<About/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/movie/:movieid' element = {<Movie/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/selectseat/:movieid' element={<Selectseat/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/location' element={<Location/>} />
      </Routes>
    </div>
  )
}

export default App
