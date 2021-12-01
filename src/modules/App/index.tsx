import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import SearchParams from "modules/SearchParams";
import CharacterDetails from "library/common/components/Details/Character";
import EpisodeDetails from "library/common/components/Details/Episode";
import DeathDetails from "library/common/components/Details/Death";
import QuoteDetails from "library/common/components/Details/Quote";

import "./appStyles.scss";
import { useEffect } from "react";
import api from "main/api";

const App = () => {
  useEffect(() => {
    api.fetchAllData();
  }, []);

  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Breaking Bad Leaflet</h1>
          </Link>
        </header>
        <Routes>
          <Route path="/characters/details/:id" element={<CharacterDetails />} />
          <Route path="/episodes/details/:id" element={<EpisodeDetails />} />
          <Route path="/deaths/details/:id" element={<DeathDetails />} />
          <Route path="/quotes/details/:id" element={<QuoteDetails />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
