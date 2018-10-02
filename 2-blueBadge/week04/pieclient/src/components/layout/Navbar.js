import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="nav-ul">
          <li className="nav-li home"><a href="">PIES</a></li>
          <li className="nav-li"><a href="">Sign Up/Login</a></li>
          <li className="nav-li"><a href="">Add Pie</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar