import { useContext } from 'react'
import { ReactComponent  as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.sytles.scss'
import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
     const {isCardOpen, setIsCardOpen, cartCount} = useContext(CartContext)

     const toggleDisplay = () => setIsCardOpen(!isCardOpen)
     
     return (
          <div className="cart-icon-container" onClick={toggleDisplay}>
               <ShoppingIcon className='shopping-icon' />
               <span className='item-count' >{cartCount}</span>
          </div>
     )
}

export default CartIcon