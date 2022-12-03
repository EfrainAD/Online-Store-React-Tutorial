import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => (
  <>
    <div className='navigation'>
      <Link className="nav-link" to='/'>
        <CrownLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to='/'>
          Home
        </Link>
        <Link className='nav-link' to='/shop'>
          Shop
        </Link>
      </div>
    </div>
    <Outlet />
  </>
)

export default Navigation