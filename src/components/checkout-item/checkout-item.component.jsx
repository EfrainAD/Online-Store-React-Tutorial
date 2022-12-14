import './checkout-item.styles.scss'
import { useContext, useState } from 'react'
import { CardContext } from '../../contexts/card.context'

const CheckoutItem = ({cartItem}) => {
     const {name, imageUrl, price, quantity} = cartItem
     const {addItemToCart, subtractItemFromCart, removeFromCart} = useContext(CardContext)
     const addOneMore = () => addItemToCart(cartItem)
     const subtractOneMore = () => subtractItemFromCart(cartItem)
     const subtractAll = () => removeFromCart(cartItem)
     return (
          <div className='checkout-item-container'>
               <img src={imageUrl} alt="{name}" />
               <div className="checkout-item-details">
                    <span className='name'>{name}</span>
                    <button onClick={subtractOneMore}>{'<'}</button>
                    <span>{quantity}</span>
                    <button onClick={addOneMore}>{'>'}</button>
                    <span className='price'>${price * quantity}</span>
                    <button onClick={subtractAll}>X</button>
               </div>
          </div>
     )
}

export default CheckoutItem