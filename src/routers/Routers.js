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
import AllProducts from '../admin/AllProducts'
import AddProducts from '../admin/AddProducts'
import Dashboard from '../admin/Dashboard'
import Users from '../admin/Users'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
      <Route path='home' element={<Home />} />
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<ProductDetail />} />
      <Route path='cart' element={<Cart />} />

      <Route path='/*' element={<ProtectedRoute />}>
        <Route path='checkout'  element={<Checkout />}/>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='dashboard/all-products' element={<AllProducts />}/>
        <Route path='dashboard/add-product' element={<AddProducts />}/>
        <Route path='dashboard/users' element={<Users />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Routes>
  )
}

export default Routers