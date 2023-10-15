import React from 'react'
import { NavBar } from '../components/navBar'
import "./land.css"
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";

export const LandingPage = () => {

    const pageTitle = "torre AI";


  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
    
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
                <Link to={"/search"} style={{ textDecoration: "none" }}>
                    <p>
                        Seach for people
                    </p>
                </Link>
                
            </div>
            <div className='signal'>
                <Link to={"/signals"} style={{ textDecoration: "none" }}>
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
