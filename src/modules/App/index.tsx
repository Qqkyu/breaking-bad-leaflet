import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { ThemeAction } from "library/common/reducers/theme/theme-type";
import { changeTheme } from "library/common/actions/ThemeActions";
import { Theme } from "library/common/constants/theme";

import CharacterDetails from "library/common/components/Details/Character";
import EpisodeDetails from "library/common/components/Details/Episode";
import DeathDetails from "library/common/components/Details/Death";
import QuoteDetails from "library/common/components/Details/Quote";
import RandomCharacter from "library/common/components/RandomInfo/Character";
import RandomDeath from "library/common/components/RandomInfo/Death";
import RandomQuote from "library/common/components/RandomInfo/Quote";
import ScrollButton from "library/common/components/ScrollButton";
import ThemeToggle from "library/common/components/ThemeToggle";
import Header from "library/common/components/Header";
import SearchParams from "modules/SearchParams";
import { IAppState } from "main/store/type";
import BreakingBadApi from "main/api";

import "./appStyles.scss";

const api = BreakingBadApi.getInstance();

const App = () => {
  const theme = useSelector((state: IAppState) => state.theme.theme);
  const dispatch: Dispatch<ThemeAction> = useDispatch();

  useEffect(() => {
    api.fetchAllData();
  }, []);

  return (
    <div className={"theme " + (theme === Theme.Light ? "theme-default" : "theme-dark")}>
      <div className="base">
        <Router>
          <ThemeToggle changeTheme={() => dispatch(changeTheme())} />
          <header>
            <Header />
          </header>
          <ScrollButton />
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
    </div>
  );
};

export default App;
