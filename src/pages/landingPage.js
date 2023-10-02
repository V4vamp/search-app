import React from 'react'
import { NavBar } from '../components/navBar'
import "./land.css"
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <>
    
    <div className='landingpage-container'>
        <div className='land-navbar'>
            <NavBar />
        </div>
        <div className='title'>
            <h1>
                Let AI help you ...
            </h1>
        </div>
        <div className='buttons'>
            <div className='search'>
                <Link to={"/search"}>
                    <p>
                        Seach for people
                    </p>
                </Link>
                
            </div>
            <div className='signal'>
                <Link to={"/signals"}>
                    <p>
                        My Signals
                    </p>
                </Link>
                
            </div>
        </div>
    </div>
    
    </>
  )
}
