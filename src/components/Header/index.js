import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav>
    <Link to="/" className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
        className="header-img"
      />
    </Link>
  </nav>
)

export default Header
