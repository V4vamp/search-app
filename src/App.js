import './App.css';
import { SignalPage } from './pages/signalPage';
import { GenomeCard } from './components/genomeCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SearchPage } from './pages/searchPage';
import { ResultPage } from './pages/resultPage';
import { LandingPage } from "./pages/landingPage";
import { NavBar } from './components/navBar';
import { RecentQueries } from './pages/recentQueries';


function App() {
  

  return (
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/results" element={<ResultPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/signals" element={<SignalPage />} />
              <Route path="/profile" element={<GenomeCard />} />
              <Route path='/navbar' element={<NavBar />} />
              <Route path="/recent-search" element={<RecentQueries />} />
              
            </Routes>
          </Router>
            // <NavBar />


  );
}

export default App;
