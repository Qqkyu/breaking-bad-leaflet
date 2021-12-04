import { useEffect } from "react";
import Header from "library/common/components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
          <Header />
        </header>
        <Switch>
          <Route path="/characters/random" render={(props) => <RandomCharacter {...props} key={Date.now()} />} />
          <Route path="/deaths/random" render={(props) => <RandomDeath {...props} key={Date.now()} />} />
          <Route path="/quotes/random" render={(props) => <RandomQuote {...props} key={Date.now()} />} />
          <Route path="/characters/:id" component={CharacterDetails} />
          <Route path="/episodes/:id" component={EpisodeDetails} />
          <Route path="/deaths/:id" component={DeathDetails} />
          <Route path="/quotes/:id" component={QuoteDetails} />
          <Route path="/" component={SearchParams} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
