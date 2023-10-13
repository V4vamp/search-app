import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/navBar';
import "./recent.css"

export const RecentQueries = () => {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedQueries = localStorage.getItem('recentSearches');
    if (storedQueries) {
      setRecentSearches(JSON.parse(storedQueries));
    }
  }, []);

  return (
    <>
    <NavBar />
      <div className="recent-queries">
        <h2>Recent Searches:</h2>
        <ul>
          {recentSearches.map((query, index) => (
            <li key={index}>{query}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
