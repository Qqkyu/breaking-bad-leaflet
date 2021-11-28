import { combineReducers } from "redux";

import charactersReducer from "library/common/reducers/characters/CharactersReducer";
import episodesReducer from "library/common/reducers/episodes/EpisodesReducer";
import deathsReducer from "library/common/reducers/deaths/DeathsReducer";
import quotesReducer from "library/common/reducers/quotes/QuotesReducer";
import themeReducer from "library/common/reducers/theme/ThemeReducer";

const mainReducer = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  deaths: deathsReducer,
  quotes: quotesReducer,
  theme: themeReducer,
});

export default mainReducer;
