import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { NavBar } from '../components/navBar'
import Icon from "../images/Search.png"
import "./search.css"

export const SearchPage = ({onSearch}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () =>{
        try {
                const response = await axios.post("https://torre.ai/api/entities/_searchStream", {
                    query : searchQuery,
                });

                onSearch(response.data)

                navigate('/results');

        } catch (error) {
            console.error("Error encountered searching for names:", error)
        }
    }

  return (
    <>

        <div className='container'>
            <div className='navbar'>
                <NavBar />
            </div>
            <div className='search-box'>
                <input
                type='text'
                    className='search-area'
                    placeholder='Search person by name...' 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>
                    <img src={Icon} alt='Search-icon' />
                </button>
            </div>
        </div>

    </>
  )
}
