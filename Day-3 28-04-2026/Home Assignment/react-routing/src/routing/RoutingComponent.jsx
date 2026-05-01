import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import About from '../pages/About'
import Service from '../pages/Service'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import HeroComponent from '../pages/HeroComponent'
import Kitchen from '../RoutingInnerChildren/Kitchen'
import Contact from '../pages/Contact'

const RoutingComponent = () => {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <Routes>
        <Route path='/' element={<HomePage/>}>
            <Route index element={<HeroComponent/>}/>
            {/* <Route path='kitchen' element={<Kitchen/>}/> */}
        </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default RoutingComponent
