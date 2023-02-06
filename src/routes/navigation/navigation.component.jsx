import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

import { signOutUser } from "../../utils/firebase/firebase.utils"
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { ReactComponent as CrownLogo} from '../../assets/crown.svg'
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles'
import { selectCurrentUser } from "../../store/user/user.selector"
import { selectIsCartOpen } from '../../store/cart/cart.selector'

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  
  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className="logo" />
        </LogoContainer>
        <strong>{currentUser?.email}</strong>
        <strong>{currentUser?.displayName}</strong>
        <NavLinks>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/shop'>
            Shop
          </NavLink>
          {currentUser ? (
            <span onClick={signOutUser}>Log Out</span>
            ):(
              <NavLink to='/auth'>Sing-In</NavLink>)}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation