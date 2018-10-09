import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-ul">
          <li className="nav-li home"><Link to='/pies'>PIES</Link></li>
          <li className="nav-li"><Link to='/'>Sign Up/Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar