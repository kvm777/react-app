import React from 'react'
import { BrowserRouter as router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navBar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import { ShopcontextProvider } from './context/shop-context';

const ShopingCart = () => {
  return (
    <ShopcontextProvider>
      <router>
        <NavBar />
        <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </router>
    </ShopcontextProvider>
  )
}

export default ShopingCart;