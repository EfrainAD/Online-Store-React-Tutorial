import {CartDropDownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles.jsx'

import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector.js'

const CartDropdown = () => {
     const cartItems = useSelector(selectCartItems)
     const navigate = useNavigate()

     const goToCheckoutfHandler = () => navigate('/checkout')
     
     return (
          <CartDropDownContainer>
               <CartItems>
                    { cartItems.length ?
                         (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                    ):(
                         <EmptyMessage>Your Cart Is Empty</EmptyMessage>)
                    }
               </CartItems>
               <Button onClick={goToCheckoutfHandler}>Check Out</Button>
          </CartDropDownContainer>
     )
}

export default CartDropdown