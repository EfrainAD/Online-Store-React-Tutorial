import './checkout.styles.scss'
import { useContext } from 'react'
import { CardContext } from '../../contexts/card.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const Checkout = () => {
     const {cartItems} = useContext(CardContext)
     return (
          <div>
               <h1>Checkout</h1>
               <div className="cart-items">
                         {cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)}
               </div>
          </div>
     )
}

export default Checkout