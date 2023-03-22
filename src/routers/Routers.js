import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import ProductDetail from '../pages/ProductDetail'
import Signup from '../pages/Signup'
import Shop from '../pages/Shop'
import ProtectedRoute from './ProtectedRoute'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />}/>
      <Route path='home' element={<Home />}/>
      <Route path='shop' element={<Shop />}/>
      <Route path='shop/:id' element={<ProtectedRoute><ProductDetail /></ProtectedRoute>}/>
      <Route path='cart' element={<Cart />}/>
      <Route path='checkout' element={<Checkout />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<Signup />}/>
    </Routes>
  )
}

export default Routers