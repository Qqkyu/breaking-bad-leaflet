import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import CharacterDetails from "library/common/components/Details/Character";
import EpisodeDetails from "library/common/components/Details/Episode";
import DeathDetails from "library/common/components/Details/Death";
import QuoteDetails from "library/common/components/Details/Quote";
import RandomCharacter from "library/common/components/RandomInfo/Character";
import RandomDeath from "library/common/components/RandomInfo/Death";
import RandomQuote from "library/common/components/RandomInfo/Quote";
import SearchParams from "modules/SearchParams";
import api from "main/api";

import "./appStyles.scss";

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
          <Route path="/characters/random" element={<RandomCharacter />} />
          <Route path="/deaths/random" element={<RandomDeath />} />
          <Route path="/quotes/random" element={<RandomQuote />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
