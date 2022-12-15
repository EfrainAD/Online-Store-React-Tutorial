import { useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"

import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  const {isCardOpen} = useContext(CartContext)
  
  return (
    <>
      <div className='navigation'>
        <Link className="nav-link" to='/'>
          <CrownLogo className="logo" />
        </Link>
        <strong>{currentUser?.email}</strong>
        <strong>{currentUser?.displayName}</strong>
        <div className="nav-links-container">
          <Link className="nav-link" to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>Log Out</span>
            ):(
              <Link className='nav-link' to='/auth'>Sing-In</Link>)}
          <CartIcon />
        </div>
        {isCardOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation