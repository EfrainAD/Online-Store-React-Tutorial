import './cart-dropdown.styles.scss'
import { useContext } from 'react'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { CardContext } from '../../contexts/card.context'

const CartDropdown = () => {
     const { cartItems } = useContext(CardContext)
     console.log('In CartDropdonw cartItems:', cartItems)
     
     return (
          <div className="cart-dropdown-container">
               <div className="cart-items">
                    {cartItems.map(item => <CartItem key={item.key} cartItem={item} />)}
               </div>
               <Button>Check Out</Button>
          </div>
     )
}

export default CartDropdown