import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./genome.css"

export const GenomeCard = ({result}) => {
    const [text, setText] = useState('SIGNAL');
    const [isClicked, setIsClicked] = useState();
    // const [signaledGenomes, setSignaledGenomes] = useState([]);


    const toggleContent = () => {
        setText(text === 'SIGNAL' ? 'SIGNALED' : 'SIGNAL');
      };

      const handleClick = () => {
        if (isClicked) {
            // Remove the person's genome from localStorage
            const signaledGenomesFromStorage = JSON.parse(localStorage.getItem('signaledGenomes')) || [];
            const updatedSignaledGenomes = signaledGenomesFromStorage.filter(
              (genome) => genome.ggId !== result.ggId
            );
            localStorage.setItem('signaledGenomes', JSON.stringify(updatedSignaledGenomes));
          } else {
            // Add the person's genome to localStorage
            const signaledGenomesFromStorage = JSON.parse(localStorage.getItem('signaledGenomes')) || [];
            const updatedSignaledGenomes = [...signaledGenomesFromStorage, result];
            localStorage.setItem('signaledGenomes', JSON.stringify(updatedSignaledGenomes));
          }        

        setIsClicked(!isClicked);
      };

  return (
    <>
        <div className='genome-container'>
            <div className='genome-card'>
                <div className='hexagon'>
                    <div className='shape'>
                        <img src={result.imageUrl} alt='' />
                    </div>

                </div>
                <div className='profile-info'>
                    <p>{result.name}</p>
                    
                        <p className='genome'>
                            <Link to={`https://torre.ai/${result.username}`} style={{ textDecoration: "none" }}>
                            VIEW {result.name.split(' ')[0]}'S GENOME
                            </Link>
                            
                        </p>
                        <p className='signal'
                            onClick={()=>{
                            toggleContent();
                            handleClick();
                            }}
                            style={{
                            border: isClicked ? "solid 0.1rem #021212" : "solid 0.1rem #e7f553", 
                            color: isClicked ? "#021212" : '#e7f553', 
                            backgroundColor: isClicked ? "#e7f553" : "transparent",
                            }}>
                            {text}
                        </p>

                    
                </div>
                


            </div>
            

        </div>
    </>
  )
}
