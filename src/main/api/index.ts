import { store } from "main/store/store";
import { ThunkDispatch } from "redux-thunk";
import { Dispatch } from "redux";

import { IAppState, IAppActions } from "main/store/type";

import { setCharacters, setRandomCharacter } from "library/common/actions/CharactersActions";
import { setQuotes, setRandomQuote } from "library/common/actions/QuotesActions";
import { setDeaths, setRandomDeath } from "library/common/actions/DeathsActions";
import { setEpisodes } from "library/common/actions/EpisodesActions";

import { apiMainPath, apiPaths } from "library/common/constants/apiPaths";

interface IBreakingBadApi {
  fetchAllCharacters: () => void;
  fetchAllDeaths: () => void;
  fetchAllEpisodes: () => void;
  fetchAllQuotes: () => void;

  fetchRandomCharacter: () => void;
  fetchRandomQuote: () => void;
  fetchRandomDeath: () => void;
}

export class BreakingBadApi implements IBreakingBadApi {
  public fetchAllData(): void {
    this.fetchAllCharacters();
    this.fetchAllDeaths();
    this.fetchAllEpisodes();
    this.fetchAllQuotes();
    this.fetchRandomCharacter();
    this.fetchRandomQuote();
    this.fetchRandomDeath();
  }

  public fetchAllCharacters(): void {
    const characters = store.getState().characters.characters;
    if (characters?.length === 0) {
      (store.dispatch as ThunkDispatch<IAppState, unknown, IAppActions>)(this.fetchAndSetCharacters());
    }
  }

  public fetchAllDeaths(): void {
    const deaths = store.getState().deaths.deaths;
    if (deaths?.length === 0) {
      (store.dispatch as ThunkDispatch<IAppState, unknown, IAppActions>)(this.fetchAndSetDeaths());
    }
  }

  public fetchAllEpisodes(): void {
    const episodes = store.getState().episodes.episodes;
    if (episodes?.length === 0) {
      (store.dispatch as ThunkDispatch<IAppState, unknown, IAppActions>)(this.fetchAndSetEpisodes());
    }
  }

  public fetchAllQuotes(): void {
    const quotes = store.getState().quotes.quotes;
    if (quotes?.length === 0) {
      (store.dispatch as ThunkDispatch<IAppState, unknown, IAppActions>)(this.fetchAndSetQuotes());
    }
  }

  public fetchRandomCharacter(): void {
    (store.dispatch as ThunkDispatch<IAppState, unknown, IAppActions>)(this.fetchAndSetRandomCharacter());
  }

  public fetchRandomQuote(): void {
    (store.dispatch as ThunkDispatch<IAppState, unknown, IAppActions>)(this.fetchAndSetRandomQuote());
  }

  public fetchRandomDeath(): void {
    (store.dispatch as ThunkDispatch<IAppState, unknown, IAppActions>)(this.fetchAndSetRandomDeath());
  }

  private fetchAndSetCharacters() {
    const apiPath = apiMainPath + apiPaths.AllCharacters;

    return async function (dispatch: Dispatch) {
      const res = await fetch(apiPath);
      const jsonRes = await res.json();
      dispatch(setCharacters(jsonRes));
    };
  }

  private fetchAndSetDeaths() {
    const apiPath = apiMainPath + apiPaths.AllDeaths;

    return async function (dispatch: Dispatch) {
      const res = await fetch(apiPath);
      const jsonRes = await res.json();
      dispatch(setDeaths(jsonRes));
    };
  }

  private fetchAndSetEpisodes() {
    const apiPath = apiMainPath + apiPaths.AllEpisodes;

    return async function (dispatch: Dispatch) {
      const res = await fetch(apiPath);
      const jsonRes = await res.json();
      dispatch(setEpisodes(jsonRes));
    };
  }

  private fetchAndSetQuotes() {
    const apiPath = apiMainPath + apiPaths.AllQuotes;

    return async function (dispatch: Dispatch) {
      const res = await fetch(apiPath);
      const jsonRes = await res.json();
      dispatch(setQuotes(jsonRes));
    };
  }

  private fetchAndSetRandomCharacter() {
    const apiPath = apiMainPath + apiPaths.RandomCharacter;

    return async function (dispatch: Dispatch) {
      const res = await fetch(apiPath);
      const jsonRes = await res.json();
      dispatch(setRandomCharacter(jsonRes));
    };
  }

  private fetchAndSetRandomQuote() {
    const apiPath = apiMainPath + apiPaths.RandomQuote;

    return async function (dispatch: Dispatch) {
      const res = await fetch(apiPath);
      const jsonRes = await res.json();
      dispatch(setRandomQuote(jsonRes));
    };
  }

  private fetchAndSetRandomDeath() {
    const apiPath = apiMainPath + apiPaths.RandomDeath;

    return async function (dispatch: Dispatch) {
      const res = await fetch(apiPath);
      const jsonRes = await res.json();
      dispatch(setRandomDeath(jsonRes));
    };
  }
}
