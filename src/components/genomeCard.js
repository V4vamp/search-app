import React, { useState } from 'react';
import "./genome.css"

export const GenomeCard = ({result}) => {
    const [text, setText] = useState('SIGNAL');
    const [isClicked, setIsClicked] = useState();

    const toggleContent = () => {
        setText(text === 'SIGNAL' ? 'SIGNALED' : 'SIGNAL');
      };

      const handleClick = () => {
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
                            VIEW {result.name.split(' ')[0]}'S GENOME
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
