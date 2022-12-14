import { createContext, useState, useEffect } from "react";

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
     addItemToCart: () => {},
     cartCount: 0,
})

export const CardProvider = ({ children }) => {
     const [isCardOpen, setIsCardOpen] = useState(false)
     const [cartItems, setCartItems] = useState([])
     const [cartCount, setCartCount] = useState(0)
     
     const addItemToCart = (productToAdd) => setCartItems(addCartItem(cartItems, productToAdd))

     useEffect(() => {
          const newCartCount = cartItems.reduce((count, item) => count + item.quantity, 0)
          setCartCount(newCartCount)
     }, [cartItems])
     
     const value = {isCardOpen, setIsCardOpen, cartItems, cartCount, addItemToCart}
     return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}