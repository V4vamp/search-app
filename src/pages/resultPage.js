import React from 'react'
import { NavBar } from '../components/navBar'
import "./result.css"

export const ResultPage = ({results}) => {
  return (
    
    <>
        <NavBar />
        <div>
            {results.map((item) => (
        <div key={item.ggId}>
          {/* Display search result item */}
          <h2>{item.name}</h2>
          {/* Add more details as needed */}
        </div>
      ))}
        </div>
    </>
        
  )
}
