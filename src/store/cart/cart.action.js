import { CART_ACTION_TYPES } from "../../store/cart/cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// utils
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

// exports actions
export const setIsCartOpen = (isCartOpen) => createAction(
          CART_ACTION_TYPES.SET_IS_CART_OPEN,
          isCartOpen
     )
export const addItemToCart = (cartItems, productToAdd) => {
     const newCartItems = addCartItem(cartItems, productToAdd)

     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const subtractItemFromCart = (cartItems, productToSubtract) => {
     const newCartItems = subtractCartItem(cartItems, productToSubtract)
     
     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}
export const removeFromCart = (cartItems, productToRemove) => {
     const newCartItems = removeCartItem(cartItems, productToRemove)
     
     return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}