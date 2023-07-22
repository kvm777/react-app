import React from 'react'
import "./product.css";
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { addToCart, cartItems} = useContext(ShopContext);
    const {id, name, price, productImage} = props.data;
  return (
    <div className='product-data'>
        <p className='product-name'>{name}</p>
        <img src={productImage} alt='pic' />
        <p>price:${price}</p>
        <button onClick={() => addToCart(id)}>Add To Cart {cartItems[id] >0 && `(${cartItems[id]} )`}</button>
        {cartItems[id] >0 && <Link className='gotocartBtn' to="./cart">Go To Cart </Link>}
        
    </div>
  )
}

export default Product