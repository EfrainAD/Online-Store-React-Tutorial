import { useContext } from 'react'
import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.sytles'
import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
     const {isCardOpen, setIsCardOpen, cartCount} = useContext(CartContext)

     const toggleDisplay = () => setIsCardOpen(!isCardOpen)
     
     return (
          <CartIconContainer onClick={toggleDisplay}>
               <ShoppingIcon className='shopping-icon' />
               <ItemCount>{cartCount}</ItemCount>
          </CartIconContainer>
     )
}

export default CartIcon