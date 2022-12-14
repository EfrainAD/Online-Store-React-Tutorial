import { useContext } from 'react'
import { ReactComponent  as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.sytles.scss'
import { CardContext } from '../../contexts/card.context'

const CartIcon = () => {
     const {isCardOpen, setIsCardOpen} = useContext(CardContext)

     const toggleDisplay = () => setIsCardOpen(!isCardOpen)

     return (
          <div className="cart-icon-container" onClick={toggleDisplay}>
               <ShoppingIcon className='shopping-icon' />
               <span className='item-count' >0</span>
          </div>
     )
}

export default CartIcon