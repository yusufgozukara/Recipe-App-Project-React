import React from 'react'
import {Link, Navlink} from 'react-router-dom';
import './Navbar.css';
import { useEffect } from 'react';

const Navbar = () => {




  return (
    <div className='navbarContainer'>
      <div className="navbarLeft">
        <p>≺ED8EN/≻</p>
        <ul>
          <li>
            <Link to='/home' className='navbarLeftLink'>RECIPE</Link>
          </li>
        </ul>
      </div>
      <div className="navbarRight">
        <ul>
          <li><Link to='/about' className='navbarRightLink'>About</Link></li>
          <li><Link to="/github" target="_blank" className='navbarRightLink'>Github</Link></li>
          <li><Link to='/logout' className='navbarRightLink'>Logout</Link></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar