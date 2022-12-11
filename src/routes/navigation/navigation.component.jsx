import { useContext } from "react"
import { Outlet, Link } from "react-router-dom"
import { UserContext } from "../../contexts/user.context"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext)
  console.log('CURRENT USER', currentUser)
  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }
  return (
    <>
      <div className='navigation'>
        <Link className="nav-link" to='/'>
          <CrownLogo className="logo" />
        </Link>
        <string>{currentUser?.email}</string>
        <string>{currentUser?.displayName}</string>
        <div className="nav-links-container">
          <Link className="nav-link" to='/'>
            Home
          </Link>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (<span className='nav-link' onClick={signOutHandler}>Log Out</span>) : (<Link className='nav-link' to='/auth'>Sing-In</Link>)}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation