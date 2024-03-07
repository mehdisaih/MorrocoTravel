import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [clique, setClique] = useState(false);
  const [button, setbutton] = useState(true);
  const handleClique = () => setClique(!clique);
  const closeMobileMenu = () => setClique(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setbutton(false);
    }
    else setbutton(true);
  }
  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MorrocoTRVL <i className="fab fa-typo3"></i>
          </Link>
          <div className='menu-icon' onClick={handleClique}>
            <i className={clique ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
          <ul className={clique ? 'nav-menu active ' : 'nav-menu'}>
            <li className='nav-item '>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item '>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-item '>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className='nav-item '>
              <Link to='/ sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SiGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
