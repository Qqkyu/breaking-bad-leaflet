import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Character from "library/common/components/Character";
import Episode from "library/common/components/Episode";
import Death from "library/common/components/Death";
import Quote from "library/common/components/Quote";
import SearchParams from "modules/SearchParams";
import Details from "modules/Details";

import { changeTheme } from "library/common/actions/ThemeActions";

import "./appStyles.scss";
import { useEffect } from "react";
import { BreakingBadApi } from "main/api";

const App = () => {
  useEffect(() => {
    new BreakingBadApi().fetchAllData();
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
          <Route path="/details/character/:id" element={<Character />} />
          <Route path="/details/death/:id" element={<Death />} />
          <Route path="/details/episode/:id" element={<Episode />} />
          <Route path="/details/quote/:id" element={<Quote />} />
          <Route path="/details" element={<Details />} />
          <Route path="/" element={<SearchParams changeTheme={changeTheme} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
