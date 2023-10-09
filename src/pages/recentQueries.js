import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/navBar';

export const RecentQueries = () => {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    // Load recent search queries from localStorage when the component mounts
    const storedQueries = localStorage.getItem('recentSearches');
    if (storedQueries) {
      setRecentSearches(JSON.parse(storedQueries));
    }
  }, []);

  // const handleSearch = (searchQuery) => {
  //   // Update recent search queries
  //   const updatedQueries = [searchQuery, ...recentSearches.slice(0, 9)];
  //   setRecentSearches(updatedQueries);

  //   // Save the updated queries to localStorage
  //   localStorage.setItem('recentSearches', JSON.stringify(updatedQueries));
  // };

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
