import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart={};
    for(let i=1; i<PRODUCTS.length +1; i++){
        cart[i] = 0;
    }
    return cart;
}


export const ShopcontextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (id) => {
        setCartItems( (prev) => ( {...prev, [id]: prev[id]+1}) )
    }

    const removeFromCart = (id) => {
        setCartItems( (prev) => ( {...prev, [id]: prev[id]-1}) )
    }

    // change the cart items count manually...
    const updateCartCount = (count, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: count}))
    }

    
    const TotalAmount = () => {
        let amount=0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo =  PRODUCTS.find((product) => product.id === Number(item));
                amount += cartItems[item] * itemInfo.price;
            }
        }
        return amount;
    }

    const contextValues = {cartItems, addToCart, removeFromCart, updateCartCount, TotalAmount}
    // console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValues}>
        {props.children}
    </ShopContext.Provider>
  )
}
