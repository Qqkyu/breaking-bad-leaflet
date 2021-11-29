import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import SearchParams from "modules/SearchParams";
import Details from "modules/Details";

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
          <Route path="/details" element={<Details />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
