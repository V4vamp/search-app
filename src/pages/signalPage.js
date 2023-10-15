import React, { useState, useEffect } from 'react';
import { NavBar } from '../components/navBar';
import "./signal.css";
import { GenomeCard } from '../components/genomeCard';
import { Helmet } from 'react-helmet';

export const SignalPage = () => {
  const [signaledGenomes, setSignaledGenomes] = useState([]);

  useEffect(() => {
    // Retrieve signaled genomes from localStorage
    const signaledGenomesFromStorage = JSON.parse(localStorage.getItem('signaledGenomes')) || [];
    setSignaledGenomes(signaledGenomesFromStorage);
  }, []);

  const handleRemoveGenome = (ggId) => {
    // Remove the genome from the signaledGenomes state
    const updatedSignaledGenomes = signaledGenomes.filter((genome) => genome.ggId !== ggId);
    setSignaledGenomes(updatedSignaledGenomes);

    // Remove the genome from localStorage
    const signaledGenomesFromStorage = JSON.parse(localStorage.getItem('signaledGenomes')) || [];
    const updatedLocalStorage = signaledGenomesFromStorage.filter((genome) => genome.ggId !== ggId);
    localStorage.setItem('signaledGenomes', JSON.stringify(updatedLocalStorage));
  };

  if (!signaledGenomes || signaledGenomes.length === 0) {
    return (
      <div className="no-signals-container">
        <NavBar />
        <p className="no-signals-message">No signaled profiles to display.</p>
      </div>
    );
  }

  const pageTitle = "torre || Signals"
  

  return (
    
    <>

      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      
        <NavBar />
        <div className='signal-container'>
          <h2>Signals</h2>
          <div className="signaled-genomes">
            <ul>
            {signaledGenomes.map((result, index) => (
              <div className='signaled-card'>
            <GenomeCard 
            key={index} 
            result={result}
            isClicked={true} 
            handleClick={handleRemoveGenome}
            />
            </div>
            ))}
            </ul>
          </div>
        </div>

    </>
        
  )
}
