import { SearchParamsType } from "library/common/constants/searchParams";
import { objects } from "library/common/constants/objects";
import { store } from "main/store/store";
import { isEmpty } from "library/utilities/utils";
import api from "main/api";

class Data {
  public getDataByType(type: SearchParamsType): objects[] {
    this.fetchDataIfStoreUninitialized();

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

  public getDataByTypeAndId(type: SearchParamsType, id: number): objects | undefined {
    this.fetchDataIfStoreUninitialized();
    const state = store.getState();

    switch (type) {
      case SearchParamsType.Character:
        return state.characters.characters.find((val) => val.char_id === id);
      case SearchParamsType.Death:
        return state.deaths.deaths.find((val) => val.death_id === id);
      case SearchParamsType.Episode:
        return state.episodes.episodes.find((val) => val.episode_id === id);
      case SearchParamsType.Quote:
        return state.quotes.quotes.find((val) => val.quote_id === id);
    }
  }

  private fetchDataIfStoreUninitialized() {
    const state = store.getState();
    if (isEmpty(Object.keys(state))) {
      api.fetchAllData();
    }
  }
}

export default new Data();
