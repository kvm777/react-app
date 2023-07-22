import React from 'react';
import { PRODUCTS } from '../../products';
import Product from '../../components/product/product';
import "./shop.css"


const Shop = () => {
  return (
    <div className='shop'>
        <div >
            <h1>Mahesh Shop</h1>
        </div>
        <div className='Shop-items'>
            {PRODUCTS.map( (product) => {
                return <Product data={product} />
            })}
        </div>
    </div>
  )
}


export default Shop;