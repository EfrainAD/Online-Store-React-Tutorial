import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
     const existCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
     if (existCartItem) 
          return cartItems.map((cartItem) => 
               cartItem.id === existCartItem.id ? 
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

     const numberOfItemsInCart = () => 
          cartItems.reduce((count, item) => count += item.quantity, 0)
     
     const value = {isCardOpen, setIsCardOpen, cartItems, addItemToCart, numberOfItemsInCart}
     return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}