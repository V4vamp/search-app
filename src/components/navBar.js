import React from 'react';
import Logo from "../images/torre-nav.png"
import "./navbar.css";
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>

        <div className='navbar-container'>
          <Link to={'/'}>
          
            <div className='title'>
                  <img src={Logo} alt='torre ai logo' />
              </div>   
          
          </Link>
                     
        </div>

    </>
  )
}