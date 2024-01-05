import Logo from "/public/Logo.jsx"
import "../styles/nav.css"

import {Link} from 'react-router-dom';

function Nav() {
  return(
    <div>
      <nav>
        <div className="navbar">
          <div className="logo"><Link to="/"><Logo /></Link></div>

          <div className="navtag">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/internethome">InternetHome</Link></li>
            </ul>
          </div>
        </div>

        
        {/* <Link to="/contact">Contact</Link> */}
        {/* <div className='essentials'>
          <Link to="/about">About</Link>
          <a href="/">Dark Mode</a>
        </div> */}
        {/* <Link to="/resume">Resume</Link> */}

        
      </nav>
    </div>
  )
}

export default Nav