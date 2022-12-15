import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({cartItem}) => {
     const {name, imageUrl, price, quantity} = cartItem
     const {addItemToCart, subtractItemFromCart, removeFromCart} = useContext(CartContext)
     
     const addOneMoreHandler = () => addItemToCart(cartItem)
     const subtractOneMoreHandler = () => subtractItemFromCart(cartItem)
     const subtractAllHandler = () => removeFromCart(cartItem)

     return (
          <div className='checkout-item-container'>
               <div className="image-container">
                    <img src={imageUrl} alt="{name}" />
               </div>
               <span className='name'>{name}</span>
               {/* <span onClick={subtractOneMoreHandler}>{'<'}</span> */}
               <span className='quantity'>
                    <div className="arrow"  onClick={subtractOneMoreHandler}>
                         &#10094;
                    </div>
                    <span className="value">
                         {quantity}
                    </span>
                    <div className="arrow" onClick={addOneMoreHandler}>
                         &#10095;
                    </div>
               </span>
               {/* <span onClick={addOneMore}>{'>'}</span> */}
               <span className='price'>${price * quantity}</span>
               <div className="remove-button" onClick={subtractAllHandler}>&#10005;</div>
               {/* <button onClick={subtractAll}>X</button> */}
          </div>
     )
}

export default CheckoutItem