import React, { useState } from 'react';
import { NavBar } from '../components/navBar';
import Icon from "../images/Search.png";
import "./search.css";
import { GenomeCard } from '../components/genomeCard';

export const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);


    const handleSearch = async (e) => {
      e.preventDefault();
        try {
            const response = await fetch('https://torre.ai/api/entities/_searchStream', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: searchQuery,
                    identityType: 'person',
                    meta: false,
                    limit: 10,
                    excludeContacts: true,
                    excludedPeople: []
                })
            });
            console.log(response)
            const result = await response.text();
            const listResults = result.split('}');
            const data = {};

            listResults.forEach((item, index) => {
              try {
                if (index === listResults.length - 1) return;
                const itemToParse = item + '}';
                const itemData = JSON.parse(itemToParse);
                data[itemData.ggId] = itemData;
              } catch (error) {
                  console.error("Error encountered searching for names:", error);
              }
          });
          setResults(Object.values(data));
        } catch (err) {
          console.error(err);
        }
      };

    return (
      <>
            <NavBar />
            <div className='container'>
                <div className='search-box'>
                  <h2>Search: </h2>
                    <form onSubmit={handleSearch}>
                        {/* <label htmlFor="search-input">Search person by name:</label> */}
                        <input
                            type='text'
                            id="search-input"
                            className='search-area'
                            placeholder='Enter a name...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type='submit'>
                            <img src={Icon} alt='Search-icon' />
                        </button>
                    </form>
                </div>
                <div className='results'>
                      {Array.isArray(results) && results.length > 0 && (
                      <ul>
                          {results.map((result, index) => (
                          <div className='result-cards' key={index}>
                            <GenomeCard result={result} />
                          </div>
                      
                          ))}
                      </ul>
                          )}
                </div>

            </div>
      </>
    )
}
