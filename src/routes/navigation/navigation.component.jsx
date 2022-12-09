import { useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { UserContext } from "../../contexts/user.context"
import { ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  // console.log('RUN')
  console.log('CURRENT USER', currentUser)
  return (
    <>
      <div className='navigation'>
        <Link className="nav-link" to='/'>
          <CrownLogo className="logo" />
        </Link>
        <string>{currentUser?.email}</string>
        <div className="nav-links-container">
          <Link className="nav-link" to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          <Link className='nav-link' to='/auth'>Sing-In</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation