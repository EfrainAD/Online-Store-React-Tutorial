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

const subtractCartItem = (cartItems, productToSubtract) => {
     const existCartItem = cartItems.find(cartItem => cartItem.id === productToSubtract.id)
     
     if (existCartItem) 
          return cartItems.map((cartItem) => 
                         cartItem.id === existCartItem.id ?
                                   {...cartItem, quantity: cartItem.quantity -= 1} 
                                   : cartItem
                    ).filter(cartItem => cartItem.quantity > 0)
     return [...cartItems]
}

const removeCartItem = (cartItems, productToRemove) => cartItems.filter(cartItem => cartItem.id !== productToRemove.id)

export const CartContext = createContext({
     isCardOpen: false,
     setIsCardOpen: () => null,
     cartItems: [],
     addItemToCart: () => {},
     subtractItemFromCart: () => null,
     removeFromCart: () => null,
     cartCount: 0,
     totelPrice: 0,
})

export const CartProvider = ({ children }) => {
     const [isCardOpen, setIsCardOpen] = useState(false)
     const [cartItems, setCartItems] = useState([])
     const [cartCount, setCartCount] = useState(0)
     const [totelPrice, setTotelPrice] = useState(0)
     
     const addItemToCart = (productToAdd) => setCartItems(addCartItem(cartItems, productToAdd))
     
     const subtractItemFromCart = (productToSubtract) => setCartItems(subtractCartItem(cartItems, productToSubtract))

     const removeFromCart = (productToRemove) => setCartItems(removeCartItem(cartItems, productToRemove))

     useEffect(() => {
          const newCartCount = cartItems.reduce((count, item) => count + item.quantity, 0)
          
          setCartCount(newCartCount)
     }, [cartItems])
     
     useEffect(() => {
          const newTotelPrice = cartItems.reduce((price, item) => price += item.price * item.quantity, 0)
          
          setTotelPrice(newTotelPrice)
     }, [cartItems])
     
     const value = {isCardOpen, setIsCardOpen, cartItems, cartCount, totelPrice, addItemToCart, subtractItemFromCart, removeFromCart}
     return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}