import React from 'react';

import Logout from './Logout/Logout';
import './Navbar.css';
import piePic from '../../assets/pie.jpeg';

const Navbar = (props) => {
  return(
    <nav>
      <img src={piePic} alt="Pie Picture" />
      <Logout logout={props.logout}/>
    </nav>
  )
}

export default Navbar;