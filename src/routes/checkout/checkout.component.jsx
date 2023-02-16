import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { useSelector } from 'react-redux'
import { selectCartItems, selectTotelPrice } from '../../store/cart/cart.selector'

const Checkout = () => {
     const cartItems = useSelector(selectCartItems)
     const totelPrice = useSelector(selectTotelPrice)

     return (
          <div className='checkout-container'>
               <div className="checkout-header">
                    <div className="header-block">
                         <span>Product</span>
                    </div>
                    <div className="header-block">
                         <span>Discription</span>
                    </div>
                    <div className="header-block">
                         <span>Quantity</span>
                    </div>
                    <div className="header-block">
                         <span>Price</span>
                    </div>
                    <div className="header-block">
                         <span>Remove</span>
                    </div>
               </div>
               <h1>Checkout</h1>
               <div className="cart-items">
                         {cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)}
               </div>
               <span className='total'>TOTAL: ${totelPrice}</span>
          </div>
     )
}

export default Checkout