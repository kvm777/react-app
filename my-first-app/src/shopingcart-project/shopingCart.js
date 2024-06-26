import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navBar';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import { ShopcontextProvider } from './context/shop-context';
import SignIn from './authentication/signin';
import useAuth from './authentication/useAuth';


const ShopingCart = () => {
  return (
    <ShopcontextProvider>
      <Router>
        <NavBar />
        <Routes>
            {/* <Route exact path='/' element={ <useAuth />} /> */}
            <Route path='/shop' element={<useAuth />} />

            <Route exact path='/' element={<SignIn />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </Router>
    </ShopcontextProvider>
  )
}

export default ShopingCart;