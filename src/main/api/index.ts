import { store } from "main/store/store";
import { ThunkDispatch } from "redux-thunk";
import { IAppState, IAppActions } from "main/store/type";

import { character } from "library/common/components/Character/character";
import { death } from "library/common/components/Death/death";
import { episode } from "library/common/components/Episode/episode";
import { quote } from "library/common/components/Quote/quote";

import { fetchAndSetCharacters } from "library/common/actions/CharactersActions";
import { fetchAndSetEpisodes } from "library/common/actions/EpisodesActions";
import { fetchAndSetDeaths } from "library/common/actions/DeathsActions";
import { fetchAndSetQuotes } from "library/common/actions/QuotesActions";

interface IBreakingBadApi {
  getAllCharacters: () => character[];
  getAllDeaths: () => death[];
  getAllEpisodes: () => episode[];
  getAllQuotes: () => quote[];

  /*
  getRandomCharacter: () => character;
  getRandomQuote: () => quote;
  getRandomDeath: () => death;
  */
}

export class BreakingBadApi implements IBreakingBadApi {
  public fetchAllData(): void {
    this.getAllCharacters();
    this.getAllDeaths();
    this.getAllEpisodes();
    this.getAllQuotes();
  }

  public getAllCharacters(): character[] {
    const characters = store.getState().characters.characters;
    if (characters?.length === 0) {
      (store.dispatch as ThunkDispatch<IAppState, unknown, IAppActions>)(fetchAndSetCharacters());
    }
    return store.getState().characters.characters;
  }

  public getAllDeaths(): death[] {
    const deaths = store.getState().deaths.deaths;
    if (deaths?.length === 0) {
      (store.dispatch as ThunkDispatch<IAppState, unknown, IAppActions>)(fetchAndSetDeaths());
    }
    return store.getState().deaths.deaths;
  }

  public getAllEpisodes(): episode[] {
    const episodes = store.getState().episodes.episodes;
    if (episodes?.length === 0) {
      (store.dispatch as ThunkDispatch<IAppState, unknown, IAppActions>)(fetchAndSetEpisodes());
    }
    return store.getState().episodes.episodes;
  }

  public getAllQuotes(): quote[] {
    const quotes = store.getState().quotes.quotes;
    if (quotes?.length === 0) {
      (store.dispatch as ThunkDispatch<IAppState, unknown, IAppActions>)(fetchAndSetQuotes());
    }
    return store.getState().quotes.quotes;
  }
}
