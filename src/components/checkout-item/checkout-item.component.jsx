import { CheckoutItemContainer, ImageContainer, ItemName, ItemQuantityContainer, ItemPrice, RemoveButton, Arrow, ItemQuantity } from './checkout-item.styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({cartItem}) => {
     const {name, imageUrl, price, quantity} = cartItem
     const {addItemToCart, subtractItemFromCart, removeFromCart} = useContext(CartContext)
     
     const addOneMoreHandler = () => addItemToCart(cartItem)
     const subtractOneMoreHandler = () => subtractItemFromCart(cartItem)
     const subtractAllHandler = () => removeFromCart(cartItem)

     return (
          <CheckoutItemContainer>
               <ImageContainer className="image-container">
                    <img src={imageUrl} alt="{name}" />
               </ImageContainer>
               <ItemName>{name}</ItemName>
               <ItemQuantityContainer>
                    <Arrow  onClick={subtractOneMoreHandler}>
                         &#10094;
                    </Arrow>
                    <ItemQuantity>
                         {quantity}
                    </ItemQuantity>
                    <Arrow onClick={addOneMoreHandler}>
                         &#10095;
                    </Arrow>
               </ItemQuantityContainer>
               <ItemPrice>${price * quantity}</ItemPrice>
               <RemoveButton onClick={subtractAllHandler}>&#10005;</RemoveButton>
          </CheckoutItemContainer>
     )
}

export default CheckoutItem