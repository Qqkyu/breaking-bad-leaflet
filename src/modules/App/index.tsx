import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import ThemeContext from "library/common/components/ThemeContext";
import Character from "library/common/components/Character";
import Episode from "library/common/components/Episode";
import Death from "library/common/components/Death";
import Quote from "library/common/components/Quote";
import { Theme } from "library/common/constants/theme";
import SearchParams from "modules/SearchParams";
import Details from "modules/Details";

import "./appStyles.scss";

const App = () => {
  const theme = useState(Theme.dark);
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Breaking Bad Leaflet</h1>
            </Link>
          </header>
          <Routes>
            <Route path="/details/character/:id" element={<Character />} />
            <Route path="/details/death/:id" element={<Death />} />
            <Route path="/details/episode/:id" element={<Episode />} />
            <Route path="/details/quote/:id" element={<Quote />} />
            <Route path="/details" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
