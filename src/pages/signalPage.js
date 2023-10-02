import React from 'react'
import { NavBar } from '../components/navBar'
import "./signal.css"
import { GenomeCard } from '../components/genomeCard'

export const SignalPage = () => {

    const numberOfProfiles = 4;


  return (
    
    <>
        <NavBar />
        <div className="signal-container">
            {[...Array(numberOfProfiles)].map((_, index) =>(
                <div className='signalled-profiles' key={index}>
                        <GenomeCard />
                </div>
            ))}        
                    
        </div>

    </>
        
  )
}
