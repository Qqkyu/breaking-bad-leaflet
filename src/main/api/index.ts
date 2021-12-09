import { store } from "main/store/store";
import { ThunkDispatch } from "redux-thunk";
import { Dispatch } from "redux";

import { IAppState, IAppActions } from "main/store/type";

import { setCharacters } from "library/common/actions/CharactersActions";
import { setQuotes } from "library/common/actions/QuotesActions";
import { setDeaths } from "library/common/actions/DeathsActions";
import { setEpisodes } from "library/common/actions/EpisodesActions";

import { character } from "library/common/components/Main/Character/character";
import { episode } from "library/common/components/Main/Episode/episode";
import { death } from "library/common/components/Main/Death/death";
import { quote } from "library/common/components/Main/Quote/quote";

import { isEmpty } from "library/utilities/utils";

import { apiMainPath, ApiPaths } from "library/common/constants/apiPaths";

interface IBreakingBadApi {
  fetchAllCharacters: () => void;
  fetchAllDeaths: () => void;
  fetchAllEpisodes: () => void;
  fetchAllQuotes: () => void;

  fetchRandomCharacter: () => void;
  fetchRandomQuote: () => void;
  fetchRandomDeath: () => void;
}

class BreakingBadApi implements IBreakingBadApi {
  private static instance?: BreakingBadApi;

  private constructor() {}

  static getInstance() {
    if (BreakingBadApi.instance) {
      return BreakingBadApi.instance;
    }
    BreakingBadApi.instance = new BreakingBadApi();
    return BreakingBadApi.instance;
  }

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

  public async fetchRandomCharacter(): Promise<character | undefined> {
    const apiPath = apiMainPath + ApiPaths.RandomCharacter;
    const res = await fetch(apiPath);
    const jsonRes = await res.json();
    return isEmpty(jsonRes) ? undefined : jsonRes[0];
  }

  public async fetchRandomQuote(): Promise<quote | undefined> {
    const apiPath = apiMainPath + ApiPaths.RandomQuote;
    const res = await fetch(apiPath);
    const jsonRes = await res.json();
    return isEmpty(jsonRes) ? undefined : jsonRes[0];
  }

  public async fetchRandomDeath(): Promise<death | undefined> {
    const apiPath = apiMainPath + ApiPaths.RandomDeath;
    const res = await fetch(apiPath);
    const jsonRes = await res.json();
    return isEmpty(jsonRes) ? undefined : jsonRes;
  }

  public async fetchCharacterById(id: number): Promise<character | undefined> {
    const apiPath = apiMainPath + ApiPaths.AllCharacters + id;
    const res = await fetch(apiPath);
    const jsonRes = await res.json();
    return isEmpty(jsonRes) ? undefined : jsonRes[0];
  }

  public async fetchDeathById(id: number): Promise<death | undefined> {
    const apiPath = apiMainPath + ApiPaths.AllDeaths;
    const res = await fetch(apiPath);
    const jsonRes = await res.json();
    return isEmpty(jsonRes) ? undefined : jsonRes.find((d: death) => d.death_id === id);
  }

  public async fetchEpisodeById(id: number): Promise<episode | undefined> {
    const apiPath = apiMainPath + ApiPaths.AllEpisodes + id;
    const res = await fetch(apiPath);
    const jsonRes = await res.json();
    return isEmpty(jsonRes) ? undefined : jsonRes[0];
  }

  public async fetchQuoteById(id: number): Promise<quote | undefined> {
    const apiPath = apiMainPath + ApiPaths.AllQuotes + id;
    const res = await fetch(apiPath);
    const jsonRes = await res.json();
    return isEmpty(jsonRes) ? undefined : jsonRes[0];
  }

  private fetchAndSetCharacters() {
    const apiPath = apiMainPath + ApiPaths.AllCharacters;

    return async function (dispatch: Dispatch) {
      const res = await fetch(apiPath);
      const jsonRes = await res.json();
      dispatch(setCharacters(jsonRes));
    };
  }

  private fetchAndSetDeaths() {
    const apiPath = apiMainPath + ApiPaths.AllDeaths;

    return async function (dispatch: Dispatch) {
      const res = await fetch(apiPath);
      const jsonRes = await res.json();
      dispatch(setDeaths(jsonRes));
    };
  }

  private fetchAndSetEpisodes() {
    const apiPath = apiMainPath + ApiPaths.AllEpisodes;

    return async function (dispatch: Dispatch) {
      const res = await fetch(apiPath);
      const jsonRes = await res.json();
      dispatch(setEpisodes(jsonRes));
    };
  }

  private fetchAndSetQuotes() {
    const apiPath = apiMainPath + ApiPaths.AllQuotes;

    return async function (dispatch: Dispatch) {
      const res = await fetch(apiPath);
      const jsonRes = await res.json();
      dispatch(setQuotes(jsonRes));
    };
  }
}

export default BreakingBadApi;
