import React from 'react'
import { NavBar } from '../components/navBar'
import "./result.css"

export const ResultPage = ({searchQuery, searchResults}) => {
  return (
    
        <div className="result-container">
            <div className='navbar'>
                <NavBar />
            </div>
            <div className='result-display'>
                <h2>Search Results for: </h2>
                <input className='result-query' value={searchQuery} readOnly/>
            </div>
            
                {searchResults && searchResults.length > 0 ? (
                    <ul className="search-results">
                    {searchResults.map((result) => (
                        <li key={result.id}>{result.name}</li>
                    ))}
                    </ul>
                    ) : (
                    <p>No results found.</p>
                    )}
            </div>
  )
}
