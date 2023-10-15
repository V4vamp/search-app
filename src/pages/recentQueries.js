import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/navBar';
import "./recent.css"
import { Helmet } from 'react-helmet';

export const RecentQueries = () => {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedQueries = localStorage.getItem('recentSearches');
    if (storedQueries) {
      setRecentSearches(JSON.parse(storedQueries));
    }
  }, []);

  const pageTitle = "torre || Recent"

  return (
    <>

      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      
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
