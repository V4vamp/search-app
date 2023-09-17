import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchPage } from './pages/searchPage';
import { ResultPage } from './pages/resultPage';


function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
          <Router>
            <Routes>
              <Route path="/" element={<SearchPage onSearch={handleSearch} />} />
              <Route path="/results" element={<ResultPage results={searchResults} />} />
            </Routes>
          </Router>
  );
}

export default App;
