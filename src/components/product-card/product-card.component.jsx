import './product-card.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
import { selectCartItems } from '../../store/cart/cart.selector'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action' 
import Button, {BTN_TYPE_CLASSES} from '../button/button.component'

const ProductCard = ({product}) => {
     const dispatch = useDispatch()
     const {name, price, imageUrl} = product
     const cartItems = useSelector(selectCartItems)
     
     const addProductToCart = () => {
          dispatch(addItemToCart(cartItems, product))
     }

     return (
          <div className='product-card-container'>
               <img src={imageUrl} alt={name} />
               <div className="footer">
                    <span className="name">{name}</span>
                    <span className="price">${price}</span>
               </div>
               <Button btnType={BTN_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to Cart</Button>
          </div>
     )
}

export default ProductCard