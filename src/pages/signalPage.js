import React, { useState, useEffect } from 'react'
import { NavBar } from '../components/navBar'
import "./signal.css"
import { GenomeCard } from '../components/genomeCard'

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
    return <p>No signaled genomes to display.</p>;
  }
  

  return (
    
    <>
        <NavBar />
        <div>
          <h2>Signaled Genomes</h2>
          <div className="signaled-genomes">
            {signaledGenomes.map((result, index) => (
            <GenomeCard 
            key={index} 
            result={result}
            isClicked={true} 
            handleClick={handleRemoveGenome}
            />
            ))}
          </div>
        </div>

    </>
        
  )
}
