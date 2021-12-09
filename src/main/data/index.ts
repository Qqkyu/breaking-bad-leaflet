import { SearchParamsType } from "library/common/constants/searchParams";
import { objects } from "library/common/constants/objects";
import { store } from "main/store/store";

class Data {
  private static instance?: Data;

  private constructor() {}

  static getInstance() {
    if (Data.instance) {
      return Data.instance;
    }
    Data.instance = new Data();
    return Data.instance;
  }

  public getDataByType(type: SearchParamsType): objects[] {
    const state = store.getState();

    switch (type) {
      case SearchParamsType.Character:
        return state.characters.characters;
      case SearchParamsType.Death:
        return state.deaths.deaths;
      case SearchParamsType.Episode:
        return state.episodes.episodes;
      case SearchParamsType.Quote:
        return state.quotes.quotes;
    }
  }
}

export default Data;
