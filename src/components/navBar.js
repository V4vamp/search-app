import React from 'react';
import Logo from "../images/torre-nav.png"
import "./navbar.css";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>

        <div className='navbar-container'>          
            <div className='title'>
              <Link to={"/"}>
                  <img src={Logo} alt='torre ai logo' />
              </Link>
            </div>   
          <div className='nav-tabs'>
            <Link to='/search' className='nav-tab'>
              Search
            </Link>
            <Link to='/signals' className='nav-tab'>
              Signals
            </Link>
            <Link to='/recent-search' className='nav-tab'>
              Recent Searches
            </Link>
      </div>
                     
        </div>

    </>
  )
}