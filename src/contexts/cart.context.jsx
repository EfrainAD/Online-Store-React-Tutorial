import { useReducer } from "react";
import { createContext } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

const INITIAL_STATE = {
     isCardOpen: false,
     cartItems: [],
     cartCount: 0,
     totelPrice: 0,
}

// Action type object
export const CART_ACTION_TYPES = {
     SET_CART_ITEMS: 'SET_CART_ITEMS',
     SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const cartReducer = (state, action) => {
     const { type, payload } = action

     switch (type) {
          // Reducer guess code
          case CART_ACTION_TYPES.SET_IS_CART_OPEN:
               return {...state, isCardOpen: !state.isCardOpen}     
               break;
          case CART_ACTION_TYPES.SET_CART_ITEMS:
               return {...state, ...payload}
               break
          default:
               throw new Error(`unhandled type ${type} in cartReducer`)
               break;
     }

}

export const CartProvider = ({ children }) => {
     const [{isCardOpen, cartItems, cartCount, totelPrice}, dispatch] = useReducer(cartReducer, INITIAL_STATE)
     
     const updateCartItemReducer = (newCartItems) => {
          // update new cart total
          const newCartCount = newCartItems.reduce((count, item) => count + item.quantity, 0)
          
          // update new count for items in cart
          const newTotelPrice = newCartItems.reduce((price, item) => price += item.price * item.quantity, 0)
          
          // dispatch new payload
          dispatch(createAction(
               CART_ACTION_TYPES.SET_CART_ITEMS,  
               {
                    cartItems: newCartItems,
                    cartCount: newCartCount,
                    totelPrice: newTotelPrice,
               }
          ))
     }
     const updateIsCartOpenReducer = (isCartOpen) => {
          dispatch(createAction(
               CART_ACTION_TYPES.SET_IS_CART_OPEN,
               {isCardOpen: isCartOpen}
          ))
     }
     const setIsCardOpen = () => {
          updateIsCartOpenReducer(!isCardOpen)
     }
     const addItemToCart = (productToAdd) => {
          const newCartItems = addCartItem(cartItems, productToAdd)
          updateCartItemReducer(newCartItems)
     }

     const subtractItemFromCart = (productToSubtract) => {
          const newCartItems = subtractCartItem(cartItems, productToSubtract)
          updateCartItemReducer(newCartItems)
     }

     const removeFromCart = (productToRemove) => {
          const newCartItems = removeCartItem(cartItems, productToRemove)
          updateCartItemReducer(newCartItems)
     }
     
     const value = {isCardOpen, setIsCardOpen, cartItems, cartCount, totelPrice, addItemToCart, subtractItemFromCart, removeFromCart}
     return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}