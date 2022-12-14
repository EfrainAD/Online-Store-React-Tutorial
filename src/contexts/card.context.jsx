import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
     console.log('cartItems:', cartItems)
     console.log('productToAdd:', productToAdd)
     const isCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
     if (isCartItem) 
          return cartItems.map((cartItem) => 
               cartItem.id === isCartItem.id ? 
               {...cartItem, quantity: cartItem.quantity+1} 
               : cartItem
          )
     return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CardContext = createContext({
     isCardOpen: false,
     setIsCardOpen: () => null,
     cartItems: [],
     setCartItems: () => {}
})

export const CardProvider = ({ children }) => {
     const [isCardOpen, setIsCardOpen] = useState(false)
     const [cartItems, setCartItems] = useState([])
     
     const addItemToCart = (productToAdd) => setCartItems(addCartItem(cartItems, productToAdd))
     
     const value = {isCardOpen, setIsCardOpen, cartItems, addItemToCart}
     return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}