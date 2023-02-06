export const selectIsCartOpen = (state) => state.cart.isCartOpen
export const selectCartItems = (state) => state.cart.cartItems
export const selectCartCount = (state) => {
     const cartItems = state.cart.cartItems
     
     return cartItems.reduce((count, item) => count + item.quantity, 0)     
}
export const selectTotelPrice = (state) => {
     const cartItems = state.cart.cartItems
     
     return cartItems.reduce((price, item) => price += item.price * item.quantity, 0)
}