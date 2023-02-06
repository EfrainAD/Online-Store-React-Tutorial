import {CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.sytles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setIsCartOpen } from '../../store/cart/cart.action'

const CartIcon = () => {
     const dispatch = useDispatch()

     const isCartOpen = useSelector(selectIsCartOpen)
     const cartCount = useSelector(selectCartCount)
     
     const toggleDisplay = () => dispatch(setIsCartOpen(!isCartOpen))
     
     return (
          <CartIconContainer onClick={toggleDisplay}>
               <ShoppingIcon className='shopping-icon' />
               <ItemCount>{cartCount}</ItemCount>
          </CartIconContainer>
     )
}

export default CartIcon