import { useContext } from 'react'
import { ReactComponent  as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.sytles.scss'
import { DisplayDropdownContext } from '../../contexts/displayDropDown.context'

const CartIcon = () => {
     const {displayDrowpdown, setDisplayDrowpdown} = useContext(DisplayDropdownContext)

     const toggleDisplay = () => {
          setDisplayDrowpdown(!displayDrowpdown)
     }

     return (
          <div className="cart-icon-container" onClick={toggleDisplay}>
               <ShoppingIcon className='shopping-icon' />
               <span className='item-count' >0</span>
          </div>
     )
}

export default CartIcon