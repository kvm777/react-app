import React from 'react'
import "./cartItem.css"
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';

const CartItem = (props) => {
    const { addToCart, removeFromCart, cartItems, updateCartCount} = useContext(ShopContext);
    const {id, name, price, productImage} = props.data;
  return (
    <div className='cart-Item-data'>
        <img src={productImage} alt='pic' />
        <div className='desciption'>
            <p className='item-name'>{name}</p>
            <p>price:${price}</p>
        </div>
        <div className='buttons'>
            <button onClick={() =>  removeFromCart(id)}> - </button>
            <input type='text' value={cartItems[id]} onChange={(e) => updateCartCount(Number(e.target.value), id )} />
            <button onClick={() =>  addToCart(id)}> + </button>
        </div>
        
    </div>
  )
}

export default CartItem