import React, { useContext } from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import CartItem from '../../components/cart-Item/cartItem';
import "./cart.css"
import { Link } from 'react-router-dom';


const Cart = () => {
  const {cartItems, addToCart, removeFromCart,TotalAmount} = useContext(ShopContext)
  const totalCartAmount = TotalAmount();
  return (
    <div className='cart'>
      <h1 className='cart-heading'>Your Cart Items</h1>
      <div className='cart-items'>
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />
          }
        })}
      </div>
      { totalCartAmount >0 && <h3>total Cart: $ {totalCartAmount }</h3>}
      
      <div className='cart-btn-links'>
        <Link to="/" className='link-btn'>Continue Shoping</Link>
        { totalCartAmount >0 && <Link className='link-btn'>Check Out</Link>}
        
      </div>
      
    </div>
  )
}

export default Cart;