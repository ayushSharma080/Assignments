import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, NavLink , Routes } from 'react-router'
import Home from './home'
import FeaturedProducts from './clothing'
import Product from './product'
import Footer from './Footer'

function App() {

  return (
    <>
      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/home/:category" element={<FeaturedProducts />}/>
        <Route path="/product/:id" element={<Product/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
