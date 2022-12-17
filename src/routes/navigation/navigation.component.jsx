import { useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import { UserContext } from "../../contexts/user.context"
import { CartContext } from "../../contexts/cart.context"

import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { ReactComponent as CrownLogo} from '../../assets/crown.svg'
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles'

const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  const {isCardOpen} = useContext(CartContext)
  
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className="logo" />
        </LogoContainer>
        <strong>{currentUser?.email}</strong>
        <strong>{currentUser?.displayName}</strong>
        <NavLinks>
          <NavLink className="nav-link" to='/'>
            Home
          </NavLink>
          <NavLink className='nav-link' to='/shop'>
            Shop
          </NavLink>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>Log Out</span>
            ):(
              <NavLink className='nav-link' to='/auth'>Sing-In</NavLink>)}
          <CartIcon />
        </NavLinks>
        {isCardOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation