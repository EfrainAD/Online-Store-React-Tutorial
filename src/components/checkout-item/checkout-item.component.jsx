import { CheckoutItemContainer, ImageContainer, ItemName, ItemQuantityContainer, ItemPrice, RemoveButton, Arrow, ItemQuantity } from './checkout-item.styles'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, removeFromCart, subtractItemFromCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

const CheckoutItem = ({cartItem}) => {
     const dispatch = useDispatch()
     const cartItems = useSelector(selectCartItems)
     const {name, imageUrl, price, quantity} = cartItem
     
     const addOneMoreHandler = () => dispatch(addItemToCart(cartItems, cartItem))
     const subtractOneMoreHandler = () => dispatch(subtractItemFromCart(cartItems, cartItem))
     const subtractAllHandler = () => dispatch(removeFromCart(cartItems, cartItem))

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